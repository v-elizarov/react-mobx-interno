import React from 'react'


export interface IInputProps {
  type: string
  name: string
  label: string
  isChecked?: boolean 
  onChange: () => void
  classNames?: string[]
}

const Input: React.FC<IInputProps> = (props) => {
  const inputID = props.label.toLowerCase().split(' ').join('-')
  return (
    <React.Fragment>
      <input 
        type={props.type} 
        name={props.name} 
        id={inputID} 
        checked={props.isChecked} 
        onChange={props.onChange}
      />
      <label htmlFor={inputID} className={props.classNames && props.classNames.join(' ')}>{props.label}</label>
    </React.Fragment>
  )
}

export default Input