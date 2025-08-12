# Arin Raja - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Node.js. Features advanced animations, dark/light theme support, and interactive elements.

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: GSAP-powered animations and transitions
- **Loading Screen**: Elegant loading animation with progress indicator

### 👤 Profile Features
- **Interactive Profile Photo**: Upload and change your profile picture
- **Photo Persistence**: Profile photos are saved locally and persist across sessions
- **Hover Effects**: Smooth hover animations with upload tooltip
- **Social Links**: Integrated social media links with hover effects

### 🏆 Certificates Section
- **Certificate Gallery**: Showcase your achievements and certifications
- **Interactive Cards**: Hover effects and smooth animations
- **Modal View**: Click to view certificate details in a modal
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Download Links**: Easy access to certificate downloads

### 📱 Navigation & UX
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Navigation**: Highlights current section in navigation
- **Mobile Menu**: Responsive mobile navigation with hamburger menu
- **Progress Bar**: Visual scroll progress indicator
- **Keyboard Navigation**: Full keyboard accessibility support

### 📧 Contact Form
- **Form Validation**: Client and server-side validation
- **Email Integration**: Nodemailer integration for sending emails
- **Rate Limiting**: Protection against spam submissions
- **Success/Error Handling**: User-friendly feedback messages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd porthfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
Create a `.env` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
porthfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Styles and animations
│   └── script.js           # JavaScript functionality
├── server.js               # Express server
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎯 Key Features Explained

### Profile Photo Upload
- Click the camera icon on your profile photo to upload a new image
- Supports all common image formats (JPG, PNG, GIF, etc.)
- Images are automatically resized and optimized
- Photos persist across browser sessions using localStorage

### Certificates Section
- Displays your professional certifications and achievements
- Each certificate card shows:
  - Certificate image/thumbnail
  - Title and issuer information
  - Description of the certification
  - View/Download options
- Click "View Certificate" to see details in a modal
- Responsive grid layout adapts to screen size

### Theme System
- Toggle between light and dark themes
- Theme preference is saved in localStorage
- Smooth transitions between themes
- All components adapt to the selected theme

## 🛠️ Customization

### Adding Your Information
1. **Profile**: Update the profile section in `index.html`
2. **Projects**: Add your projects to the projects section
3. **Skills**: Modify the skills and progress bars
4. **Certificates**: Add your certificates with images and details
5. **Contact**: Update contact information and social links

### Styling
- CSS variables for easy theme customization
- Modular CSS structure for maintainability
- Responsive breakpoints for all screen sizes

### Animations
- GSAP animations for smooth interactions
- Scroll-triggered animations
- Hover effects and transitions

## 🔧 Development

### Available Scripts
- `npm start`: Start the production server
- `npm run dev`: Start development server with nodemon
- `npm run build`: Build the project (static site)

### Adding New Features
1. Update HTML structure in `index.html`
2. Add styles in `style.css`
3. Implement functionality in `script.js`
4. Test across different devices and browsers

## 🌟 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Security**: Helmet.js, CORS, Rate Limiting
- **Styling**: CSS Grid, Flexbox, CSS Variables

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Name**: Arin Raja
- **Email**: arin.raja@example.com
- **LinkedIn**: [@arin-raja](https://www.linkedin.com/in/arin-raja)
- **GitHub**: [@Arinraja](https://github.com/Arinraja)

---

Made with ❤️ by Arin Raja 