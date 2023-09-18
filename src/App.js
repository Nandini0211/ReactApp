import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Getdata from "./components/Getdata";
import './App.css' 



const App = () => {
    return (
        <>
          <Navbar />
        <div className="App">
     
          
            <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
<div className="content">
<div className="container mx-auto px-2 ">
    


    <h1 className="text-center font-bold text-2xl text-gray-700">Welcome to the Blog!!</h1>
    <Routes>



        <Route exact path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/getdata/:id' element={<Getdata />} />

    </Routes>
    </div>

</div>
  
</div>
            
           
            </>  
    )
}


export default App;

