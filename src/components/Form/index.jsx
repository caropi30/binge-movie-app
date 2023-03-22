import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { AUTH } from "../../services/data";

const Form = ({ isLogedIn }) => {
  const [error, setError] = useState(false);
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });
  const [formDataSignUp, setFormDataSignUp] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const mutation = useMutation({
    mutationFn: (newLoginData) => {
      return axios.post(AUTH, newLoginData);
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    //formData es === prevData para poder aisgnarle el nuevo estado
    if (isLogedIn) {
      setFormDataLogin((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormDataSignUp((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const VALID_EMAIL = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const emailValidation = () => {
    if (!VALID_EMAIL.test(formDataLogin.email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const passwordValidation = () => {
    if (formDataSignUp.password === formDataSignUp.repeatPassword) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleFormData = (e) => {
    e.preventDefault();
    if (isLogedIn) {
      mutation.mutate(formDataLogin);
      emailValidation();
    } else {
      mutation.mutate(formDataSignUp);
      emailValidation();
      passwordValidation();
    }
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate("/");
    }
  }, [mutation.isSuccess]);

  return (
    <>
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
          <input type="submit" />
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
          {error && <p>Las contraseñas no coinciden.</p>}
          <input type="submit" />
        </form>
      )}
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      {mutation.isSuccess ? <div>Todo added!</div> : null}
    </>
  );
};

export default Form;
