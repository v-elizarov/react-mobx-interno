import { createContext, useContext } from 'react'
import BlogPresenterStore from './BlogPresenterStore'

const store = {
  BlogPresenterStore
}

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext<typeof store>(StoreContext)
}

export default store