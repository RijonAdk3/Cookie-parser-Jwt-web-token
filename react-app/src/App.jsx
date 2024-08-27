import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import Button from './components/Button'
import FormComponent from './components/form/FormComponent';
import Navbar from './components/global/Navbar';
import Register from './components/form/Register';
// import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
// import Navbar from './components/global/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Sidebar from './components/global/Sidebar';
// import mySvg from './assets/image/react.svg'
// import Card from './components/Card'
// import Form from './components/form/Form'


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        {/* <Footer/> */}
      </>
    )
  }
  const Layout1 = () => {
    return (
      <>
        <Sidebar />
        <Outlet />
        {/* <Footer/> */}
      </>
    )
  }

  const route = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,

          },
          {
            path: '/about',
            element: <About />,

          },
          {
            path: '/contact',
            element: <Contact />,

          },
          {
            path: '/service',
            element: <Service />,

          },


        ]
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/admin',
        element: <Layout1 />,
        children: [
          {
            path: '/admin/dashboard',
            element: <Home />
          }
        ]
      },
      {
        path: '*',
        element: < >
          <Link to='/'>Go to home</Link>
        </>,
      },
    ]
  )

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/register' element={<Register />} />
      </Routes> */}
    </>
  )
}

export default App
