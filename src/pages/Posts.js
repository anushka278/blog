import React from 'react';
import './Posts.css';

const Posts = () => {
  return (
    <div className="posts-page">
      {/* Hero Section */}
      <section className="posts-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>📝 Coming Soon</span>
            </div>
            <h1 className="hero-title">
              Posts <span className="gradient-text">Archive</span>
            </h1>
            <p className="hero-description">
              This section is under construction. Stay tuned for curated posts and updates.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Placeholder Content */}
        <section className="placeholder-section">
          <div className="placeholder-content">
            <div className="placeholder-icon">🚧</div>
            <h2 className="placeholder-title">Under Construction</h2>
            <p className="placeholder-description">
              We're working on something amazing for this section. Check back soon!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Posts; 