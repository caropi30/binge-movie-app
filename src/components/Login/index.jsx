import React, { useState, useEffect } from "react";
import Form from "../Form";
import Small from "../Small";
import "./index.scss";

const Login = ({ children, isLogedIn, setIsLogedIn }) => {

  return (
    <>
      <div>
        <h2>{isLogedIn ? "Login" : "Sign Up"}</h2>
        <Form isLogedIn={isLogedIn} />
        <Small isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
      </div>
    </>
  );
};

export default Login;
