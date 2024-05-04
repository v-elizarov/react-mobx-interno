import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import ProjectDetails from '@components/ProjectDetails'


export interface IProjectDetailsPageProps {}

const ProjectDetailsPage: React.FC<IProjectDetailsPageProps> = () => {
  const { id } = useParams()
  const headerImageURL = new URL('../../assets/images/banners/banner4.jpg', import.meta.url)

  return (
    <React.Fragment>
      <Header>
        <Banner 
            imageURL={headerImageURL}
            showPanel
            heading={`Project Details`}
            level={1}
            headingClassNames={['heading-m']}
        />
      </Header>
      <ProjectDetails projectID={id}/>
      <Footer/>
    </React.Fragment>
  )
}

export default ProjectDetailsPage