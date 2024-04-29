import React from 'react'


export interface IHeadingProps {
    heading: string
    level: number
    text?: string
    headingClassNames?: string[]
    textClassNames?: string[]
    classNames?: string[]
}

const Heading: React.FC<IHeadingProps> = (props) => {
  const element = React.createElement(
    `h${props.level}`,
    { className: props.headingClassNames && props.headingClassNames.join(' ') },
    props.heading
  )

  if (props.text) {
    return (
      <div className={props.classNames && props.classNames.join(' ')}>
          { element }
          <p className={props.textClassNames && props.textClassNames.join(' ')}>
              { props.text }
          </p>
      </div>
    )
  }

  return (
    <div className={props.classNames && props.classNames.join(' ')}>
      { element }
    </div>
  )
}

export default Heading