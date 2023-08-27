import ReactDOM from 'react-dom/client'
import Instagram from './Instagram.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './App.jsx'
import Counter from './Counter.jsx'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
