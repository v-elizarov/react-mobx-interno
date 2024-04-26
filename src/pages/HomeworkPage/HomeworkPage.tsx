import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../UI/Input'
import BlogPresenter from '../../components/BlogPresenter'
import { useStore } from '../../store'
import { categories } from '../../assets/data.json'
import Button from '../../UI/Button'
import './style.css'
import { IBlogArticle } from '../../types/blog-article'
import { toJS } from 'mobx'

export interface IHomeworkPageProps {}

const HomeworkPage: React.FC<IHomeworkPageProps> = () => {
  const { BlogPresenterStore } = useStore()
  const [magicButtonText, setMagicButtonText] = useState('Перевернуть')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(categories[0])

  const addHandler = () => {
    if (title) {
      const newArticle: IBlogArticle = {
        id: Date.now().toString(),
        title,
        category,
        pic: '/src/assets/images/blog-mini/placeholder.jpg',
        date: 'recent',
      }
      console.log(category)
      setTitle('')
      BlogPresenterStore.addArticle(newArticle)
    }
  }

  const magicButtonHandler = () => {
    setMagicButtonText(magicButtonText.split('').reverse().join(''))
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  }

  const selectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory(e.target.value)
  }

  return (
    <React.Fragment>
      <Header/>
      <div className="blog-content-area">
        <div className="wrapper">
            <div className="blog-content">
                <section className="blog-content-feed">
                  <div className='homework-page'>
                    <input 
                      type='text' 
                      className='homework-page__input' 
                      placeholder='Article title'
                      value={title} 
                      onChange={handleChange}
                    />
                    <select className='homework-page__select' onChange={selectChange}>
                      {
                        categories.map(meta => (
                          <option key={meta} value={meta}>
                            {meta}
                          </option>
                          )
                        )
                      }
                    </select>
                    <Button
                      classNames={['btn', 'btn-primary', 'promo__btn']}
                      handler={addHandler}
                    >
                      <span>+</span>
                    </Button>
                    <Button
                      classNames={['btn', 'btn-primary', 'promo__btn']}
                      handler={magicButtonHandler}
                    >
                      <span>{magicButtonText}</span>
                    </Button>
                  </div>
                  <BlogPresenter 
                    articles={toJS(BlogPresenterStore.articles)}
                    articlesInOneRow={2}
                  />
                </section>
                <aside className="blog-content-sidebar">
                  <section className="blog-content-sidebar__container">
                    <h3 className="heading-s">Tags</h3>
                        <div className="blog-content-sidebar__content">
                            <div className="pick-categories">
                              <Input type='checkbox' name='category' label='Kitchen'/>
                              <Input type='checkbox' name='category' label='Bedroom'/>
                              <Input type='checkbox' name='category' label='Building'/>
                              <Input type='checkbox' name='category' label='Architecture'/>
                              <Input type='checkbox' name='category' label='Kitchen Planning'/>
                              <Input type='checkbox' name='category' label='Living Area'/>
                            </div>
                        </div>
                  </section>
                </aside>
            </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default HomeworkPage