import React from 'react'

export interface IButtonProps {
  classNames?: string[]
  children: string | React.ReactNode
  handler: () => void
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button 
      className={props.classNames && props.classNames.join(' ')}
      onClick={props.handler}
    >
      {props.children}
    </button>
  )
}

export default Button