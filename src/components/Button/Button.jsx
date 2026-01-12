import React from 'react'
import './Button.css'

const Button = ({ fullWidth }) => { 
  const classname = fullWidth ? 'btn full-width' : 'btn';
  return (
    <button className={classname}>Join now</button>
  )
}

export default Button