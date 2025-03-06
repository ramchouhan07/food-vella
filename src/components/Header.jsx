import React, { Component, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import body from './Body'

import { createBrowserRouter } from 'react-router-dom'
import Card from './navbar/Card-add'
import Body from './Body'
import Loginpage from './Loginpage'

function Header({}){
  const [log,setlog] = useState(true);

 let  Change = ()=>{
  // const [log,setlog] = useState();
  if(log){
    alert("WELLCOME YOU ARE LOGIN")
   
  }
 else alert("!!you are logout"); 
 
  setlog(log => !log)
 }

    return(
     <div className='header '>
       <img  className ="w-32 transform transition-transform duration-300 hover:scale-110 p-2 rounded-full" src='https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg '></img>
       
      <ul className='flex gap-6 h-6 mr-32 bg-right-bottom max-w-7xl mx-auto  justify-between items-center bg-white place-content-center p-8 rounded-full'>
        <Link to={"/"} className='text-black font-bold hover:text-green-800 '>Home</Link>
        <Link to={"contact"}className='text-black font-bold  hover:text-green-800'>contact</Link>
        <Link to={"about"} className='text-black font-bold  hover:text-green-800'>about</Link>
        <Link to={"addItem"} className='text-black font-bold hover:text-green-800 '>card</Link>
        <Link to={"YourRecipe"} className='text-black font-bold hover:text-green-800 '>Recipe</Link>
      </ul>
      {
       log==true ? <button onClick={Change}  className='bg-green-400 p-2 '>login in</button> : <button onClick={Change} className='bg-red-600 p-2'>login out</button>
       }
       
     </div>
    )
  }
 
  export default Header;