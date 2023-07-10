import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Applied from './Components/Applied/Applied.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  // Children[
  //   {
  //     path:"/applied",
  //     element: <Applied></Applied>
      
  //   }
  // ]
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
