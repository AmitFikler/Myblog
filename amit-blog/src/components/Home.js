import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'First Blog', body: 'blablabla', author: 'Amit', id: 1 },
    { title: 'enjoy', body: 'blablabla', author: 'Tetro', id: 2 },
    { title: 'thank u', body: 'blablabla', author: 'Amit', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('blalvla');
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
