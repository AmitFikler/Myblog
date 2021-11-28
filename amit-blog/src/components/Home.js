import React, { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'First Blog', body: 'blablabla', author: 'Amit', id: 1 },
    { title: 'enjoy', body: 'blablabla', author: 'Tetro', id: 2 },
    { title: 'thank u', body: 'blablabla', author: 'Amit', id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
