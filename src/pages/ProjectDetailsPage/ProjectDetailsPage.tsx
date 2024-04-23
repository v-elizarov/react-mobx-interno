import React from 'react'
import { useParams } from 'react-router-dom'

export interface IProjectDetailsPageProps {}

const ProjectDetailsPage: React.FC<IProjectDetailsPageProps> = () => {
  const { id } = useParams()

  return (
    <div>{`Project Details ${id}`}</div>
  )
}

export default ProjectDetailsPage