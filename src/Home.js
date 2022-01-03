const Home = () => {

  const handleClick = () => {
    console.log("clicked");
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default Home;