import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Posts from './pages/Posts';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    
    // Apply theme to body immediately
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
    
    return isDark;
  });

  useEffect(() => {
    // Apply theme to document body
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="App">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 