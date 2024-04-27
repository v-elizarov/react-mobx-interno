import React from 'react'
import RightArrowAlternateSvg from '@assets/svg/rightArrowAlternate.svg?react'
import Button from '@/UI/Button'
import { useNavigate } from 'react-router-dom'
import { IBlogArticle } from '@/types/blog-article'
import './style.css'

export interface IBlogPresenterArticleProps {
    article: IBlogArticle,
    hasAccent?: boolean
}

const BlogPresenterArticle: React.FC<IBlogPresenterArticleProps> = (props) => {
  const navigate = useNavigate()

  const buttonHandler = () => {
    navigate(`/react-mobx-interno/blog/${props.article.id}`)
  }

  const buttonClasses = ['btn', 'project__btn']
  if (props.hasAccent) buttonClasses.push('post-preview__btn_accent')

  return (
    <article className={props.hasAccent ? 'post-preview post-preview_accent': 'post-preview'}>
        <div className="post-preview__arc">
            <img src={new URL(`../../assets/images/blog-mini/${props.article.pic}`, import.meta.url).href} alt="" className="post-preview__image"/>
            <span className="post-preview__category">{props.article.category}</span>
        </div>
        <h3 className="heading-s post-preview__title">
            {props.article.title}
        </h3>
        <div className="post-preview__details">
            <time className="post-preview__date">
                {props.article.date}
            </time>
            <Button classNames={buttonClasses} handler={buttonHandler}>
                <RightArrowAlternateSvg/>  
            </Button>
        </div>
    </article>
  )
}

export default BlogPresenterArticle