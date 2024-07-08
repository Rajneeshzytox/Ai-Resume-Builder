import React from 'react'
import ReactDOM from 'react-dom/client'
// iporting react router dom
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// impoting error 404 page 
import Error404 from './Error404.jsx'

import App from './Pages/App.jsx'
// importing other pages
import ResumeBuilder from './Pages/ResumeBuilder.jsx';
import './styles/index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element:  <App />,
      // Error page set
      errorElement: <Error404 />,
    },
    {
      path: "/resume-builder",
      element:  <ResumeBuilder/>,
      // Error page set
      errorElement: <Error404 />,
    },
]
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
