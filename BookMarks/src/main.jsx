import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Layout from './Layout/Layout'
import Home from './Components/Home/Home'
import Code from './Components/Code/Code'
import Social from './Components/Social/Social'
import Query from './Components/Query/Query'
import Carrer from './Components/Carrer/Carrer'
import Practice from './Components/Practice/Practice'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,

    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path : "code",
        element: <Code/>
      },
      {
        path : "social",
        element: <Social/>
      },
      {
        path : "query",
        element: <Query/>
      },
      {
        path : "carrer",
        element: <Carrer/>
      },
      {
        path : "practice",
        element : <Practice/>
      }
  
    ]

  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>


  </React.StrictMode>,
)
