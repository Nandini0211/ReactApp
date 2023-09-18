
import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editBlog } from "../features/Blogs/blogslice";

const Getdata = (props) => {
    const params =useParams();
    const dispatch =useDispatch();
    const blogs=useSelector(store=>store.blogs);
    const existingblog =blogs.filter(blog=>blog.id===params.id);
  return (
    <div className="container ">
        <div className="d-flex justify-content-center ">
         <div className="grid w-50 mt-12" style={{backgroundColor:"aliceblue",borderRadius:"10px"}}>
        
        
      
     <div className="fw-bold text-center mt-8"> <h2>{ existingblog[0].title}</h2> </div><br/>
      <div className="fst-italic text-end mt-2 mx-2 text-muted"> { existingblog[0].categories}</div><br/>
       <div className="font-monospace text-center mt-2 mx-2 mb-10 ">{ existingblog[0].content} </div>
      </div>
      </div>
      </div>
   
  )
};

export default Getdata;
