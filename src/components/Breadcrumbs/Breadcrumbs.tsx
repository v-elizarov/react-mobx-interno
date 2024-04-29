import React from 'react'
import { useLocation } from 'react-router-dom'
import NavList from '@components/NavList'
import { INavLink } from '@/types/nav-link'


export interface IBreadcrumbsProps {}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = () => {
  const { pathname } = useLocation()

  const arrayFromPath = pathname.split('/').splice(1)
  const data: INavLink[] = []
  let deep: string = '/'
  data.push({
    to: deep,
    label: 'Home'
  })

  for (let i = 1; i < arrayFromPath.length; i++) {
    if (i === 1) {
      deep = arrayFromPath[i]
    } else if (deep[deep.length - 1] === '/') {  
      deep += arrayFromPath[i]
    } else {
      deep += `/${arrayFromPath[i]}`
    }
    data.push({
      to: deep,
      label: arrayFromPath[i].charAt(0).toUpperCase() + arrayFromPath[i].slice(1)
    })
  }

  return (
    <NavList
      data={data}
      separator='/'
      classNames={['text-m', 'breadcrumbs']}
    />
  )
}

export default Breadcrumbs