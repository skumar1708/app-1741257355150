import React from 'react';

function BlogPost({ title, date, content, category, image }) {
  return (
    <article className="blog-post">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{date} - {category}</p>
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;