import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { AUTH_LOGIN, AUTH_SIGNUP, putShow } from '../../services/data'
import Cookies from 'js-cookie'

const Form = ({ isLogedIn }) => {
  const [error, setError] = useState(false)
  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: ''
  })
  const [formDataSignUp, setFormDataSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const mutation = useMutation({
    mutationFn: (newAuthData) => {
      return axios.post(isLogedIn ? AUTH_LOGIN : AUTH_SIGNUP, newAuthData)
    }
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    // formData es === prevData para poder aisgnarle el nuevo estado
    if (isLogedIn) {
      setFormDataLogin((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }))
    } else {
      setFormDataSignUp((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value
      }))
    }
  }

  const VALID_EMAIL = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  )

  const emailValidation = () => {
    if (!VALID_EMAIL.test(formDataLogin.email)) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const passwordValidation = () => {
    if (formDataSignUp.password === formDataSignUp.confirmPassword) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleFormData = async (e) => {
    e.preventDefault()
    if (isLogedIn) {
      const data = await mutation.mutateAsync(formDataLogin)
      console.log(data)
      Cookies.set('JWT', data.data.token)
      emailValidation()
    } else {
      const data = await mutation.mutate(formDataSignUp)
      console.log(data)
      emailValidation()
      passwordValidation()
    }
  }

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate('/')
    }
  }, [mutation.isSuccess])

  return (
    <>
      {isLogedIn
        ? (
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
          {error && <p>Hay errores en tu correo. Favor validar escritura</p>}
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
          <input type="submit" placeholder="Login to your account" />
        </form>
          )
        : (
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
          <label className="loginForm--label" htmlFor="confirmPassword">
            <input
              className="loginForm--label-input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
          {error && <p>Las contraseñas no coinciden.</p>}
          <input type="submit" placeholder="Create an account" />
        </form>
          )}
      {mutation.isError
        ? (
        <div>An error occurred: {mutation.error.message}</div>
          )
        : null}

      {mutation.isSuccess ? <div>Todo added!</div> : null}
    </>
  )
}

export default Form
