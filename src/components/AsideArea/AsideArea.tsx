import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'


export interface IAsideAreaProps {
  children?: ReactNode | ReactNode[]
}

const AsideArea: React.FC<IAsideAreaProps> = ({ children }) => {
  return (
    <aside className="blog-content-sidebar">
      { children }
    </aside>
  )
}

export default observer(AsideArea) 