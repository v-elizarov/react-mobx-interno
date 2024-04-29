import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'


export interface IContentAreaProps {
  children?: ReactNode | ReactNode[]
}

const ContentArea: React.FC<IContentAreaProps> = ({ children }) => {
  return (
    <section className="blog-content-feed">
      { children }
    </section>
  )
}

export default observer(ContentArea) 