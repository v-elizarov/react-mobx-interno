import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import React from 'react'
import { useParams } from 'react-router-dom'


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
      <Footer/>
    </React.Fragment>
  )
}

export default BlogDetailsPage