import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'


export interface IProjectPageProps {}

const ProjectPage: React.FC<IProjectPageProps> = () => {
  return (
    <React.Fragment>
      <Header/>

      <Footer/>
    </React.Fragment>
  )
}

export default ProjectPage