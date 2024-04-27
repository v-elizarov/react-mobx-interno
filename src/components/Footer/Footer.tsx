import React from 'react'
import Logo from '@/UI/Logo'
import { Link } from 'react-router-dom'
import TwitterSvg from '@assets/svg/twitter.svg?react'
import LinkedinSvg from '@assets/svg/linkedin.svg?react'
import { menu } from '@assets/data.json'
import NavList from '@components/NavList'


export interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {

  return (
    <div className="footer-area">
        <div className="wrapper">
            <footer className="footer">
              <div className="footer__col">
                <Logo/>
                <div className="text-m footer__description">
                        It is a long established fact that a reader will be distracted lookings.
                    </div>
                    <ul className="footer__social">
                        <li>
                          <Link to='/' className='social__link'>
                            <TwitterSvg/>
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='social__link'>
                            <LinkedinSvg/>
                          </Link>
                        </li>
                    </ul>
              </div>
              <div className="footer__col">
                <h5 className="heading-s footer__heading">Pages</h5>
                <NavList 
                  classNames={['footer__pages']} 
                  itemClasses={['text-m']}
                  data={menu}
                />
              </div>
              <div className="footer__col">
                <h5 className="heading-s footer__heading">Contact</h5>
                <p className="text-m">
                    55 East Birchwood Ave. Brooklyn, New York 11201 
                </p>
                <Link to={'mailto:contact@interno.com'} className='text-m footer__email'>contact@interno.com</Link>
                <p className="text-m">(123) 456 - 7890</p>
              </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer