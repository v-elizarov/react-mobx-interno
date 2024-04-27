import React from 'react'
import { INavLink } from '@/types/nav-link'
import { Link } from 'react-router-dom'


export interface INavListItemProps {
  item: INavLink
  classNames?: string[]
}

const NavListItem: React.FC<INavListItemProps> = (props) => {
  return (
    <li>
      <Link 
        to={`${GIT_REP + props.item.to}`}
        className={props.classNames && props.classNames.join(' ')}>
        {props.item.label}
      </Link>
    </li>
  )
}

export default NavListItem