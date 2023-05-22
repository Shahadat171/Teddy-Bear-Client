import { useEffect, useState } from "react";
import EveryBlog from "./EveryBlog";


const Blog = () => {
    const [blogs, setBlogs]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3 my-12 ml-16 flex gap-7 flex-col">
            {
                blogs.map(blog => <EveryBlog
                key={blog._id}
                blog={blog}
                ></EveryBlog>)
            }
        </div>
    );
};

export default Blog;