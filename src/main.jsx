import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import NewPost, { action as newPostAction } from './routes/NewPost/NewPost.jsx'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails/PostDetails.jsx'
import Posts, { loader as postLoader } from './routes/Posts/Posts.jsx'

import ErrorElement from './routes/ErrorElement/ErrorElement.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: '/add-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
        ]
      }
    ],
    errorElement: <ErrorElement/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement></RouterProvider>
  </React.StrictMode>,
)
