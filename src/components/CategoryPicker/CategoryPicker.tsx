import React from 'react'
import Input from '@/UI/Input'
import { observer } from 'mobx-react-lite'
import { categories } from '@assets/data.json'
import { useStore } from '@/store'


export interface ICategoryPickerProps {}

const CategoryPicker: React.FC<ICategoryPickerProps> = () => {
  const { BlogPresenterStore } = useStore()

  const items = categories.map(category => {
    const checkDefault = BlogPresenterStore.filter.indexOf(category) === -1 ? false : true

    return (
      <Input 
        key={category} 
        type='checkbox' 
        name='category' 
        label={category} 
        isChecked={checkDefault}
        onChange={() => BlogPresenterStore.toggleFilter(category)}
      />
    )
  })

  return (
    <div className="pick-categories">
      { items }
    </div>
  )
}

export default observer(CategoryPicker) 