import React from 'react'

const Button = ({title,className,onClick,type="button"}) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>{title}</button>
  )
}

export default Button