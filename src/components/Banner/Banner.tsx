import React from 'react'
import BannerPanel from '@components/BannerPanel'
import { IHeadingProps } from '@components/Heading'


export interface IBannerProps extends IHeadingProps {
  imageURL: URL
  showPanel?: boolean
}

const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <div className="banner">
      <img src={props.imageURL.href} className="banner__image"/>
      { props.showPanel && (
        <BannerPanel
          heading={props.heading}
          level={props.level}
          headingClassNames={props.headingClassNames}
        />
      ) }
    </div>
  )
}

export default Banner