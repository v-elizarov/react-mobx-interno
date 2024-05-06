import Button from '@/UI/Button'
import { useStore } from '@/store'
import { IBlogArticle } from '@/types/blog-article'
import RightArrowAlternateSvg from '@assets/svg/rightArrowAlternate.svg?react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export interface ILatestPostProps {}

const LatestPost: React.FC<ILatestPostProps> = () => {
  const { BlogStore } = useStore()
  const navigate = useNavigate()

  if (BlogStore.data.length === 0) return
  
  const latestPost: IBlogArticle = BlogStore.data[0]
  
  const { id, title, pic, date } = latestPost

  const buttonHandler = () => {
    navigate(`${GIT_REP}blog/${id}`)
  }

  return (
    <main className="latest-post">
      <img src={new URL(`../../assets/images/blog-mini/${pic}`, import.meta.url).href} alt={title} className="latest-post__image"/>
      <div className="latest-post__details">
          <h3 className="heading-s latest-post__title">
              { title }
          </h3>
          <p className="text-m latest-post__text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
              <br/><br/>
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.
          </p>
          <div className="post-preview__details">
              <time className="post-preview__date">
                  { date }
              </time>
              <Button classNames={['btn', 'project__btn']} handler={buttonHandler}>
                <RightArrowAlternateSvg/> 
              </Button>
          </div>
      </div>
    </main>
  )
}

export default observer(LatestPost) 