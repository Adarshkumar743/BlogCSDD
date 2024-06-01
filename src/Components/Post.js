import React from 'react';
import '../styles/Post.css';

const Post = ({ title, date, author, image, content }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="post-meta">
        <span>{date}</span> | <span>{author}</span>
      </div>
      <img src={image} alt={title} className="post-image" />
      <p>{content}</p>
      <hr />
    </div>
  );
};

export default Post;
