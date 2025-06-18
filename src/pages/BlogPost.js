import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Format content with better typography
  const formatContent = (content) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          const text = paragraph.slice(2, -2);
          return `<h3 key="${index}" class="content-header">${text}</h3>`;
        }
        
        // Handle bullet points
        if (paragraph.includes('- ')) {
          const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
          const listItems = items.map(item => 
            `<li>${item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`
          ).join('');
          return `<ul key="${index}" class="content-list">${listItems}</ul>`;
        }
        
        // Handle regular paragraphs with bold text
        const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return `<p key="${index}" class="content-paragraph">${formattedParagraph}</p>`;
      })
      .join('');
  };

  return (
    <div className="blog-post-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb fade-in">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">→</span>
          <Link to="/blog" className="breadcrumb-link">Blog</Link>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-current">{post.title}</span>
        </nav>

        {/* Post Header */}
        <header className="post-header fade-in">
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
          
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <article className="post-content fade-in">
          <div 
            className="content-body"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </article>

        {/* Share & Actions */}
        <div className="post-actions fade-in">
          <button 
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          
          <div className="share-buttons">
            <button 
              className="share-btn"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
            >
              Share
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="post-navigation fade-in">
          {prevPost && (
            <Link to={`/blog/${prevPost.id}`} className="nav-link prev-post">
              <div className="nav-direction">← Previous</div>
              <div className="nav-title">{prevPost.title}</div>
            </Link>
          )}
          
          {nextPost && (
            <Link to={`/blog/${nextPost.id}`} className="nav-link next-post">
              <div className="nav-direction">Next →</div>
              <div className="nav-title">{nextPost.title}</div>
            </Link>
          )}
        </nav>

        {/* Related Posts */}
        <section className="related-posts fade-in">
          <h3 className="related-title">More Insights</h3>
          <div className="related-grid">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="related-card"
                >
                  <h4 className="related-card-title">{relatedPost.title}</h4>
                  <p className="related-card-excerpt">{relatedPost.excerpt}</p>
                  <div className="related-card-meta">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost; 