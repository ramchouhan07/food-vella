
import './App.css';
import './index.css';
import Header from './components/Header';

import { Link, Outlet, Route, Router, Routes ,BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Body from './components/Body';
import Loginpage from './components/Loginpage';
import Footer from './Footer';
import { useState } from 'react';



function App() {
 const [count,setcount] = useState(0);
 function logout(){
  setcount(0)
 }
 function login(){
  setcount(1);
 }
  
  return ( 
    <div>
      {count ? <Body/>:<Loginpage login = {login} />}
    </div>
  
  );
}
 


export default App;
  


