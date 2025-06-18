# Personal Website - Tech Insights & AI Leadership

A modern, professional personal website showcasing tech insights and AI leadership content. Built with React and featuring a sleek, dark theme with glassmorphism effects.

## 🚀 Features

- **Modern Design**: Sleek, professional interface with dark theme and gradient accents
- **Blog System**: Complete blog with search, filtering, and individual post pages
- **LinkedIn Integration**: Blog posts extracted from LinkedIn content
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React** - Frontend framework
- **React Router** - Client-side routing
- **CSS3** - Modern styling with flexbox/grid
- **Glassmorphism** - Modern UI design trend
- **Inter Font** - Professional typography

## 📝 Blog Content

The blog features insights on:
- AI Ecosystem Architecture
- Enterprise AI Transformation
- Technology Leadership
- Startup vs Enterprise Dynamics
- The DRIVE Stack Framework

## 🎨 Design Features

- **Dark Theme**: Professional dark background with blue accents
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Smooth Animations**: Fade-in effects and hover interactions
- **Gradient Text**: Eye-catching gradient text effects
- **Floating Cards**: Dynamic floating card animations
- **Professional Typography**: Clean, readable fonts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## 🎯 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   └── Header.css
├── pages/
│   ├── Home.js           # Landing page
│   ├── Home.css
│   ├── Blog.js           # Blog listing
│   ├── Blog.css
│   ├── BlogPost.js       # Individual blog post
│   └── BlogPost.css
├── data/
│   └── blogPosts.js      # Blog content data
├── App.js                # Main app component
├── App.css               # Global app styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors
The website uses a professional color palette:
- Primary: #3b82f6 (Blue)
- Background: #0f0f23 (Dark Navy)
- Secondary: #1a1a2e (Dark Blue)
- Text: #e0e6ed (Light Gray)

### Adding New Blog Posts

Edit `src/data/blogPosts.js` to add new blog posts:

```javascript
{
  id: 4,
  title: "Your Post Title",
  excerpt: "Brief description...",
  content: `Full post content...`,
  date: "2025-01-24",
  tags: ["Tag1", "Tag2"],
  readTime: "5 min read"
}
```

## 🌟 Features Highlights

### Home Page
- Hero section with animated floating cards
- Featured blog posts
- Statistics section
- Call-to-action buttons

### Blog Page
- Search functionality
- Tag-based filtering
- Post statistics
- Responsive card layout

### Blog Post Page
- Rich typography with formatted content
- Breadcrumb navigation
- Social sharing
- Related posts
- Previous/next navigation

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Development

### Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

### Performance Optimizations

- Lazy loading for images
- Efficient React rendering
- Minimal JavaScript bundles
- Optimized CSS with modern features

## 📦 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Perfect for React applications
- **GitHub Pages**: Free hosting for personal projects

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Contact form
- [ ] Newsletter subscription
- [ ] Blog comments
- [ ] Search engine optimization
- [ ] Progressive Web App (PWA)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ for showcasing tech leadership and AI insights. 