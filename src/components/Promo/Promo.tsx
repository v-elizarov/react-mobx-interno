import React from 'react'
import RightArrowSvg from '@assets/svg/rightArrow.svg?react'
import Button from '@/UI/Button'
import { useNavigate } from 'react-router-dom'


export interface IPromoProps {}

const Promo: React.FC<IPromoProps> = () => {
  const navigate = useNavigate()

  const buttonHandler = () => {
    navigate('/react-mobx-interno/gb/homework')
  }

  return (
    <div className="promo-area">
        <div className="wrapper">
            <main className="promo">
                <img src={new URL('../../assets/images/promo.png', import.meta.url).href} alt="" className="promo__image"/>
                <div className="promo__content">
                    <h1 className="promo__title">
                        Let Your Home Be Unique
                    </h1>
                    <p className="text-m promo__text">
                        There are many variations of the passages of 
                        lorem Ipsum fromavailable, majority.
                    </p>
                    <Button 
                      classNames={['btn', 'btn-primary', 'promo__btn']}
                      handler={buttonHandler}
                    >
                        <span>Get Started</span>
                        <RightArrowSvg/>
                    </Button>
                  </div>
            </main>
        </div>
    </div>
  )
}

export default Promo