# Arin Raja - Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, and advanced animations using GSAP. Features a clean design with dark/light theme support, smooth animations, and interactive elements.

## ✨ Features

### 🎨 **Visual Enhancements**
- **Advanced Animations**: GSAP-powered smooth animations and transitions
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Loading Screen**: Animated loading screen with custom loader
- **Scroll Progress**: Real-time scroll progress indicator
- **Floating Elements**: Animated background shapes
- **Parallax Effects**: Smooth parallax scrolling
- **Custom Cursor**: Interactive cursor effects

### 🧭 **Navigation & UX**
- **Sticky Navbar**: Glass-morphism effect with backdrop blur
- **Active Section Highlighting**: Automatic navigation highlighting
- **Smooth Scrolling**: GSAP-powered smooth section transitions
- **Mobile Menu**: Animated hamburger menu for mobile devices
- **Touch Gestures**: Swipe support for mobile navigation

### 🎯 **Interactive Elements**
- **Project Cards**: Hover effects with 3D transformations
- **Skill Progress Bars**: Animated progress indicators
- **Contact Form**: Enhanced form with loading states and animations
- **Social Links**: Interactive social media buttons
- **Theme Toggle**: Animated theme switching

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Large touch targets for mobile
- **Performance Optimized**: Throttled scroll events and lazy loading
- **Accessibility**: Keyboard navigation and screen reader support

## 🚀 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modern JavaScript features
- **GSAP**: Professional animation library
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins)

### Backend
- **Node.js**: Server runtime
- **Express.js**: Web framework
- **Nodemailer**: Email functionality
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API protection

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the website**
   Open your browser and navigate to `http://localhost:3000`

## 🔧 Configuration

### Email Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the portfolio
3. Add the credentials to your `.env` file

### Customization
- **Colors**: Modify CSS variables in `public/style.css`
- **Content**: Update HTML content in `public/index.html`
- **Animations**: Adjust GSAP animations in `public/script.js`
- **Styling**: Customize CSS classes and animations

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Styles and animations
│   └── script.js           # JavaScript functionality
├── server.js               # Express server
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables
└── README.md              # Documentation
```

## 🎨 Animation Features

### Hero Section
- **Staggered Text Animation**: Title lines animate in sequence
- **Floating Shapes**: Continuous background animations
- **Code Window**: 3D perspective with typing effect
- **Parallax Scrolling**: Background movement on scroll

### Project Cards
- **Hover Effects**: Scale and shadow transformations
- **Entrance Animations**: Staggered card reveals
- **Interactive Buttons**: Micro-animations on hover

### Skills Section
- **Progress Bars**: Animated skill level indicators
- **Icon Animations**: Rotating skill icons
- **Hover Effects**: Card transformations

### Contact Form
- **Floating Labels**: Animated input labels
- **Loading States**: Spinner animations
- **Success/Error**: Animated response messages

## 🌙 Theme System

The portfolio supports both light and dark themes:

- **Automatic Detection**: Respects user's system preference
- **Manual Toggle**: Theme toggle button in navigation
- **Persistent Storage**: Remembers user's choice
- **Smooth Transitions**: Animated theme switching

## 📱 Mobile Features

- **Touch Gestures**: Swipe to close mobile menu
- **Responsive Design**: Optimized for all screen sizes
- **Performance**: Optimized animations for mobile devices
- **Accessibility**: Large touch targets and clear navigation

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin protection
- **Rate Limiting**: API protection against spam
- **Input Validation**: Sanitized form inputs
- **Error Handling**: Graceful error responses

## 🚀 Performance Optimizations

- **Throttled Scroll Events**: Reduced scroll event frequency
- **Lazy Loading**: Images and animations load on demand
- **Minified Assets**: Optimized file sizes
- **Caching**: Browser caching for static assets
- **Compression**: Gzip compression for responses

## 🛠️ Development

### Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run build      # Build script (placeholder)
```

### Development Features
- **Hot Reloading**: Automatic server restart on file changes
- **Error Logging**: Detailed error messages in development
- **Debug Mode**: Enhanced logging for debugging

## 📊 API Endpoints

- `GET /` - Main portfolio page
- `POST /contact` - Contact form submission
- `GET /health` - Health check endpoint
- `GET /api` - API information

## 🎯 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Project filtering and search
- [ ] Multi-language support
- [ ] PWA features (offline support)
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Image optimization
- [ ] CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Arin Raja**
- LinkedIn: [@arin-raja](https://www.linkedin.com/in/arin-raja)
- GitHub: [@Arinraja](https://github.com/Arinraja)

## 🙏 Acknowledgments

- GSAP for amazing animation capabilities
- Font Awesome for beautiful icons
- Google Fonts for typography
- Express.js community for the excellent framework

---

**Built with ❤️ and lots of ☕** 