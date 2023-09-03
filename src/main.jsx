import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './App.jsx'
import Instagram from './components/Instagram/Instagram.jsx'
import Counter from './components/Counter/Counter.jsx'
import Todo from './components/Todo_App/Todo.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/instagram',
    element: <Instagram />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/todo',
    element: <Todo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
