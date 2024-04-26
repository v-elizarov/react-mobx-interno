import React from 'react'

export interface ICounterProps {

}

const Counter: React.FC<ICounterProps> = (props) => {

  return (
    <div className="counter-area">
      <div className="wrapper">
          <ul className="counter">
              <li><span className="counter__value">12</span><span className="text-m">Years Of Experiance</span></li>
              <li><span className="counter__value">85</span><span className="text-m">Success Project</span></li>
              <li><span className="counter__value">15</span><span className="text-m">Active Project</span></li>
              <li><span className="counter__value">95</span><span className="text-m">Happy Customers</span></li>
          </ul>
      </div>
    </div>
  )
}

export default Counter