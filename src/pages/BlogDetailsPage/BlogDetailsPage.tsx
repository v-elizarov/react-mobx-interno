import React from 'react'
import { useParams } from 'react-router-dom'

export interface IBlogDetailsPageProps {}

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams()

  return (
    <div>{`Blog Details ${id}`}</div>
  )
}

export default BlogDetailsPage