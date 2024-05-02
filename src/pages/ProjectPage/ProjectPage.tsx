import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import CategoryPicker from '@components/CategoryPicker'
import { projectCategories } from '@assets/data.json'


export interface IProjectPageProps {}

const ProjectPage: React.FC<IProjectPageProps> = () => {
  const headerImageURL = new URL('../../assets/images/banners/banner2.jpg', import.meta.url)

  return (
    <React.Fragment>
      <Header>
        <Banner 
            imageURL={headerImageURL}
            showPanel
            heading='Our Projects'
            level={1}
            headingClassNames={['heading-m']}
        />
      </Header>
      <div className="gallery-area">
        <div className="wrapper">
        <CategoryPicker
          categories={projectCategories}
          type='radio'
          name='project-filter'
          ownClassNames={['gallery__filter']}
          onPressHandler={(category) => console.log(category)}
          filter={['Bedroom']}
        />
            <div className="gallery">
                <figure className="project">
                    <img className="project__image" src="../../layout/images/gallery/g1.png" alt=""/>
                    <div className="project__details">
                        <div className="project__info">
                            <figcaption className="heading-s">Modern Kitchan</figcaption>
                            <p className="text-m">Decor / Artchitecture</p>
                        </div>
                        <button className="btn project__btn">
                            <svg width="10.000000" height="21.000000" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M1 19L9 10L0.99 1" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>                        
                        </button>
                    </div>
                </figure>
                <figure className="project project_star">
                    <img className="project__image" src="../../layout/images/gallery/g2.png" alt=""/>
                    <div className="project__details">
                        <div className="project__info">
                            <figcaption className="heading-s">Modern Kitchan</figcaption>
                            <p className="text-m">Decor / Artchitecture</p>
                        </div>
                        <button className="btn project__btn">
                            {/* <svg width="10.000000" height="21.000000" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M1 19L9 10L0.99 1" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>                         */}
                        </button>
                    </div>
                </figure>
                <figure className="project">
                    <img className="project__image" src="../../layout/images/gallery/g3.png" alt=""/>
                    <div className="project__details">
                        <div className="project__info">
                            <figcaption className="heading-s">Modern Kitchan</figcaption>
                            <p className="text-m">Decor / Artchitecture</p>
                        </div>
                        <button className="btn project__btn">
                            {/* <svg width="10.000000" height="21.000000" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M1 19L9 10L0.99 1" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>                         */}
                        </button>
                    </div>
                </figure>
                <figure className="project">
                    <img className="project__image" src="../../layout/images/gallery/g4.png" alt=""/>
                    <div className="project__details">
                        <div className="project__info">
                            <figcaption className="heading-s">Modern Kitchan</figcaption>
                            <p className="text-m">Decor / Artchitecture</p>
                        </div>
                        <button className="btn project__btn">
                            {/* <svg width="10.000000" height="21.000000" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M1 19L9 10L0.99 1" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>                         */}
                        </button>
                    </div>
                </figure>
                <figure className="project">
                    <img className="project__image" src="../../layout/images/gallery/g5.png" alt=""/>
                    <div className="project__details">
                        <div className="project__info">
                            <figcaption className="heading-s">Modern Kitchan</figcaption>
                            <p className="text-m">Decor / Artchitecture</p>
                        </div>
                        <button className="btn project__btn">
                            {/* <svg width="10.000000" height="21.000000" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M1 19L9 10L0.99 1" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                            </svg>                         */}
                        </button>
                    </div>
                </figure>
            </div>
            <nav className="pagination">
                <li><button className="btn pagination__button pagination__button_active">01</button></li>
                <li><button className="btn pagination__button">02</button></li>
                <li><button className="btn pagination__button">03</button></li>
                <li><button className="btn pagination__button">
                    {/* <svg width="8.000000" height="16.000000" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path id="Vector" d="M0.55 14L6.5 7.31L0.55 0.62" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                    </svg> */}
                    
                    </button>
                </li>
            </nav>
        </div>
    </div>
      <Footer/>
    </React.Fragment>
  )
}

export default ProjectPage