import './css/style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import useFetch from './components/Hooks/useFetch';



function App() {

  const {data, loading, error} = useFetch("/home?populate=*")
  return (
    <div className='App'>
      <div>
      <HelmetProvider>
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
    </HelmetProvider>
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<Products />}/>
      </Routes>
      </div>
      {/* <script src='../../js/index.js'></script> */}
    </div>
  )
}

export default App
