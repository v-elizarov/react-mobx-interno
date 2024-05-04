import React from 'react'
import { IProjectItem } from '@/types/project-item'
import RightArrowAlternateSvg from '@assets/svg/rightArrowAlternate.svg?react'
import Button from '@/UI/Button'
import { useNavigate } from 'react-router-dom'
import { formattedPrice } from '@/helpers/formattedPrice'
import './style.css'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'


export interface IProjectListItemProps {
  item: IProjectItem
  imageClassNames?: string[]
}

const ProjectListItem: React.FC<IProjectListItemProps> = (props) => {
  const { id, title, pic, category, price, currencyCode, isAvailable, isFavorite } = props.item
  const navigate = useNavigate()
  const { ProjectStore } = useStore()

  const buttonHandler = () => {
    navigate(`${GIT_REP}project/${id}`)
  }

  const makeFavoriteHandler = () => {
    ProjectStore.toggleFavorite(id)
  }

  const details = `${category} / ${formattedPrice(price, currencyCode)} / ${isAvailable ? 'Available' : 'Out of stock'}`

  return (
    <figure className={`project ${isFavorite && 'project_star'}`}>
      <Button classNames={['btn', 'project-favorite-button']} handler={makeFavoriteHandler}>
        <img 
          className={`project__image ${props.imageClassNames && props.imageClassNames.join(' ')}`} 
          src={new URL(`../../assets/images/gallery/${pic}`, import.meta.url).href}
        />
      </Button>
      <div className="project__details">
        <div className="project__info">
          <figcaption className="heading-s">{title}</figcaption>
          <p className="text-m">{details}</p>
        </div>
        <Button classNames={['btn', 'project__btn']} handler={buttonHandler}>
          <RightArrowAlternateSvg/>
        </Button>
      </div>
    </figure>
  )
}

export default observer(ProjectListItem) 