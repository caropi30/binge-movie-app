import React, { useState, useEffect } from "react";
import Form from "../Form";
import Small from "../Small";
import "./index.scss";

const Login = ({ children, isLogedIn, setIsLogedIn }) => {
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("hice click en signup");
    console.log(isLogedIn);
    setIsLogedIn(false)
  };

  const signUpHandler = () =>{
    console.log("hice click en login");
    console.log(isLogedIn);
    setIsLogedIn(true)
  }

  useEffect(()=>{
    
  },[isLogedIn])

  return <>
    <div>
        <h2>{isLogedIn ? "Login" : "Sign Up"}</h2>
        <Form isLogedIn={isLogedIn}/>
        <Small isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
       {/* <button onClick={loginHandler}>click</button> */}
    </div>
  </>
};

export default Login;
