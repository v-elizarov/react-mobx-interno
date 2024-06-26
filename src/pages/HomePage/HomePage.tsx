import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Promo from '@components/Promo'
import Counter from '@components/Counter'
import ProjectsSection from '@/modules/ProjectsSection'
import BlogPresenter from '@components/BlogPresenter'
import { articles } from '@assets/data.json'
import Heading from '@components/Heading'
import SiteContainer from '@/components/SiteContainer'


export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = () => {

  const blogPresenterHeadingProps = {
    heading: 'Articles & News',
    level: 1,
    text: `It is a long established fact that a reader will be distracted 
    by the of readable content of a page when lookings at its layouts the points of using.`,
    classNames: ['content-header', 'blog-presenter__content-header'],
    headingClassNames: ['heading-m'],
    textClassNames: ['text-m', 'content-header__description'],
  }

  return (
    <React.Fragment>
      <Header/>
      <Promo/>
      <SiteContainer classNames={['projects-area']}>
        <ProjectsSection/>
      </SiteContainer>
      <Counter/>
      <SiteContainer classNames={['blog-presenter-area']}>
        <section className="blog-presenter">
          <Heading {...blogPresenterHeadingProps}/>
          <BlogPresenter
            isCompactModeEnabled
            articles={articles}
            articlesInOneRow={3}
          />
        </section>
      </SiteContainer>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage