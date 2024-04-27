import React from 'react'
import { INavLink } from '@/types/nav-link'
import NavListItem from '@components/NavListItem'

export interface INavListProps {
  classNames?: string[]
  itemClasses?: string[]
  data: INavLink[]
  separator?: string
}

const NavList: React.FC<INavListProps> = (props) => {
  const items = props.data.map((item, index) => {
    const element = (
      <NavListItem 
        key={`${item.label}-${index}`} 
        item={item}
        classNames={props.itemClasses}
      />
    )

    if (props.separator && index % 2 === 0) {
      return (
        <React.Fragment>
          <li>{props.separator}</li>
          { element }
        </React.Fragment>
      )
    }
    return element
  })

  return (
    <nav className={props.classNames && props.classNames.join(' ')}>
      {...items}
    </nav>
  )
}

export default NavList