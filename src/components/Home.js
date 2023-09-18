import React from "react"
import {Link} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "../features/Blogs/blogslice";
import { addlike } from "../features/Blogs/blogslice";
import './styling.css'



//function Home() {
//   const blogs =[
//     {
//         id:'1' ,title:'First',categories:'first one',content:'this is my first blog'
//     },
//     {
//         id:'2' ,title:'Second',categories:'second one',content:'this is my second blog'
//     },
//     {
//       id:'3' ,title:'Third',categories:'third one',content:'this is my third blog'
//   }

// ];
const Home = () => {
  // const blogs =[
  //       {
  //           id:'1' ,title:'First',categories:'first one',content:'this is my first blog'
  //       },
  //       {
  //           id:'2' ,title:'Second',categories:'second one',content:'this is my second blog'
  //       },
  //       {
  //         id:'3' ,title:'Third',categories:'third one',content:'this is my third blog'
  //     }
    
  //   ];
  const dispatch = useDispatch();
 const blogs = useSelector(store => store.blogs);
 


  const handledeleteBlog = (id) => {
    dispatch(deleteBlog({ id }));
    alert("Deleted Successfully!!")

  }
  function LikeBlog(id){
    console.log(blogs.id);
    

  }
//const blogs=useSelector(store=>store.blog)
const renderCard =() =>blogs.map(blogs=>(
  






    <div className="bg-gray-300 p-5 flex items-center justify-between my-2"style={{backgroundColor:"aliceblue",
    borderRadius:'10px',
    opacity:'90%'}} key={blogs.id}>
        <div>
            <h3 className="font-bold text-lg text-gray-700">{blogs.title}</h3>
            <p className="font-normal text-gray-600">{blogs.categories}</p>
            <p className="font-normal text-gray-600">{blogs.content}</p>
            
            
        </div>
        <div className="flex gap-4">
        <Link to={`Edit/${blogs.id}`}>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
         
         

           </Link>
           <button onClick={() => handledeleteBlog(blogs.id)}>
           {/* onClick={() => handledeleteBlog(blogs.id)} */}

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <Link to={`Getdata/${blogs.id}`}>

        <button className=" btn btn-outline-light btn-sm text-dark">
            View
          </button>
        </Link>
        <div className="d-flex mx-2">
            <p className="font-normal text-gray-600 mx-2">{blogs.likes}</p>
            <span> <button onClick={()=>{dispatch(addlike({id:blogs.id}))}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>
        </button></span></div>
       
        </div>
       
    </div>
))
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-end">
          <Link to ='/add' className=" btn btn-outline-dark text-right ">
            Add Blog
          </Link>
        </div>
        {/* <div className ="col-md-6 mx-auto">
          <h1>Welcome to home page</h1>
        </div> */}

      </div>
      <div>
   
   <div className="grid my-2">
     {blogs.length? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No Blog</p>}
   </div>
 </div>
 
    </div>
    

  )
 
      
};

export default Home;
