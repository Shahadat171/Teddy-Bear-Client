import React from 'react';
import { FcApprove } from "react-icons/fc";

const EveryBlog = ({blog}) => {
    return (
        <div className='flex gap-5 '>
            <img className='h-24 w-24' src={blog.image} alt="" />
            <div>
                <h1 className='flex items-center text-xl'><FcApprove className=' w-8 h-8 mr-3'></FcApprove>{blog.question}</h1>
                <p className=' font-semibold '>{blog.answer}</p>
            </div>
        </div>
    );
};

export default EveryBlog;