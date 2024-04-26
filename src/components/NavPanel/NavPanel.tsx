import React from 'react'
import { INavLink } from '../../types/nav-link'
import NavPanelItem from '../NavPanelItem'

export interface INavPanelProps {
  classNames?: string[]
  itemClasses?: string[]
  data: INavLink[]
  separator?: string
}

const NavPanel: React.FC<INavPanelProps> = (props) => {
  const items = props.data.map((item, index) => {
    const element = (
      <NavPanelItem 
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

export default NavPanel