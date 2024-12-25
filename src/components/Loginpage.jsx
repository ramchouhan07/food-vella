import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class Loginpage extends Component {
  render() {
   
        return (
     <>
     <div className='containerBOx'>
     <div className='container'>
      <div> i am Loginpage ...........</div>
      <input placeholder='ENTER YOUR NAME' className='input' type='text'></input>
      <br/>
      <input placeholder='ENTER YOUR PASSWORD' className='input'type='password'></input>
      <br/>
      <a href='/body' className='signinbutton'>sign in </a>
      </div>
     </div>
     {/* <Link to={''}>sign in </Link> */}
     </>
    )
  }
}
