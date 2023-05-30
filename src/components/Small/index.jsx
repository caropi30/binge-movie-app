import React, { useState, useEffect } from 'react'
import './index.scss'

const Small = ({ isLogedIn, setIsLogedIn }) => {
  const loginHandler = () => {
    console.log('click')
    setIsLogedIn(false)
  }

  const signUpHandler = () => {
    console.log('click')
    setIsLogedIn(true)
  }

  return (
    <>
        <>{isLogedIn
          ? <small>Don't you have an accout?<span onClick={loginHandler}>Sign Up</span></small>
          : <small>Already have an accout?<span onClick={signUpHandler}>Login</span></small>}</>
        </>
  )
}

export default Small
