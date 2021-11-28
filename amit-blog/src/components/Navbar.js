const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        Hazraim Blog{'  '}
        <span class="material-icons">smoking_rooms</span>
      </h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '10px',
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
