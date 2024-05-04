import React, { useEffect, useState } from 'react'
import { IProjectItem } from '@/types/project-item'
import Pagination from '@components/Pagination'
import ProjectListItem from '@components/ProjectListItem'
import { observer } from 'mobx-react-lite'


export interface IInfiniteProjectListProps {
  projects: IProjectItem[]
}

const InfiniteProjectList: React.FC<IInfiniteProjectListProps> = (props) => {
  const { projects } = props
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const pages = Math.ceil(projects.length / 4)

  const projectsInCurrentPage: IProjectItem[] = projects.slice((currentPageNumber - 1) * 4).slice(1, 5)

  useEffect(() => {
    setCurrentPageNumber(1)
  }, [projects])

  return (
    <React.Fragment>
      <div className="gallery">
        {
          projectsInCurrentPage.map(project => <ProjectListItem key={project.id} item={project}/>)
        }
      </div>
      <Pagination
        currentPage={currentPageNumber}
        setCurrentPage={setCurrentPageNumber}
        pageCount={pages}
      />
    </React.Fragment>
  )
}

export default observer(InfiniteProjectList) 