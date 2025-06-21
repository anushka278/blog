import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Define categories for professional organization
  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'ai', name: 'AI & Machine Learning', count: blogPosts.filter(p => p.tags.some(tag => ['AI', 'Machine Learning', 'Automation'].includes(tag))).length },
    { id: 'leadership', name: 'Leadership', count: blogPosts.filter(p => p.tags.includes('Leadership')).length },
    { id: 'strategy', name: 'Strategy & Innovation', count: blogPosts.filter(p => p.tags.some(tag => ['Strategy', 'Innovation', 'Digital Transformation'].includes(tag))).length },
    { id: 'tech', name: 'Technology', count: blogPosts.filter(p => p.tags.some(tag => ['Technology', 'Enterprise', 'Cloud'].includes(tag))).length }
  ];

  // Filter posts based on search, tag, and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    let matchesCategory = true;
    if (selectedCategory !== 'all') {
      switch (selectedCategory) {
        case 'ai':
          matchesCategory = post.tags.some(tag => ['AI', 'Machine Learning', 'Automation'].includes(tag));
          break;
        case 'leadership':
          matchesCategory = post.tags.includes('Leadership');
          break;
        case 'strategy':
          matchesCategory = post.tags.some(tag => ['Strategy', 'Innovation', 'Digital Transformation'].includes(tag));
          break;
        case 'tech':
          matchesCategory = post.tags.some(tag => ['Technology', 'Enterprise', 'Cloud'].includes(tag));
          break;
        default:
          matchesCategory = true;
          break;
      }
    }
    
    return matchesSearch && matchesTag && matchesCategory;
  });

  // Get featured posts (first 3 posts for demo)
  const featuredPosts = blogPosts.slice(0, 3);
  const regularPosts = filteredPosts; // Show ALL posts, not limited to 6

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>📚 Knowledge Hub</span>
            </div>
            <h1 className="hero-title">
              Professional <span className="gradient-text">Tech Insights</span>
            </h1>
            <p className="hero-description">
              Deep dives into AI transformation, leadership strategies, and enterprise technology. 
              Written by industry professionals for forward-thinking leaders.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">{blogPosts.length}+</span>
                <span className="stat-text">Expert Articles</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">{allTags.length}+</span>
                <span className="stat-text">Topics Covered</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">50K+</span>
                <span className="stat-text">Monthly Readers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Featured Posts Section */}
        <section className="featured-section">
          <div className="section-header">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">Hand-picked insights from industry leaders</p>
          </div>
          
          <div className="featured-grid">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="featured-card">
                <div className="featured-content">
                  <div className="featured-meta">
                    <span className="featured-badge">Featured</span>
                    <span className="featured-date">{post.date}</span>
                  </div>
                  <h3 className="featured-title">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="featured-excerpt">{post.excerpt}</p>
                  <div className="featured-tags">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="featured-tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="featured-footer">
                    <Link to={`/blog/${post.id}`} className="featured-read-more">
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <span className="featured-read-time">{post.readTime} read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories and Search */}
        <section className="controls-section">
          <div className="controls-header">
            <h2 className="controls-title">Browse by Category</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Search and Tag Filters */}
          <div className="filters-row">
            <div className="search-container">
              <div className="search-box">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
            
            <div className="tag-filters">
              <button
                className={`tag-filter ${!selectedTag ? 'active' : ''}`}
                onClick={() => setSelectedTag('')}
              >
                All Tags
              </button>
              {allTags.slice(0, 6).map(tag => (
                <button
                  key={tag}
                  className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts Section */}
        <section className="posts-section">
          <div className="section-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="section-subtitle">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <div className="no-posts-icon">📝</div>
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                  setSelectedCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="posts-grid">
              {regularPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="post-card"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="post-header">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-separator">•</span>
                      <span className="post-read-time">{post.readTime} read</span>
                    </div>
                  </div>
                  
                  <div className="post-content">
                    <h3 className="post-title">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                  </div>
                  
                  <div className="post-footer">
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className={`post-tag ${selectedTag === tag ? 'highlighted' : ''}`}
                          onClick={() => setSelectedTag(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/blog/${post.id}`} className="read-more-link">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="newsletter-section">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-description">
                Get the latest insights on AI, leadership, and technology delivered to your inbox.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog; 