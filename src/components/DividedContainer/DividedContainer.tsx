import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'


export interface IDividedContainerProps {
  children?: ReactNode | ReactNode[]
}

const DividedContainer: React.FC<IDividedContainerProps> = ({ children }) => {
  return (
    <div className="blog-content">
      { children }
    </div>
  )
}

export default observer(DividedContainer) 