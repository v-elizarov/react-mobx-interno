import React from 'react'
import { useStore } from '@/store'
import { IProjectItem } from '@/types/project-item'
import './style.css'
import { observer } from 'mobx-react-lite'
import SiteContainer from '../SiteContainer'
import { formattedPrice } from '@/helpers/formattedPrice'
import SearchSvg from '@assets/svg/search.svg?react'
import Button from '@/UI/Button'


export interface IProjectDetailsProps {
  projectID: string | undefined
}

const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {

  if (typeof props.projectID === 'undefined') return

  const { ProjectStore } = useStore()

  const index = ProjectStore.getIndexOfItemByID(props.projectID)
  const project: IProjectItem | undefined = ProjectStore.getItem(index)

  if (typeof project === 'undefined') return

  return (
    <React.Fragment>
      <SiteContainer classNames={['observe-project-content-area']}>
        <div className="observe-project-content">
          <div className="observe-project-content__box">
              <h1 className="heading-m">
                  {`${project.title} / ${formattedPrice(project.price, project.currencyCode)}`}
              </h1>
              <p className="text-m observe-project-content__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                  <br/><br/>
                  In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
              </p>
          </div>
        </div>
      </SiteContainer>
      <SiteContainer classNames={['observe-project-slider-area']}>
        <div className="observe-project-slider">
          <div className="observe-project-slider__box">
              <img 
                src={new URL(`../../assets/images/gallery/${project.pic}`, import.meta.url).href} className="observe-project-slider__image"/>
              <Button classNames={['btn', 'observe-project-slider__button']} handler={() => console.log('zoom in!')}>
                <SearchSvg/>
              </Button>
          </div>
          <img src={new URL('../../assets/images/dots.png', import.meta.url).href} className="observe-project-slider__dots"/>
        </div>
      </SiteContainer>
    </React.Fragment>
  )
}

export default observer(ProjectDetails) 