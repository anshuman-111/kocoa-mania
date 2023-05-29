import './css/style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';



function App() {
  
  return (
    <div className='App'>
      <HelmetProvider>
    <div className='app'>
      <Helmet>
      <script src="https://kit.fontawesome.com/ec5c855e8d.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
 
  <script src="/src/js/index.js"></script>
  <script src="/src/js/main.js"></script>
  <script src="/src/js/product.js"></script>

  <script>
    let textArr = ["abcd", "defg", "rewwerw"]
  </script>
      </Helmet>
    </div>
    </HelmetProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<Products />}/>
      </Routes>
      
      <script src='../../js/index.js'></script>
    </div>
  )
}

export default App
