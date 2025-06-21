import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      {/* Executive Hero Section */}
      <section className="executive-hero">
        <div className="executive-container">
          <div className="executive-profile">
            <div className="profile-section">
              <div className="profile-image-wrapper">
                <img 
                  src="/profile.jpeg" 
                  alt="Amit Kaistha" 
                  className="executive-photo"
                />
              </div>
            </div>
            <div className="executive-info">
              <div className="executive-header">
                <h1 className="executive-name">
                  Amit <span className="name-accent">Kaistha</span>
                </h1>
                <div className="executive-title">
                  Founder & CEO
                </div>
                <div className="executive-company">
                  Avolar AI | Seattle, WA
                </div>
              </div>
              
              <div className="executive-tagline">
                <p>Leading AI Transformation | Ecosystem & Change Catalyst | Tech Strategist | Future of Work Advocate | Speaker, Advisor & Mentor</p>
              </div>

              <div className="executive-stats">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Leadership</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$1B+</div>
                  <div className="stat-label">Partnership Value</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Major Companies</div>
                </div>
              </div>

              <div className="executive-actions">
                <Link to="/blog" className="btn btn-primary btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  Read Insights
                </Link>
                <a href="#contact" className="btn btn-secondary btn-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="philosophy-section">
        <div className="executive-container">
          <div className="philosophy-content">
            <div className="philosophy-quote">
              <blockquote>
                "To me, leadership is not who I am in the spotlight. It's who I empower in the shadows."
              </blockquote>
            </div>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <div className="philosophy-icon">⭐</div>
                <h3>Purpose over hierarchy</h3>
                <p>Leading with clear intent and meaningful direction rather than positional authority.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">💪</div>
                <h3>Strengths over conformity</h3>
                <p>Empowering individual talents and diverse perspectives to drive innovation.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">🤝</div>
                <h3>Authenticity over approval</h3>
                <p>Building trust through genuine relationships and transparent communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="expertise-section">
        <div className="executive-container">
          <div className="section-header">
            <h2 className="section-title">Areas of Expertise</h2>
            <p className="section-subtitle">Transforming enterprises through strategic AI integration and leadership excellence</p>
          </div>
          
          <div className="expertise-grid">
            <div className="expertise-card featured">
              <div className="expertise-header">
                <div className="expertise-icon">🤖</div>
                <h3>AI Ecosystem Architecture</h3>
              </div>
              <p>Building scalable intelligence platforms that maximize ROI through strategic AI tool integration and robust deployment frameworks.</p>
              <div className="expertise-tags">
                <span className="tag">AI Strategy</span>
                <span className="tag">Platform Design</span>
                <span className="tag">ROI Optimization</span>
              </div>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-header">
                <div className="expertise-icon">🚀</div>
                <h3>Leadership Transformation</h3>
              </div>
              <p>From gatekeeper to ecosystem architect - evolving leadership models for the digital age.</p>
              <div className="expertise-tags">
                <span className="tag">Change Management</span>
                <span className="tag">Digital Leadership</span>
              </div>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-header">
                <div className="expertise-icon">⚡</div>
                <h3>Enterprise Innovation</h3>
              </div>
              <p>Bridging startup agility with enterprise scale through strategic partnerships and ecosystem development.</p>
              <div className="expertise-tags">
                <span className="tag">Innovation Strategy</span>
                <span className="tag">Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-section">
        <div className="executive-container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">Building enterprise transformation through leadership and innovation</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker current">
                <div className="timeline-icon">🚀</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-company">
                  <h3>Avolar AI</h3>
                  <span className="company-duration">2025 - Present</span>
                </div>
                <div className="timeline-role">
                  <h4>Founder & CEO</h4>
                  <span className="role-duration">Jan 2025 - Present</span>
                  <span className="role-location">Seattle, WA</span>
                </div>
                <div className="timeline-description">
                  <p>Leading AI transformation initiatives and building next-generation enterprise AI solutions. Focus on democratizing AI through intelligent automation and strategic ecosystem development.</p>
                </div>
                <div className="timeline-skills">
                  <span className="skill-tag">AI Strategy</span>
                  <span className="skill-tag">Entrepreneurship</span>
                  <span className="skill-tag">Product Leadership</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">🔧</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-company">
                  <h3>Tech Mahindra</h3>
                  <span className="company-duration">2021 - 2024 · 3 yrs 11 mos</span>
                </div>
                <div className="timeline-roles">
                  <div className="timeline-role">
                    <h4>Business Head - Product AI</h4>
                    <span className="role-duration">Jan 2024 - Dec 2024 · 1 yr</span>
                    <span className="role-location">Redmond, WA</span>
                    <div className="timeline-description">
                      <p>Led enterprise transformation through AI productivity tools from hyperscalers. Focused on driving workforce excellence and enhancing enterprise productivity through strategic AI integration and optimizing investment returns via agentX platform.</p>
                    </div>
                  </div>
                  <div className="timeline-role">
                    <h4>Global Head, Cloud Business</h4>
                    <span className="role-duration">Aug 2021 - Apr 2024 · 2 yrs 9 mos</span>
                    <span className="role-location">Seattle, WA</span>
                  </div>
                </div>
                <div className="timeline-skills">
                  <span className="skill-tag">AI & Emerging Tech</span>
                  <span className="skill-tag">Business Partnerships</span>
                  <span className="skill-tag">P&L Management</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">💼</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-company">
                  <h3>Infosys</h3>
                  <span className="company-duration">2003 - 2021 · 18 yrs 7 mos</span>
                </div>
                <div className="timeline-roles">
                  <div className="timeline-role">
                    <h4>Associate Vice President, Client Partner & Delivery</h4>
                    <span className="role-duration">Jan 2020 - Jul 2021 · 1 yr 7 mos</span>
                    <span className="role-location">Seattle, WA</span>
                    <div className="timeline-description">
                      <p>Led sourcing and transformation journey for TELCOs and Technology Titans. Managed business growth, defined GTM Strategy, and built partnerships through consultative problem-solving approach.</p>
                    </div>
                  </div>
                  <div className="timeline-role">
                    <h4>Associate Vice President - Partner Ecosystem</h4>
                    <span className="role-duration">Jan 2017 - Dec 2019 · 3 yrs</span>
                    <span className="role-location">Seattle, WA</span>
                    <div className="timeline-description">
                      <p>Established partnerships with world's most visible tech companies. Cultivated billion-dollar partnership ecosystem and enabled Infosys to become top U.S. partner globally.</p>
                    </div>
                  </div>
                  <div className="timeline-role">
                    <h4>Sr. Director, Delivery & Solutions / Data Science and Analytics</h4>
                    <span className="role-duration">Jan 2014 - Dec 2016 · 3 yrs</span>
                    <span className="role-location">Seattle, WA</span>
                    <div className="timeline-description">
                      <p>Led development of internal startup focused on Data Science, Analytics, Machine Learning, and AI. Secured capital funding and developed high-performing global teams.</p>
                    </div>
                  </div>
                  <div className="timeline-role">
                    <h4>Sr. Engagement Manager - Enterprise Accounts</h4>
                    <span className="role-duration">Jan 2010 - Dec 2013 · 4 yrs</span>
                  </div>
                  <div className="timeline-role">
                    <h4>Group Program Manager</h4>
                    <span className="role-duration">Jan 2003 - Dec 2009 · 7 yrs</span>
                  </div>
                </div>
                <div className="timeline-skills">
                  <span className="skill-tag">Global Partnerships</span>
                  <span className="skill-tag">Digital Transformation</span>
                  <span className="skill-tag">Data Science & Analytics</span>
                  <span className="skill-tag">Enterprise Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="insights-section">
        <div className="executive-container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">Thought leadership on AI transformation and strategic business evolution</p>
          </div>
          
          <div className="insights-grid">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="insight-card">
                <div className="insight-header">
                  <div className="insight-meta">
                    <span className="insight-date">{post.date}</span>
                    <span className="insight-read-time">{post.readTime}</span>
                  </div>
                </div>
                <h3 className="insight-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="insight-excerpt">{post.excerpt}</p>
                <div className="insight-footer">
                  <div className="insight-tags">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="insight-tag">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className="insight-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="insights-footer">
            <Link to="/blog" className="btn btn-primary">
              View All Insights
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18l-2-3H5l-2 3zM5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="contact-section">
        <div className="executive-container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready to Transform Your Enterprise?</h2>
              <p>Let's discuss how AI transformation and strategic leadership can accelerate your organization's growth and innovation.</p>
            </div>
            <div className="contact-actions">
                              <a href="mailto:amitkaistha@gmail.com" className="btn btn-primary btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get In Touch
              </a>
                              <a href="https://www.linkedin.com/in/amit-kaistha/" className="btn btn-secondary btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 