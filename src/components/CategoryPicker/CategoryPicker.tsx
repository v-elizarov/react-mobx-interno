import React from 'react'
import Input from '@/UI/Input'
import { observer } from 'mobx-react-lite'


export interface ICategoryPickerProps {
  categories: string[]
  inputClassNames?: string[]
  ownClassNames?: string[]
  onPressHandler: (category: string) => void
  filter: string[]
  type: string
  name: string
}

const CategoryPicker: React.FC<ICategoryPickerProps> = (props) => {
  const items = props.categories.map(category => {
    const checkDefault = props.filter.indexOf(category) === -1 ? false : true

    return (
      <Input 
        key={category} 
        type={props.type} 
        name={props.name} 
        label={category} 
        isChecked={checkDefault}
        onChange={() => props.onPressHandler(category)}
        classNames={props.inputClassNames}
      />
    )
  })

  return (
    <div className={props.ownClassNames && props.ownClassNames.join(' ')}>
      { items }
    </div>
  )
}

export default observer(CategoryPicker) 