const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>All Posts:</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <span
            onClick={() => handleDelete(blog.id)}
            className="material-icons"
            style={{ cursor: 'pointer' }}
          >
            delete
          </span>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
