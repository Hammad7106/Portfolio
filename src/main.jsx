import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'

import Experience from './Components/Experience/Experience.jsx'
import Education from './Components/Education/Education.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from './Components/Home/Home.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Resume from './Components/Resume/Resume.jsx'
const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='education' element={<Education/>}/>
      <Route path="resume" element={<Resume/>} />
    </Route>

    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
