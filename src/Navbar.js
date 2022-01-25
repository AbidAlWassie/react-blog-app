const Navbar = () => {
  const css = {
    color: "#ffffff",
    backgroundColor: "#f1356d",
    borderRadius: "5px"
  };
  return ( 
    <nav className="navbar">
      <h1 className="bg-indigo-500 text-white px-2 py-1">React Test</h1>
      <a href="/">Home</a>
      <a href="/create" style={css}>New Blog</a>
    </nav>
  );
}

export default Navbar;