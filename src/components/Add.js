import React from "react"
import {Link} from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addBlog } from "../features/Blogs/blogslice";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";



const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values,setValues]=useState({
    title:'',
    categories:'',
    content:''

  })
   const handleAddUser=()=>{
      setValues({ title: '', categories: '',content:'' });
      if(!values.title ||!values.categories ||!values.content)
      {
       // return toast.error("Please fill in all fields!");
        return alert("Please fill in all fields!");
      }
      else
      {
        alert("Added Successfully!!");
      }
      dispatch(addBlog({
        id: uuidv4(),
        title: values.title,
        categories: values.categories,
        content:values.content,
        likes:0
      

      })
      
      );
     
      
      console.log(values);
      navigate('/');
    }
 
  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="display-2 my-3 text-center">
          Add Blog
        </h3>
        <div className ="col-md-6 shadow mx-auto p-5 my-5">
            <form>
                <div className="form-group">
                    <input type ="text" placeholder="Title" className="form-control"   value={values.title}  onChange={(e) => setValues({ ...values, title: e.target.value })} /> <br/>
                </div>
                <div className="form-group">
                    <input type ="text" placeholder="Categories" className="form-control"  value={values.categories}  onChange={(e) => setValues({ ...values, categories: e.target.value })}  /><br/>
                </div>
                <div className="form-group">
                    <input type ="text" placeholder="Content" className="form-control"  value={values.content}   onChange={(e) => setValues({ ...values, content: e.target.value })}/><br/>
                </div>
                <div className="form-group">
                    <input type ="submit" value="Add Blog" className="btn btn-block btn-dark"  onClick={handleAddUser}/>
                    <Link to="/" className="btn btn-danger ml-5">Cancel</Link>
                </div>
            </form>

         
        </div>

      </div>
    </div>
  )
};

export default Add;
