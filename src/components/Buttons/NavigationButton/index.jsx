import React from 'react'
import './index.scss'

const NavButton = ({ text, href, icon, classN }) => {
  return (
    <button type="button" className={classN}>
      {text}
      {icon}
      <a href={href}></a>
    </button>
  )
}

export { NavButton }
