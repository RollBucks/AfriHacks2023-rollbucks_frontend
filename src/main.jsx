import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Login } from './pages/login.jsx'
import { Register } from './pages/register.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import theme from "./theme/theme";
import Dashboard from './pages/dashboard/index.jsx'
import { ChakraProvider } from '@chakra-ui/provider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </ChakraProvider>
)
