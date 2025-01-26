import React, { Component } from 'react'

import { Link } from 'react-router-dom';

 const Loginpage = ({login})=> {
 const  loged = ()=>{
login();
 }
   
        return (
     <>
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={loged} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
            
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              
             
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          { <p className="text-red-500 text-sm mt-2"></p>}
          <button  onClick={loged} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
     </>
    )
  }
export default Loginpage;
