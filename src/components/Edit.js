import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editBlog } from "../features/Blogs/blogslice";
//import { Toast } from "bootstrap";
import {Toast} from 'react-bootstrap/Toast';

const Edit = (props) => {
  // let { id } = useParams();
  
  const params =useParams();
  const dispatch =useDispatch();
  const blogs=useSelector(store=>store.blogs);
  const existingblog =blogs.filter(blog=>blog.id===params.id);
  const {title,categories,content} = existingblog[0];
  console.log(existingblog);
  const navigate = useNavigate();
  const [values, setValues] = useState({
   title:existingblog[0].title,
   categories:existingblog[0].categories,
   content:existingblog[0].content
  });
  // useEffect(()=>{
  //   dispatch
  // })

  




  const handleEditBlog = () => {
    setValues({title:'',categories:'',content:''})
    if(!values.title ||!values.categories ||!values.content)
      {
      
        alert("Please fill in all fields!");
      //  seterrmsg("Please fill all fields!!")
      //  console.log("error");
      }
      else
      {
         dispatch(editBlog({
      id:params.id,
      title:values.title,
      categories:values.categories,
      content:values.content  }))
        alert("Edited Successfully!!");
        navigate('/');
    
         }
    console.log("updated");
   // }));
    
   

  };


  return (
    <div className="container-fluid">
     <div className="row ">
        <h1 className="display-3 my-3 text-center">
          {/* Edit Blog {id} */}
          Edit Blog
        </h1>
        <div className="col-md-6 shadow mx-auto p-5 my-5">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Title" className="form-control" value={values.title}  onChange={(e) => setValues({ ...values, title: e.target.value })}/><br/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Categories" className="form-control" value={values.categories}  onChange={(e) => setValues({ ...values, categories: e.target.value })} /><br/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Content" className="form-control" value={values.content}  onChange={(e) => setValues({ ...values, content: e.target.value })} /><br/>
            </div>
            <div className="form-group">
              <input type="submit" value="Update Blog" className="btn btn-block btn-dark" onClick={handleEditBlog} />
              {/* <Button onClick={handleEditUser}>Edit</Button> */}
              <Link to="/" className="btn btn-danger ml-5">Cancel</Link>
            </div>

          </form>


        </div>

      </div>
    </div>
  )

};
export default Edit;
