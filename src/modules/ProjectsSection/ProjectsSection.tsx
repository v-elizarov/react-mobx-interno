import React from 'react'
import RightArrowAlternateSvg from '@assets/svg/rightArrowAlternate.svg?react'
import Heading from '@components/Heading'


export interface IProjectsSectionProps {}

const ProjectsSection: React.FC<IProjectsSectionProps> = () => {
  // const navigate = useNavigate()

  // const buttonHandler = () => {
  //   navigate('/gb/homework')
  // }

  const headingProps = {
    heading: 'Follow Our Projects',
    level: 1,
    text: `It is a long established fact that a reader will be 
    distracted by the of readable content of page  lookings at its layouts  points.`,
    classNames: ['content-header', 'projects__content-header'],
    headingClassNames: ['heading-m'],
    textClassNames: ['text-m', 'content-header__description'],
  }

  return (
    <div className="projects-area">
      <div className="wrapper">
        <section className="projects">
          <Heading {...headingProps}/>
            <div className="projects__container">
                <div className="projects__row">
                    <figure className="project">
                        <img className="project__image project__image_top-left" src={new URL('../../assets/images/projects/p1.png', import.meta.url).href} alt=""/>
                        <div className="project__details">
                            <div className="project__info">
                                <figcaption className="heading-s">Modern Kitchan</figcaption>
                                <p className="text-m">Decor / Artchitecture</p>
                            </div>
                            <button className="btn project__btn">
                              <RightArrowAlternateSvg/>
                            </button>
                        </div>
                    </figure>
                    <figure className="project">
                        <img className="project__image project__image_top-right" src={new URL('../../assets/images/projects/p2.png', import.meta.url).href} alt=""/>
                        <div className="project__details">
                            <div className="project__info">
                                <figcaption className="heading-s">Modern Kitchan</figcaption>
                                <p className="text-m">Decor / Artchitecture</p>
                            </div>
                            <button className="btn project__btn">
                              <RightArrowAlternateSvg/>
                            </button>
                        </div>
                    </figure>
                </div>
                <div className="projects__row">
                    <figure className="project">
                        <img className="project__image project__image_bottom-left" src={new URL('../../assets/images/projects/p3.png', import.meta.url).href} alt=""/>
                        <div className="project__details">
                            <div className="project__info">
                                <figcaption className="heading-s">Modern Kitchan</figcaption>
                                <p className="text-m">Decor / Artchitecture</p>
                            </div>
                            <button className="btn project__btn">
                              <RightArrowAlternateSvg/>
                            </button>
                        </div>
                    </figure>
                    <figure className="project">
                        <img className="project__image project__image_bottom-right" src={new URL('../../assets/images/projects/p4.png', import.meta.url).href} alt=""/>
                        <div className="project__details">
                            <div className="project__info">
                                <figcaption className="heading-s">Modern Kitchan</figcaption>
                                <p className="text-m">Decor / Artchitecture</p>
                            </div>
                            <button className="btn project__btn">
                              <RightArrowAlternateSvg/>
                            </button>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectsSection