import React from 'react'
import Heading from '@components/Heading'
import { useStore } from '@/store'
import { IBlogArticle } from '@/types/blog-article'
import './style.css'
import { observer } from 'mobx-react-lite'


export interface IBlogArticleProps {
  articleID: string | undefined
}

const BlogArticle: React.FC<IBlogArticleProps> = (props) => {
  if (typeof props.articleID === 'undefined') return

  const { BlogStore } = useStore()

  const article: IBlogArticle | undefined = BlogStore.data.find(element => element.id === props.articleID)

  if (typeof article === 'undefined') return

  return (
    <article>
      <Heading
        headingClassNames={['heading-m']}
        heading={article.title}
        level={1}
      />
      <img src={new URL(`../../assets/images/blog-mini/${article.pic}`, import.meta.url).href} className="post-target__image"/>
      <div className="post-target__info">
          <time className="post-target__date">
            {article.date}
          </time>
          <p className="post-meta">
            {article.category}
          </p>
      </div>
      <p className="text-m">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          <br/><br/>
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
      </p>
      <q className="post-quote">
          <i className="post-quote__commas">“</i>
          <span>The details are not the details.</span>
          <span>They make the design.</span>
      </q>
      <Heading
        heading='Design sprints are great'
        headingClassNames={['heading-m']}
        level={1}
        classNames={['post-feed']}
      />
      <p className="text-m post-feed__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
      </p>
      <ol className="numeric-list">
          <li className="text-m">
              Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. 
          </li>
          <li className="text-m">
              Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. 
          </li>
          <li className="text-m">
              Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. 
          </li>
      </ol>
      <img src={new URL('../../assets/images/blog-post-image-2.png', import.meta.url).href} className="post-feed__image"/>
      <p className="text-m">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
      </p>
    </article>
  )
}

export default observer(BlogArticle) 