import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import body from './Body';

const Search = ()=>{
  
    //hardcoted value
    //let searchvalue = "KFC";
    let [searchText, setSearchText] = useState("hello");
    useEffect(()=>{
     data()},[searchText])

    function data(){
    //   let dataa=   fetch('/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    // let datadata =  dataa.json
    //   console.log(`dataaaa=${datadata}`);
    }
    
    return(
      <>
   <div>
    <div>
    <div className='bg-red-400'>
    <input   />
      <button className='bg-blue-500  border-r-2 rounded w-20  m-2 p-1 border-black border-rounded' >search</button>
      <h1>{searchText} </h1>

    </div>
    </div>
   </div>
      
      </>
    )
  }
  export default Search