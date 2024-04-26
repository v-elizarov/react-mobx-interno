import React from 'react'
import { INavLink } from '../../types/nav-link'
import { Link } from 'react-router-dom'

export interface INavPanelItemProps {
  item: INavLink
  classNames?: string[]
}

const NavPanelItem: React.FC<INavPanelItemProps> = (props) => {

  return (
    <li>
      <Link 
        to={props.item.to}
        className={props.classNames && props.classNames.join(' ')}>
        {props.item.label}
      </Link>
    </li>
  )
}

export default NavPanelItem