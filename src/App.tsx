import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeworkPage from './pages/HomeworkPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ProjectPage from './pages/ProjectPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='blog'>
          <Route index element={<BlogPage/>} />
          <Route path=':id' element={<BlogDetailsPage/>} />
        </Route>
        <Route path='project'>
          <Route index element={<ProjectPage/>} />
          <Route path=':id' element={<ProjectDetailsPage/>} />
        </Route>
        <Route path='/gb/homework' element={<HomeworkPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App