import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on search and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-page">
      <div className="container">
        {/* Header */}
        <div className="blog-header fade-in">
          <h1 className="page-title">
            <span className="gradient-text">Tech Insights</span> & AI Leadership
          </h1>
          <p className="page-description">
            Exploring the future of technology, AI transformation, and leadership in the digital age. 
            Each post offers practical insights from real-world enterprise AI implementations.
          </p>
        </div>

        {/* Filters */}
        <div className="blog-filters fade-in">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="tag-filters">
            <button
              className={`tag-filter ${!selectedTag ? 'active' : ''}`}
              onClick={() => setSelectedTag('')}
            >
              All Posts
            </button>
            {allTags.map(tag => (
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

        {/* Posts */}
        <div className="blog-posts">
          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <h3>No posts found</h3>
              <p>Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="posts-list">
              {filteredPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="blog-post-card fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    
                    <h2 className="post-title">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="post-tags">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className={`tag ${selectedTag === tag ? 'highlighted' : ''}`}
                          onClick={() => setSelectedTag(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={`/blog/${post.id}`} className="read-more-btn">
                      Read Full Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="blog-stats fade-in">
          <div className="stat">
            <span className="stat-number gradient-text">{blogPosts.length}</span>
            <span className="stat-label">Total Articles</span>
          </div>
          <div className="stat">
            <span className="stat-number gradient-text">{allTags.length}</span>
            <span className="stat-label">Topics Covered</span>
          </div>
          <div className="stat">
            <span className="stat-number gradient-text">
              {blogPosts.reduce((total, post) => total + parseInt(post.readTime), 0)}
            </span>
            <span className="stat-label">Minutes of Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 