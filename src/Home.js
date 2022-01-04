import { useState } from "react";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'Web dev tips', body: 'lorem ipsum', author: 'Abid', id: 1 },
    { title: 'Welcome cooking', body: 'lorem ipsum', author: 'Fahmid', id: 2 },
    { title: 'My new website', body: 'lorem ipsum', author: 'Dan', id: 3 }
  ]);
  

  return ( 
    <div className="home">
      {/* <h2>Homepage</h2> */}
      {blogs.map((blog) => (
        <div className="blogPreview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p>Written by {blog.author} </p>
        </div>
      ))}
    </div>
  );
}

export default Home;