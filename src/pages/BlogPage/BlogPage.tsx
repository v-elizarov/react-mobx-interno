import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'


export interface IBlogPageProps {}

const BlogPage: React.FC<IBlogPageProps> = () => {
  return (
    <React.Fragment>
      <Header/>

      <Footer/>
    </React.Fragment>
  )
}

export default BlogPage