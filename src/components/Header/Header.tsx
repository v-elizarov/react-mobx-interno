import React, { ReactNode } from 'react'
import Logo from '@/UI/Logo'
import NavList from '@/components/NavList'
import { menu } from '@assets/data.json'

export interface IHeaderProps {
  children?: ReactNode | ReactNode[]
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <div className="header-area">
        <div className="wrapper">
            <header className="header">
              <div className="nav-panel">
                <Logo/>
                <NavList 
                  classNames={['nav-panel__menu']} 
                  itemClasses={['menu__link']}
                  data={menu}
                />
              </div>
            </header>
        </div>
        { children }
    </div>
  )
}

export default Header