import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Error from './components/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children :[
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/appliedJobs",
        element : <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element : <Blog></Blog>
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
