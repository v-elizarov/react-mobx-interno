import React from 'react'
import { Link } from 'react-router-dom'
import LogoSvg from '../../assets/svg/logo.svg?react'

export interface ILogoProps {}

const Logo: React.FC<ILogoProps> = () => {
  return (
    <Link to={GIT_REP} className='logo'>
      <LogoSvg/>
      <span className='logo__label'>
        Interno
      </span>
    </Link>
  )
}

export default Logo