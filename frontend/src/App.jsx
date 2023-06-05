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
import loadScript from './components/Hooks/loadScript';


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
   
    console.log('Route changed:', location.pathname);
 
    if(location.pathname==='/'){
      loadScript('/src/js/index.js');
    }

    if(location.pathname.startsWith('/products')){
      loadScript('/src/js/product.js');
    }
    
    
    window.scrollTo(0, 0);
  }, [location]);
  const {data, loading, error} = useFetch("/home?populate=*")
  
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
