import React from "react";
import "./index.scss";

const Form = ({isLogedIn}) => {
  return 
   (isLogedIn ? (
    <form className="loginForm">
      <label className="loginForm--label" htmlFor="email">
        <input
          className="loginForm--label-input"
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
        />
      </label>
      <label className="loginForm--label" htmlFor="password">
        <input
          className="loginForm--label-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </label>
      <input type="submit" />
    </form>
  ) : (
    <form className="loginForm">
      <label className="loginForm--label" htmlFor="email">
        <input
          className="loginForm--label-input"
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
        />
      </label>
      <label className="loginForm--label" htmlFor="password">
        <input
          className="loginForm--label-input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </label>
      <label className="loginForm--label" htmlFor="repeatPassword">
        <input
          className="loginForm--label-input"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Password"
        />
      </label>
      <input type="submit" />
    </form>)
  );
};

export default Form;
