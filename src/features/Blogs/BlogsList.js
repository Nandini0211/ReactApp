import React from "react"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "./blogslice";

const BlogList = () => {
    const blogs =[
        {
            id:'1' ,title:'First',categories:'first one',content:'this is my first blog'
        },
        {
            id:'2' ,title:'Second',categories:'second one',content:'this is my second blog'
        }

    ];

    const renderCard =() =>blogs.map(blogs=>(
        <div className="bg-gray-300 p-5 flex items-center justify-between">
            <div>
                <h3 className="font-bold text-lg text-gray-700">{blogs.title}</h3>
                <span className="font-normal text-gray-600">{blogs.categories}</span>
                <span className="font-normal text-gray-600">{blogs.content}</span>
            </div>
        </div>
    ))
  return (
    <div>
   
    <div className="grid gap-5 md:grid-cols-2">
      {blogs.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
    </div>
  </div>
  ) 
};

export default BlogList;
