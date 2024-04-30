import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import React from 'react'
import { useParams } from 'react-router-dom'
import SiteContainer from '@components/SiteContainer'
import DividedContainer from '@components/DividedContainer'
import ContentArea from '@components/ContentArea'
import AsideArea from '@components/AsideArea'
import BlogArticle from '@components/BlogArticle'


export interface IBlogDetailsPageProps {}

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams()
  const headerImageURL = new URL('../../assets/images/banners/banner3.jpg', import.meta.url)

  return (
    <React.Fragment>
      <Header>
        <Banner 
          imageURL={headerImageURL}
          showPanel
          heading={`Read Article`}
          level={2}
          headingClassNames={['heading-m']}
        />
      </Header>
      <SiteContainer classNames={['blog-content-area']}>
        <DividedContainer>
          <ContentArea>
            <BlogArticle articleID={id}/>
          </ContentArea>
          <AsideArea>
          </AsideArea>
        </DividedContainer>
      </SiteContainer>
      <Footer/>
    </React.Fragment>
  )
}

export default BlogDetailsPage