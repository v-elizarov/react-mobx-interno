import React, { useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import BlogPresenter from '@components/BlogPresenter'
import { useStore } from '@/store'
import { categories } from '@assets/data.json'
import Button from '@/UI/Button'
import { IBlogArticle } from '@/types/blog-article'
import './style.css'
import AsideArea from '@/components/AsideArea'
import AsideBlock from '@/components/AsideBlock'
import CategoryPicker from '@/components/CategoryPicker'
import { observer } from 'mobx-react-lite'
import SiteContainer from '@components/SiteContainer'
import DividedContainer from '@components/DividedContainer'
import ContentArea from '@components/ContentArea'


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
        pic: 'placeholder.jpg',
        date: 'recent',
      }
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
      <SiteContainer classNames={['blog-content-area']}>
        <DividedContainer>
          <ContentArea>
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
              articles={BlogPresenterStore.filteredArticles}
              articlesInOneRow={2}
            />
          </ContentArea>
          <AsideArea>
            <AsideBlock heading='Tags'>
                <CategoryPicker/>
            </AsideBlock>
          </AsideArea>
        </DividedContainer>
      </SiteContainer>
      <Footer/>
    </React.Fragment>
  )
}

export default observer(HomeworkPage) 