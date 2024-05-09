import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import SiteContainer from '@components/SiteContainer'
import SearchSvg from '@assets/svg/search.svg?react'
import Button from '@/UI/Button'
import './style.css'
import useSpaceOutside from '@/helpers/useSpaceOutside'


export interface IProjectInspectorProps {
  imageURL: URL
}

const ProjectInspector: React.FC<IProjectInspectorProps> = (props) => {
  const [isInspectModeEnabled, setInspectMode] = useState<boolean>(false)
  const [position, setPosition] = useState([0, 0])
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const imageBox: HTMLElement | null = document.getElementById('project-inspector-box')

  const handleButton = () => {
    setInspectMode(true)
  }

  useSpaceOutside(wrapperRef, () => {
    setInspectMode(false)
    setPosition([0, 0])
  })

  const imageClassNames = ['observe-project-slider__image']

  if (isInspectModeEnabled) {
    imageClassNames.push('project-inspector__image')
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition([-event.clientX, -event.clientY])
    }

    if (imageBox && isInspectModeEnabled) {
      imageBox.addEventListener('mousemove', handleMouseMove)

      return () => {
        imageBox.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isInspectModeEnabled])

  return (
    <SiteContainer classNames={['observe-project-slider-area']}>
      <div ref={wrapperRef} className="observe-project-slider">
        <div id="project-inspector-box" className="observe-project-slider__box">
            <img 
              src={props.imageURL.href} className={imageClassNames.join(' ')} style={{ left: position[0], top: position[1] }}/>
            {
              !isInspectModeEnabled && (
                <Button classNames={['btn', 'observe-project-slider__button']} handler={handleButton}>
                  <SearchSvg/>
                </Button>
              )
            }
        </div>
      </div>
    </SiteContainer>
  )
}

export default observer(ProjectInspector) 