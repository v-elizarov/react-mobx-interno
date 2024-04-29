import BlogPresenter, { IBlogPresenterProps } from '@components/BlogPresenter'
import Heading from '@components/Heading'
import React, { useEffect, useState } from 'react'
import { IBlogArticle } from '@/types/blog-article'
import Pagination from '@components/Pagination'


export interface IInfiniteBlogPresenterProps extends IBlogPresenterProps {}

const InfiniteBlogPresenter: React.FC<IInfiniteBlogPresenterProps> = ({ articles, articlesInOneRow = 3 }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const pages = Math.ceil(articles.length / (articlesInOneRow * 2))

  const articlesInCurrentPage: IBlogArticle[] = articles.slice((currentPageNumber - 1) * (articlesInOneRow * 2))

  useEffect(() => {
    setCurrentPageNumber(1)
  }, [articles])

  return (
    <section className="blog-presenter">
      <Heading 
          heading='Articles & News' 
          level={1} 
          classNames={['content-header', 'latest-post__header']}
          headingClassNames={['heading-m']}
      />
      <BlogPresenter 
          articles={articlesInCurrentPage}
          articlesInOneRow={articlesInOneRow}
      />
      <Pagination
        currentPage={currentPageNumber}
        setCurrentPage={setCurrentPageNumber}
        pageCount={pages}
      />
    </section>
  )
}

export default InfiniteBlogPresenter