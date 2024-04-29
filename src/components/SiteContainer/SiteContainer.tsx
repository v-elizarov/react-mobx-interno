import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'


export interface ISiteContainerProps {
  classNames?: string[]
  children?: ReactNode | ReactNode[]
}

const SiteContainer: React.FC<ISiteContainerProps> = ({ classNames, children }) => {
  return (
    <div className={classNames && classNames.join(' ')}>
      <div className="wrapper">
        { children }
      </div>
    </div>
  )
}

export default observer(SiteContainer) 