import React from 'react'
import { observer } from 'mobx-react-lite'
import { IBlogArticle } from '../../types/blog-article'
import BlogPresenterArticle from '../BlogPresenterArticle'

export interface IBlogPresenterProps {
  isCompactModeEnabled?: boolean,
  articles: IBlogArticle[],
  articlesInOneRow?: number 
}

const BlogPresenter: React.FC<IBlogPresenterProps> = (props) => {
  const items = props.articles.map((article, index) => {
    return (
      <BlogPresenterArticle 
        key={article.id}
        article={article} 
        hasAccent={(index + 1) % 2 === 0}
      />
    )
  })

  const rowLimit = props.articlesInOneRow ? props.articlesInOneRow : 3
  
  if (props.isCompactModeEnabled) {
    return (
      <div className="blog-presenter__container">
        <div className="blog-presenter__row">
          {...items.slice(0, rowLimit)}
        </div>
      </div>
    )
  }
  return (
    <div className="blog-presenter__container">
      <div className="blog-presenter__row">
        {...items.slice(0, rowLimit)}
      </div>
      <div className="blog-presenter__row">
        {...items.slice(rowLimit, rowLimit * 2)}  
      </div>
    </div>
  )
}

export default observer(BlogPresenter)