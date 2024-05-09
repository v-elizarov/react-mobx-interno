import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import ProjectDetails from '@components/ProjectDetails'
import ProjectInspector from '@components/ProjectInspector'
import { useStore } from '@/store'
import { IProjectItem } from '@/types/project-item'


export interface IProjectDetailsPageProps {}

const ProjectDetailsPage: React.FC<IProjectDetailsPageProps> = () => {
  const { id } = useParams()
  const headerImageURL = new URL('../../assets/images/banners/banner4.jpg', import.meta.url)

  if (typeof id === 'undefined') return

  const { ProjectStore } = useStore()

  const index = ProjectStore.getIndexOfItemByID(id)
  const project: IProjectItem | undefined = ProjectStore.getItem(index)

  if (typeof project === 'undefined') return

  const previewURL = new URL(`../../assets/images/gallery/${project.pic}`, import.meta.url)

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
      <ProjectDetails project={project}/>
      <ProjectInspector imageURL={previewURL}/>
      <Footer/>
    </React.Fragment>
  )
}

export default ProjectDetailsPage