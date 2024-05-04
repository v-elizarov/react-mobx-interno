import { IBlogArticle } from '@/types/blog-article'
import AbstractStore from './AbstractStore'
import { articles } from '@assets/data.json'


class BlogStore extends AbstractStore<IBlogArticle> {
  constructor(articles: IBlogArticle[], filter: string[]) {
    super(articles, filter)
  }
}

export default new BlogStore(articles, [])