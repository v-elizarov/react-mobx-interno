import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import AsideArea from '@components/AsideArea'
import AsideBlock from '@components/AsideBlock'
import CategoryPicker from '@components/CategoryPicker'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import LatestPost from '@components/LatestPost'
import SiteContainer from '@components/SiteContainer'
import Heading from '@components/Heading'
import ContentArea from '@components/ContentArea'
import DividedContainer from '@components/DividedContainer'
import InfiniteBlogPresenter from '@/modules/InfiniteBlogPresenter'
import Banner from '@components/Banner'
import { blogCategories } from '@assets/data.json'


export interface IBlogPageProps {}

const BlogPage: React.FC<IBlogPageProps> = () => {
  const { BlogPresenterStore } = useStore()
  const headerImageURL = new URL('../../assets/images/banners/banner1.jpg', import.meta.url)

  return (
    <React.Fragment>
      <Header>
        <Banner 
          imageURL={headerImageURL}
          showPanel
          heading='Articles & News'
          level={1}
          headingClassNames={['heading-m']}
        />
      </Header>
      <SiteContainer classNames={['latest-post-area']}>
        <Heading 
            heading='Latest Post' 
            level={1} 
            classNames={['content-header', 'latest-post__header']}
            headingClassNames={['heading-m']}
        />
        <LatestPost/>
      </SiteContainer>
      <SiteContainer classNames={['blog-content-area']}>
        <DividedContainer>
          <ContentArea>
            <InfiniteBlogPresenter 
              articles={BlogPresenterStore.filteredArticles}
              articlesInOneRow={2}
            />
          </ContentArea>
          <AsideArea>
            <AsideBlock heading='Info'>
                <p className='text-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis voluptates perspiciatis possimus, soluta voluptatibus dolorem saepe, ipsam quam fuga ea, assumenda ut exercitationem sapiente ipsa. Rerum nam nesciunt veniam.</p>
            </AsideBlock>
            <AsideBlock heading='Tags'>
              <CategoryPicker
                categories={blogCategories}
                type='checkbox'
                name='blog-filter'
                ownClassNames={['pick-categories']}
                onPressHandler={(category) => BlogPresenterStore.toggleFilter(category)}
                filter={BlogPresenterStore.filter}
              />
            </AsideBlock>
          </AsideArea>
        </DividedContainer>
      </SiteContainer>
      <Footer/>
    </React.Fragment>
  )
}

export default observer(BlogPage) 