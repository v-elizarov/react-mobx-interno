import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Link } from 'react-router-dom'
import SiteContainer from '@components/SiteContainer'
import './style.css'
import Heading from '@/components/Heading'


export interface INotFoundPageProps {}

const NotFoundPage: React.FC<INotFoundPageProps> = () => {

  return (
    <React.Fragment>
      <Header/>
      <SiteContainer>
        <div className='notfound__container'>
          <div className='notfound__box'>
            <Heading
              heading='404'
              headingClassNames={['heading-m']}
              level={1}
              text={'Page not found:'}
              textClassNames={['text-m']}
            />
            <p className='text-s'>{window.location.href}</p>
            <Link to={`${GIT_REP}`} className='text-s notfound__link'>Back to Home page</Link>
          </div>
        </div>
      </SiteContainer>
      <Footer/>
    </React.Fragment>
  )
}

export default NotFoundPage