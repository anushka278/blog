import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content fade-in">
            <div className="hero-profile">
              <div className="profile-image">
                <img 
                  src="/profile.jpeg" 
                  alt="Amit Kaistha" 
                  className="profile-img"
                />
                <div className="profile-badge">
                  <span>Business Head - Product AI</span>
                </div>
              </div>
            </div>
            <div className="hero-subtitle">
              Leading AI Transformation | Ecosystem & Change Catalyst | Tech Strategist | Future of Work Advocate | Speaker, Advisor & Mentor
            </div>
            <h1 className="hero-title">
              Amit 
              <span className="gradient-text"> Kaistha</span>
            </h1>
            <p className="hero-description">
              Over the years, I've learned that leadership isn't about titles or spotlight—it's about clarity of intent, authenticity in action, and the ability to elevate others.
            </p>
            
            <div className="hero-beliefs">
              <h3>I believe in:</h3>
              <ul>
                <li>Purpose over hierarchy</li>
                <li>Strengths over conformity</li>
                <li>Authenticity over approval</li>
              </ul>
            </div>
            
            <p className="hero-focus">
              Today, I'm focused on integrating strategy, leadership, and inner clarity—crafting leadership that delivers results and builds better humans.
            </p>
            
            <div className="hero-quote">
              "To me, leadership is not who I am in the spotlight. It's who I empower in the shadows."
            </div>
            
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">
                Explore Insights
              </Link>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <h3>AI Ecosystem Architecture</h3>
                <p>Building scalable intelligence platforms</p>
              </div>
            </div>
            <div className="floating-card delayed">
              <div className="card-content">
                <h3>Leadership Transformation</h3>
                <p>From gatekeeper to ecosystem architect</p>
              </div>
            </div>
            <div className="floating-card delayed-2">
              <div className="card-content">
                <h3>Enterprise Innovation</h3>
                <p>Bridging startup agility with scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="featured-posts">
        <div className="container">
          <h2 className="section-title">Latest Insights</h2>
          <div className="posts-grid">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className={`post-card fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                <h3 className="post-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/blog" className="btn btn-primary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Professional Journey</h2>
            
            <div className="experience-section">
              <div className="current-role">
                <h3 className="role-title">Business Head - Product AI</h3>
                <div className="company-info">
                  <span className="company">Tech Mahindra</span>
                  <span className="duration">Jan 2024 - Present</span>
                  <span className="location">Redmond, Washington, United States</span>
                </div>
                <p className="role-description">
                  As the Business Head for Product AI, I lead the transformation of enterprises through AI productivity tools from hyperscalers. My focus is to drive workforce excellence and significantly enhance enterprise productivity by strategically integrating AI solutions and optimizing investment returns.
                </p>
                <p className="role-description">
                  Our Product AI services (agentX) are focused on maximizing ROI by leveraging state-of-the-art AI tools, establishing robust deployment frameworks, and seamlessly embedding these solutions into digital workplace and IT ecosystems.
                </p>
              </div>
              
              <div className="previous-role">
                <h4 className="role-subtitle">Global Head, Cloud Business</h4>
                <div className="role-meta">Tech Mahindra • Aug 2021 - Apr 2024 • Seattle, WA</div>
              </div>
              
              <div className="infosys-section">
                <h4 className="role-subtitle">Infosys - 18+ Years Journey</h4>
                <div className="role-highlights">
                  <p>• <strong>Associate Vice President - Partner Ecosystem:</strong> Established partnerships with the world's most visible tech companies, cultivating a product ecosystem that grew a billion-dollar partnership.</p>
                  <p>• <strong>Sr. Director, Data Science & Analytics:</strong> Led the development of an internal startup focused on ML and AI, securing capital funding and developing high-performing global teams.</p>
                  <p>• Consistently exceeded expectations in achieving global revenue goals and digital transformation metrics.</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h3 className="section-subtitle">Education</h3>
              <div className="education-item">
                <strong>Executive Master of Science in Technology Management</strong><br/>
                Columbia University School of Professional Studies
              </div>
              <div className="education-item">
                <strong>Post Graduate Diploma in Business Management</strong><br/>
                International Management Institute (IMI)
              </div>
            </div>
            
            <div className="stats">
              <div className="stat">
                <h3 className="stat-number gradient-text">20+</h3>
                <p className="stat-label">Years in Tech Leadership</p>
              </div>
              <div className="stat">
                <h3 className="stat-number gradient-text">$1B+</h3>
                <p className="stat-label">Partnership Value</p>
              </div>
              <div className="stat">
                <h3 className="stat-number gradient-text">3</h3>
                <p className="stat-label">Major Companies Led</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 