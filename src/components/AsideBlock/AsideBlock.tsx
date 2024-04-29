import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'
import './style.css'


export interface IAsideBlockProps {
  heading: string,
  children?: ReactNode | ReactNode[]
}

const AsideBlock: React.FC<IAsideBlockProps> = ({ heading, children }) => {
  return (
    <section className="blog-content-sidebar__container">
      <h3 className="heading-s">{ heading }</h3>
      <div className="blog-content-sidebar__content">
          { children }
      </div>
    </section>
  )
}

export default observer(AsideBlock) 