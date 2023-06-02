import './css/style.css';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import useFetch from './components/Hooks/useFetch';



function App() {

  const {data, loading, error} = useFetch("/home?populate=*")
  const location = useLocation();


  return (
    <div className='App'>
      <div>
      <HelmetProvider>
        <Helmet>
        <script>
          let textArr = ["abcd", "defg", "rewwerw"]
        </script>
        </Helmet>
      </HelmetProvider>
   
      <Routes>
        <Route key={location.key} path='/' element={<Home data={data} />} />
        <Route key={location.key} path='/:params' element={<Home data={data} />} />
        <Route key={location.key} path='/products' element={<Products />} />
        <Route key={location.key} path='/products/:category' element={<Products />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
