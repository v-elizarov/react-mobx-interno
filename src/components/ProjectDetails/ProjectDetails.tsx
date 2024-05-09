import React from 'react'
import { IProjectItem } from '@/types/project-item'
import './style.css'
import { observer } from 'mobx-react-lite'
import SiteContainer from '../SiteContainer'
import { formattedPrice } from '@/helpers/formattedPrice'


export interface IProjectDetailsProps {
  project: IProjectItem
}

const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const { title, price, currencyCode } = props.project
  
  return (
    <SiteContainer classNames={['observe-project-content-area']}>
      <div className="observe-project-content">
        <div className="observe-project-content__box">
            <h1 className="heading-m">
                {`${title} / ${formattedPrice(price, currencyCode)}`}
            </h1>
            <p className="text-m observe-project-content__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                <br/><br/>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
            </p>
        </div>
      </div>
    </SiteContainer>
  )
}

export default observer(ProjectDetails) 