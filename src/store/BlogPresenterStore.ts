import { IBlogArticle } from '../types/blog-article'
import { articles } from '../assets/data.json'
import { action, computed, makeObservable, observable } from 'mobx'

class BlogPresenterStore {
  articles: IBlogArticle[] = []
  filter: string[] = ['Kitchen', 'Bedroom']

  constructor(articles: IBlogArticle[]) {
    this.articles = articles
    makeObservable(this, {
      articles: observable,
      filteredArticles: computed,
      toggleFilter: action,
      emptyFilter: action
    })
  }

  get filteredArticles() {
    if (this.filter.length === 0) {
      // return all articles
      return this.articles
    }
    return this.articles.filter(article => this.filter.includes(article.category))
  }

  toggleFilter = (category: string) => {
    const index = this.filter.indexOf(category)
    if (index !== -1) {
      // toggle down
      this.filter.splice(index, 1)
    } else {
      // toggle up
      this.filter.push(category)
    }
    console.log(this.filter)
  }

  emptyFilter() {
    this.filter = []
  }

  addArticle(article: IBlogArticle) {
    this.articles = [article, ...this.articles]
  }
}

export default new BlogPresenterStore(articles)