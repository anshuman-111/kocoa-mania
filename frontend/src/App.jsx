import './css/style.css';
import { useEffect, useState } from 'react';
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
  const [route, setRoute] = useState(false)
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
    // Perform actions on route change
    // This will be triggered whenever the location changes
    console.log('Route changed:', location.pathname);
    setRoute(true)
    if(location.pathname==='/'){
      console.log("loading index")
      loadScript('/src/js/index.js?v=1');
    }

    if(location.pathname==='/products'){
      loadScript('/src/js/product.js');
    }
    window.scrollTo(0, 0); // Scroll to top of the page on route change
  }, [location]);
  const {data, loading, error} = useFetch("/home?populate=*")
  const reloadToken = 'xre334'
  if(route===true){
    
    
  }
  return (
    <div className='App'>
      <div>
      <HelmetProvider>
        <Helmet>
        
        <script>
          let textArr = ["abcd", "defg", "rewwerw"]
        </script>
        <script src='/src/js/product.js?v=1' type='text/javascript'></script>
        <script src='/src/js/index.js?v=1' type='text/javascript'></script>
        </Helmet>
      </HelmetProvider>
   
      <Routes>
        <Route key={location.key} path='/' element={<Home data={data} />} />
        <Route key={location.key} path='/:params' element={<Home data={data} />} />
        <Route key={location.key} path='/products' element={<Products reloadToken={reloadToken}/>} />
        <Route key={location.key} path='/products/:category' element={<Products reloadToken={reloadToken}/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
