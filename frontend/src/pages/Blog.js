import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';

function Blog({ posts }) {
  const [category, setCategory] = useState('all');

  const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div>
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory('travel')}>Travel</button>
        <button onClick={() => setCategory('food')}>Food</button>
        <button onClick={() => setCategory('culture')}>Culture</button>
      </div>
      <section>
        {filteredPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </section>
    </div>
  );
}

export default Blog;