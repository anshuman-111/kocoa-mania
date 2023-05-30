import React, { useEffect, useState, Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/Hooks/useFetch'
const ProductDisplay = lazy(() => import('../../components/ProductComponents/ProductDisplay'))  
import Logo from '../../assets/img/logo.png';
import axios from 'axios';

const Products = () => {
  
  // Setting states for Search
  const [productSearch, setProductSearch] = useState([]);
  const [prodLoading, setProdLoading] = useState(false);
  const [prodError, setProdError] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  const [active, setActive] = useState()


  let tagList = []
  let filteredProducts = []
  // Category Selection states from URL or From Side Nav
  const [categorySelection, setSelection] = useState({})
  const categoryTitle = useParams().category

  // Setting category state from params
  useEffect(()=>{
  if (typeof(categoryTitle)!== 'undefined'){
       setSelection(categoryTitle)
  } 
  }, [categoryTitle])
  
  // API Call for getting categories for side nav
  const {data, loading, error} = useFetch('/categories?populate[0]=title')

  // Getting all products for search through tags
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProdLoading(true);
        const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +  `/products?populate[0]=title&populate[1]=image`, {
          headers : {
            Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN
          }
        });
        setProductSearch(res.data.data);
      } catch (err) {
  
        setProdError(true);
      }
      setProdLoading(false);
    };
    fetchData();
  }, []);




  if (searchInput !== ''){
    // filteredProducts = productSearch.filter( item => {
    //   return item.includes(searchInput.toLowerCase())
    // }
    //)
    console.log(searchInput)
  }






  return (
    <div className="wrapper">
      <Suspense fallback={<div> Loading ... </div>}>


      {/* <!-- Side navigation --> */}
      <aside className="side-nav">
        <div className="nav-open">
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="row-top">
          
          {/* Center the logo  */}
          <a href="index.html" className="logo" title="Kocoa Mania">
            <img src={Logo} alt="kocoamania" loading="lazy" />
          </a>
          <a href="index.html" title="Back to Home"
            ><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to
            Home</a
          >
        </div>
        <div className="tabs row-bottom">
          <ul className="tab-links" role="list">
          {error
          ? "Oops! Something went wrong"
          : loading
          ? "Loading ..."
          : data?.map((item) => 
          <li key={item?.id} className={active}>


            {/* FIX ACTIVE ELEMENT  */}

            <a title="Birthday"  data-tab="tab-1"
            onClick={()=>{
              setActive('active')
              setSelection(item?.attributes?.title)
            }}
              >{item?.attributes?.title}</a>             
          
        </li>
          )}
            
          </ul>
        </div>
      </aside>

      {/* <!-- Product gallery --> */}
      <main className="product-gallery">
        {/* <!-- Searchbar --> */}
        <section className="searchbar">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search the cakes"
            onChange={e => 
              setSearchInput(e.target.value)}
          />
          <input type="submit" value='Search'/>
        </section>
        
        {/* <!-- Tab content --> */}
          <ProductDisplay category={categorySelection} />
      </main> 
      </Suspense>
    </div>

  )
}

export default Products