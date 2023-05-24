import { useState } from 'react'
import './css/style.css';
import Hemlet, { Helmet } from 'react-helmet';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const Layout = () => {
  return (
    <div className='app'>
      <Helmet>
      <script src="https://kit.fontawesome.com/ec5c855e8d.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
 
  <script src="/src/js/index.js"></script>
  <script src="/src/js/main.js"></script>
  <script>
    let textArr = ["abcd", "defg", "rewwerw"]
  </script>
      </Helmet>
      
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}




const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
    ],
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <script src='../../js/index.js'></script>
    </div>
  )
}

export default App
