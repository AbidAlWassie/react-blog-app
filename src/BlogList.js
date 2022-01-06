const BlogList = ({blogs, title}) => {
  // const blogs = props.blogs;
  // const title = props.title;

  // console.log(props, blogs);

  return ( 
    <div className="blog-list mb-6 pb-5 border-gray-100 border-b">
      <h1 className="text-3xl font-bold">{title}</h1>
      {blogs.map((blog) => (
        <ul className="blogPreview mt-5 ml-5 marker:text-sky-400 list-disc" key={blog.id}>
          <li>
          <h2 className="font-medium text-3xl cursor-pointer"> {blog.title} </h2>
          <p>Written by {blog.author} </p>
          </li>
        </ul>
      ))}
    </div>
  );
}


export default BlogList;