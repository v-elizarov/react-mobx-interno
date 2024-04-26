import React from 'react'
import Logo from '../../UI/Logo'
import NavPanel from '../NavPanel'
import { menu } from '../../assets/data.json'

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {

  return (
    <div className="header-area">
        <div className="wrapper">
            <header className="header">
              <div className="nav-panel">
                <Logo/>
                <NavPanel 
                  classNames={['nav-panel__menu']} 
                  itemClasses={['menu__link']}
                  data={menu}
                />
              </div>
            </header>
        </div>
    </div>
  )
}

export default Header