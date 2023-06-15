import './css/style.css';
import { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import useFetch from './components/Hooks/useFetch';
import loadScript from './components/Hooks/loadScript';
import ProductImage from './components/ProductComponents/ProductImage';


function App() {
  const location = useLocation();
  useEffect(()=>{
    const handlePopState = () => {
      window.location.reload()
    }
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState);
    }
  },[])
  
  useEffect(() => {
    if(location.pathname==='/'){
      loadScript('/src/assets/js/index.js');
    }    
    window.scrollTo(0, 0);
  }, [location]);
  const {data, loading, error} = useFetch("/home?populate=*")
  const phone = data?.attributes?.phone.toString().slice(1,)
  return (
    <div className='App'>
      <div>
      <Routes>
        <Route key={location.key} path='/' element={<Home data={data} />} />
        <Route key={location.key} path='/:params' element={<Home data={data} />} />
        <Route key={location.key} path='/products' element={<Products phone={phone}/>} />
        <Route key={location.key} path='/products/:category' element={<Products phone={phone}/>}/>
        <Route key={location.key} path='/products/view/:productName' element={<ProductImage />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
