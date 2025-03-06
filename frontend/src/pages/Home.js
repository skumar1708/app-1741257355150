import React from 'react';
import BlogPost from '../components/BlogPost';

function Home({ posts }) {
  return (
    <div className="home-page">
      <h1>Welcome to the Travel Blog</h1>
      <section>
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </section>
    </div>
  );
}

export default Home;