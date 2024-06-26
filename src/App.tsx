import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeworkPage from './pages/HomeworkPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ProjectPage from './pages/ProjectPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import NotFoundPage from './pages/NotFoundPage'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path={`${GIT_REP}`}>
          <Route index element={<HomePage/>}/>
          <Route path='blog' element={<BlogPage/>}/>
          <Route path='blog/:id' element={<BlogDetailsPage/>}/>         
          <Route path='project' element={<ProjectPage/>}/>
          <Route path='project/:id' element={<ProjectDetailsPage/>}/>
          <Route path='gb/homework' element={<HomeworkPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App