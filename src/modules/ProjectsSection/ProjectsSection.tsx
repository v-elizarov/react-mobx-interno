import React from 'react'
import Heading from '@components/Heading'
import { useStore } from '@/store'
import ProjectListItem from '@components/ProjectListItem'
import './style.css'
import { observer } from 'mobx-react-lite'


export interface IProjectsSectionProps {}

const ProjectsSection: React.FC<IProjectsSectionProps> = () => {
  const { ProjectStore } = useStore()

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
    <section className="projects">
      <Heading {...headingProps}/>
        <div className="projects__container">
            <div className="projects__row">
              <ProjectListItem 
                item={ProjectStore.getItem(6)}
                imageClassNames={['project_squared', 'project__image_top-left']}
              />
              <ProjectListItem 
                item={ProjectStore.getItem(10)}
                imageClassNames={['project_squared', 'project__image_top-right']}
              />
            </div>
            <div className="projects__row">
              <ProjectListItem 
                item={ProjectStore.getItem(18)}
                imageClassNames={['project_squared', 'project__image_bottom-left']}
              />
              <ProjectListItem 
                item={ProjectStore.getItem(17)}
                imageClassNames={['project_squared', 'project__image_bottom-right']}
              />
            </div>
        </div>
    </section>
  )
}

export default observer(ProjectsSection) 