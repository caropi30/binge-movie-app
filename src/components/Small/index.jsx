import React, { useState, useEffect } from 'react'

const Small = ({isLogedIn, setIsLogedIn}) => {
  const loginHandler = () =>{
    console.log("click")
  }

  const signUpHandler = () =>{
    console.log("click")
  }
    
    
  return (
    <>
        <>{isLogedIn ? 
            <small>Don't you have an accout?<span onClick={loginHandler}>Sign Up</span></small>
        : <small>Already have an accout?<span onClick={signUpHandler}>Login</span></small>}</>
        </>
  )
}

export default Small;