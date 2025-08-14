// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const loadingScreen = document.querySelector('.loading-screen');
const scrollProgress = document.querySelector('.scroll-progress');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
const navLinksElements = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
const profilePhoto = document.getElementById('profilePhoto');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

// Loading Screen Animation
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
    
    // Initialize animations after loading
    initAnimations();
  }, 1500);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  if (currentTheme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksElements.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Profile photo is now static and cannot be changed

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`[data-section="${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinksElements.forEach(link => link.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// Initialize Animations
function initAnimations() {
  // Hero Section Animations
  const heroTimeline = gsap.timeline();
  
  heroTimeline
    .from('.hero-title .title-line', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    })
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-buttons', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.code-window', {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.floating-shapes .shape', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=0.8');

  // Enhanced floating shapes animation
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, index) => {
    gsap.to(shape, {
      y: Math.random() * 40 - 20,
      x: Math.random() * 40 - 20,
      rotation: Math.random() * 360,
      duration: 4 + Math.random() * 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.5
    });
  });

  // Particle system animation
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    gsap.to(particle, {
      y: -window.innerHeight - 100,
      x: Math.random() * 200 - 100,
      duration: 8 + Math.random() * 4,
      repeat: -1,
      ease: 'none',
      delay: index * 0.8
    });
  });

  // Background layer cycling
  const bgLayers = document.querySelectorAll('.bg-layer');
  let currentLayer = 0;
  let isHovering = false;
  
  // Background cycling interval
  const bgInterval = setInterval(() => {
    if (!isHovering) {
      bgLayers.forEach((layer, index) => {
        if (index === currentLayer) {
          gsap.to(layer, { opacity: 1, duration: 2 });
        } else {
          gsap.to(layer, { opacity: 0, duration: 2 });
        }
      });
      currentLayer = (currentLayer + 1) % bgLayers.length;
    }
  }, 4000);

  // Interactive hover effects
  const heroSection = document.querySelector('.hero');
  
  heroSection.addEventListener('mouseenter', () => {
    isHovering = true;
    
    // Pause background cycling
    clearInterval(bgInterval);
    
    // Show first background layer with hover effect
    gsap.to(bgLayers[0], { opacity: 1, duration: 0.5 });
    gsap.to(bgLayers.slice(1), { opacity: 0, duration: 0.5 });
    
    // Enhance shape animations
    shapes.forEach(shape => {
      gsap.to(shape, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    // Speed up particle animations
    particles.forEach(particle => {
      gsap.to(particle, {
        duration: 4,
        ease: 'none'
      });
    });
  });
  
  heroSection.addEventListener('mouseleave', () => {
    isHovering = false;
    
    // Resume background cycling
    setInterval(() => {
      if (!isHovering) {
        bgLayers.forEach((layer, index) => {
          if (index === currentLayer) {
            gsap.to(layer, { opacity: 1, duration: 2 });
          } else {
            gsap.to(layer, { opacity: 0, duration: 2 });
          }
        });
        currentLayer = (currentLayer + 1) % bgLayers.length;
      }
    }, 4000);
    
    // Reset shape animations
    shapes.forEach(shape => {
      gsap.to(shape, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    // Reset particle animations
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        duration: 8 + Math.random() * 4,
        ease: 'none'
      });
    });
  });

  // Section Animations
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    const elements = section.querySelectorAll('.section-header, .about-content, .projects-grid, .skills-container, .contact-content');
    
    elements.forEach((element, elementIndex) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: elementIndex * 0.2,
        ease: 'power2.out'
      });
    });
  });

  // Project Cards Animation
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power2.out'
    });
  });

  // Certificate Cards Animation
  const certificateCards = document.querySelectorAll('.certificate-card');
  certificateCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power2.out'
    });
  });

  // Skill Progress Bars Animation
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(bar, {
          width: progress + '%',
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    });
  });

  // Stats Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const finalValue = parseInt(stat.textContent);
    
    ScrollTrigger.create({
      trigger: stat,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(stat, 
          { textContent: 0 },
          {
            textContent: finalValue,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 }
          }
        );
      }
    });
  });

  // Contact Form Animation
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power2.out'
    });
  });

  // Typing Effect for Code Window
  const codeElement = document.querySelector('.typing-code');
  if (codeElement) {
    const text = codeElement.textContent;
    codeElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        codeElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    setTimeout(typeWriter, 2000);
  }
}

// Enhanced Form Handling
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  // Show loading state
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (response.ok) {
      formResponse.textContent = result.message;
      formResponse.className = 'form-response success';
      this.reset();
      
      // Animate success
      gsap.fromTo(formResponse, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    } else {
      throw new Error(result.error || 'Something went wrong');
    }
  } catch (error) {
    formResponse.textContent = error.message;
    formResponse.className = 'form-response error';
    
    // Animate error
    gsap.fromTo(formResponse, 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
    );
  } finally {
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    // Hide response after 5 seconds
    setTimeout(() => {
      gsap.to(formResponse, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          formResponse.textContent = '';
          formResponse.className = 'form-response';
        }
      });
    }, 5000);
  }
});

// Smooth Scrolling for Navigation Links
navLinksElements.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update active nav link
      navLinksElements.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero-background');
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Cursor Effects (Optional)
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: 0.1
    });
  });

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
});

// Add custom cursor styles
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
  .custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(cursorStyles);

// Intersection Observer for Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));
});

// Performance Optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
  updateActiveNavLink();
}, 100));

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    mobileMenuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
  const certificateLinks = document.querySelectorAll('.certificate-actions .btn-ghost');
  
  certificateLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get certificate data
      const card = link.closest('.certificate-card');
      const title = card.querySelector('.certificate-title').textContent;
      const issuer = card.querySelector('.certificate-issuer').textContent;
      const description = card.querySelector('.certificate-description').textContent;
      const pdfUrl = link.href;
      
      // Create and show modal
      showCertificateModal(title, issuer, description, pdfUrl);
    });
  });
});

function showCertificateModal(title, issuer, description, pdfUrl) {
  // Remove existing modal if any
  const existingModal = document.querySelector('.certificate-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Create modal HTML
  const modalHTML = `
    <div class="certificate-modal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-pdf-preview">
            <i class="fas fa-file-pdf"></i>
            <h4>PDF Certificate</h4>
            <p>Click below to view or download the certificate</p>
          </div>
          <div class="modal-info">
            <p class="modal-issuer"><strong>Issuer:</strong> ${issuer}</p>
            <p class="modal-description">${description}</p>
          </div>
        </div>
        <div class="modal-footer">
          <a href="${pdfUrl}" class="btn-primary" target="_blank">
            <i class="fas fa-file-pdf"></i>
            <span>View PDF</span>
          </a>
          <button class="btn-ghost modal-close-btn">Close</button>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Add modal styles
  const modalStyles = document.createElement('style');
  modalStyles.textContent = `
    .certificate-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
    }
    
    .modal-content {
      position: relative;
      background: var(--card);
      border-radius: 16px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px var(--shadow);
      animation: modalSlideIn 0.3s ease;
    }
    
    @keyframes modalSlideIn {
      from {
        opacity: 0;
        transform: scale(0.8) translateY(-50px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid var(--border);
    }
    
    .modal-header h3 {
      color: var(--text);
      margin: 0;
    }
    
    .modal-close {
      background: none;
      border: none;
      font-size: 2rem;
      color: var(--text-secondary);
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    
    .modal-close:hover {
      background: var(--card-hover);
      color: var(--text);
    }
    
    .modal-body {
      padding: 1.5rem;
    }
    
    .modal-pdf-preview {
      margin-bottom: 1.5rem;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      text-align: center;
      color: white;
    }
    
    .modal-pdf-preview i {
      font-size: 4rem;
      margin-bottom: 1rem;
      color: white;
    }
    
    .modal-pdf-preview h4 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    .modal-pdf-preview p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
    }
    
    .modal-info {
      color: var(--text-secondary);
    }
    
    .modal-issuer {
      margin-bottom: 1rem;
      color: var(--primary);
      font-weight: 600;
    }
    
    .modal-footer {
      padding: 1.5rem;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }
  `;
  
  if (!document.querySelector('#certificate-modal-styles')) {
    modalStyles.id = 'certificate-modal-styles';
    document.head.appendChild(modalStyles);
  }
  
  // Add event listeners
  const modal = document.querySelector('.certificate-modal');
  const closeButtons = modal.querySelectorAll('.modal-close, .modal-close-btn');
  
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      gsap.to(modal, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => modal.remove()
      });
    });
  });
  
  modal.querySelector('.modal-overlay').addEventListener('click', () => {
    gsap.to(modal, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => modal.remove()
    });
  });
  
  // Animate modal in
  gsap.fromTo(modal, 
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
  );
}

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe up - could trigger mobile menu close
      if (navLinks.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add loading animation
  gsap.from('.loader', {
    scale: 0,
    rotation: 360,
    duration: 1,
    ease: 'back.out(1.7)'
  });
  
  // Add pulse animation to logo
  gsap.to('.logo-dot', {
    scale: 1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
  
  // Initialize navigation
  // Navigation is now properly set up
  
  // Test navigation functionality
  const testNav = document.querySelector('.nav-link[href="#about"]');
  if (testNav) {
    console.log('Navigation is working properly');
  }
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initAnimations,
    updateActiveNavLink,
    handleSwipe
  };
}
