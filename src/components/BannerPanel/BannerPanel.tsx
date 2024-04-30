import React from 'react'
import Breadcrumbs from '@components/Breadcrumbs'
import Heading, { IHeadingProps } from '@components/Heading'


export interface IBannerPanelProps extends IHeadingProps {}

const BannerPanel: React.FC<IBannerPanelProps> = (props) => {
  return (
    <div className="banner__container">
      <div className="banner__box">
        <Heading
          heading={props.heading}
          level={props.level}
          headingClassNames={props.headingClassNames}
        />
        <Breadcrumbs/>
      </div>
    </div>
  )
}

export default BannerPanel