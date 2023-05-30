import React, { useState, useEffect } from 'react'
import Form from '../Form'
import { LogoMenuIcon } from '../Icons'
import Small from '../Small'

import './index.scss'

const Login = ({ children, isLogedIn, setIsLogedIn, icon }) => {
  return <>
  <div className="auth">
  {LogoMenuIcon('#FC4747', '60', '60')}
    <div className="auth-form">
        <h2>{isLogedIn ? 'Login' : 'Sign Up'}</h2>
        <Form isLogedIn={isLogedIn}/>
        <Small isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
       {/* <button onClick={loginHandler}>click</button> */}
    </div>
  </div>

  </>
}

export default Login
