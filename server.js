const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  }
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));

// Body parsing middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Simple rate limiting implementation
const rateLimit = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;
  
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  const userData = rateLimit.get(ip);
  
  if (now > userData.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (userData.count >= maxRequests) {
    return false;
  }
  
  userData.count++;
  return true;
}

// Apply rate limiting to contact endpoint
app.post("/contact", async (req, res) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  
  if (!checkRateLimit(clientIP)) {
    return res.status(429).json({ 
      error: 'Too many contact form submissions, please try again later.' 
    });
  }

  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: "All fields are required." 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: "Please provide a valid email address." 
    });
  }

  // Sanitize inputs
  const sanitizedName = name.trim().substring(0, 100);
  const sanitizedEmail = email.trim().substring(0, 100);
  const sanitizedMessage = message.trim().substring(0, 1000);

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <h2 style="color: #4f46e5; margin-bottom: 20px;">New Contact Message</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 15px;">Contact Details</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Name:</strong>
              <span style="color: #333; margin-left: 10px;">${sanitizedName}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${sanitizedEmail}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Message:</strong>
              <div style="color: #333; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</div>
            </div>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio website contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Message
        
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Message: ${sanitizedMessage}
        
        Sent from portfolio website at ${new Date().toLocaleString()}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Success response
    res.json({ 
      message: "Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon." 
    });

  } catch (err) {
    console.error("Email send failed:", err);
    
    // Log error details for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error("Error details:", {
        message: err.message,
        stack: err.stack,
        code: err.code
      });
    }
    
    res.status(500).json({ 
      error: "Something went wrong while sending your message. Please try again later or contact me directly." 
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API info endpoint
app.get("/api", (req, res) => {
  res.json({
    name: "Arin Raja Portfolio API",
    version: "1.0.0",
    endpoints: {
      contact: "POST /contact",
      health: "GET /health"
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: "Page not found" 
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  
  res.status(500).json({ 
    error: "Internal server error" 
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Contact form endpoint: http://localhost:${PORT}/contact`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`🔧 Development mode enabled`);
  }
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});
