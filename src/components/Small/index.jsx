import React, { useState, useEffect } from 'react'

const Small = ({isLogedIn, setIsLogedIn}) => {

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
        signUpHandler()
      },[isLogedIn])
    
  return (
    <>
        <>{isLogedIn ? 
            <small>Don't you have an accout?<span onClick={loginHandler}>Sign Up</span></small>
        : <small>Already have an accout?<span onClick={signUpHandler}>Login</span></small>}</>
        </>
  )
}

export default Small;