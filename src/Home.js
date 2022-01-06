import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'Web dev tips', body: 'lorem ipsum', author: 'Abid', id: 1 },
    { title: 'Welcome cooking', body: 'lorem ipsum', author: 'Fahmid', id: 2 },
    { title: 'My new website', body: 'lorem ipsum', author: 'Dan', id: 3 },
    { title: 'Laravel + React', body: 'lorem ipsum', author: 'Abid', id: 4 },
    { title: 'My Coding Journey', body: 'lorem ipsum', author: 'Abid', id: 5 },
  ]);
  

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === "Abid")} title="My Blogs"/>
    </div>
  );
}

export default Home;