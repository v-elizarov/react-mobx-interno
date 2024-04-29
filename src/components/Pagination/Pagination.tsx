import { observer } from 'mobx-react-lite'
import RightArrowAlternateSvg from '@assets/svg/rightArrowAlternate.svg?react'
import LeftArrowAlternateSvg from '@assets/svg/leftArrowAlternate.svg?react'
import React, { ReactNode } from 'react'
import Button from '@/UI/Button'


export interface IPaginationProps {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  pageCount: number
}

const Pagination: React.FC<IPaginationProps> = ({ currentPage, setCurrentPage, pageCount }) => {
  // Not needed to show paging
  // if we have only one page
  if (pageCount <= 1) return

  const toPreviousPageElement = (
    <li>
      <Button 
        classNames={['btn', 'pagination__button']} 
        handler={() => setCurrentPage(--currentPage)}
      > 
        <LeftArrowAlternateSvg/> 
      </Button>
    </li>
  ) 

  const toNextPageElement = (
    <li>
      <Button 
        classNames={['btn', 'pagination__button']} 
        handler={() => setCurrentPage(++currentPage)}
      > 
        <RightArrowAlternateSvg/> 
      </Button>
    </li>
  ) 

  const buttons: ReactNode[] = []
  for (let i = 1; i <= pageCount; i++) {
    const classNames = ['btn', 'pagination__button']

    if (i === currentPage) classNames.push('pagination__button_active')

    buttons.push((
      <li key={i}>
        <Button classNames={classNames} handler={() => setCurrentPage(i)}>
          { i < 10 ? `0${i}` : i }
        </Button>
      </li>
    ))
  }

  return (
    <nav className="pagination">
      { currentPage >= 2 && toPreviousPageElement }
      { buttons }
      { currentPage !== pageCount && toNextPageElement }
    </nav>
  )
}

export default observer(Pagination) 