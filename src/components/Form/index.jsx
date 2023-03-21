import React, {useEffect, useState} from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import { useMutation  } from "@tanstack/react-query";

const Form = ({isLogedIn}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formDataLogin, setFormDataLogin] = useState({email: "", password: ""})
  const [formDataSignUp, setFormDataSignUp] = useState({email: "", password: "", repeatPassword: ""})

  const mutation = useMutation({
    mutationFn: (newLoginData) => {
      return axios.post('https://32ac-191-113-224-128.sa.ngrok.io/api/auth/login', newLoginData)
    }
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    //formData es === prevData para poder aisgnarle el nuevo estado
    if(isLogedIn){
      setFormDataLogin((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    } 
    else {
      setFormDataSignUp((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }
    console.log(e.target.name)
    console.log(e.target.value)
    //console.log(formData)
  }

  
  const handleFormData = (e) => {
    e.preventDefault()
   if(isLogedIn){
    mutation.mutate(formDataLogin)
    console.log(formDataLogin)
   }
   else{
    mutation.mutate(formDataSignUp)
    console.log(formDataSignUp)
   } 
  }

  useEffect(()=>{
    if(mutation.isSuccess){
      navigate("/");
    }
  }, [mutation.isSuccess])

  return <>
   {isLogedIn ? (
    <form className="loginForm" onSubmit={handleFormData}>
      <label className="loginForm--label" htmlFor="email">
        <input
          className="loginForm--label-input"
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={handleChange}
        />
      </label>
      <label className="loginForm--label" htmlFor="password">
        <input
          className="loginForm--label-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <input type="submit"/>
    </form>
  ) : (
    <form className="loginForm" onSubmit={handleFormData}>
      <label className="loginForm--label" htmlFor="email">
        <input
          className="loginForm--label-input"
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={handleChange}
        />
      </label>
      <label className="loginForm--label" htmlFor="password">
        <input
          className="loginForm--label-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}

        />
      </label>
      <label className="loginForm--label" htmlFor="repeatPassword">
        <input
          className="loginForm--label-input"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>)
    }
    {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

    {mutation.isSuccess ? <div>Todo added!</div> : null}

    </>
};

export default Form;
