import React from "react"
import {Link} from "react-router-dom";
const Navbar = (props) => {
  return (
   
    <nav className ="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center " style={{marginTop:"-22px"}}>
        <Link to='/'className="navbar-brand  ml-5 py-2">
           <h3 className="text-center"> Blog App</h3>
        </Link>
    </nav>  
   
    )
};

export default Navbar;
