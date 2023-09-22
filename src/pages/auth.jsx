import React, { useState } from 'react'
import { Main } from '../components/Main'
import Login from '../components/Login'
//import { LogoMenuIcon } from '../components/Icons'
import { NavLink } from 'react-router-dom'

const Account = () => {
  const [isLogedIn, setIsLogedIn] = useState(true)
  return (
    <Main>
        <NavLink to="/" style={{ margin: '5%', color: '#fff', textDecoration: 'none' }}>
            <p>Volver</p>
        </NavLink>
        <Login isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
    </Main>
  )
}

export default Account
