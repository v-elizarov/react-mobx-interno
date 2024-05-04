import { createContext, useContext } from 'react'
import BlogPresenterStore from './BlogPresenterStore'
import BlogStore from './BlogStore'
import ProjectStore from './ProjectStore'


const store = {
  BlogPresenterStore,
  BlogStore,
  ProjectStore
}

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext<typeof store>(StoreContext)
}

export default store