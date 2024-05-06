import { createContext, useContext } from 'react'
import BlogStore from './BlogStore'
import ProjectStore from './ProjectStore'


const store = {
  BlogStore,
  ProjectStore
}

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext<typeof store>(StoreContext)
}

export default store