import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/Hooks/useFetch'
import ProductDisplay from '../../components/ProductComponents/ProductDisplay'
import Logo from '../../assets/img/logo.png';
import loadScript from '../../components/Hooks/loadScript'
import axios from 'axios'
const Products = () => {
  
  useEffect(() => {
   
    loadScript("https://kit.fontawesome.com/ec5c855e8d.js");
    loadScript('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js');
    loadScript('/src/js/main.js');
    loadScript('/src/js/product.js');
}, [])

  // Setting states for Search
  const [searchInput, setSearchInput] = useState('')
  const [active, setActive] = useState()
  const [fetchedList, setFetchedList] = useState([])
  const [searchList, setSearchList] = useState([])
  // Category Selection states from URL or From Side Nav
  const [categorySelection, setSelection] = useState()
  const categoryTitle = useParams().category

   // Setting category state from params
  useEffect(()=>{
    if(categoryTitle!=='undefined'){
      setSelection(categoryTitle)
    }
  },[categoryTitle])

 
    const handleCategoryClick = (e,title) => {
      setActive(e.currentTarget)
      setSelection(title)
    }


  // API Call for getting categories for side nav
  const {data, loading, error} = useFetch('/categories?populate[0]=title')

  // Getting all products for search through tags
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +  `/products?populate=*`, {
          headers : {
            Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN
          }
        });
        setFetchedList(res.data.data);
      } catch (err) {
  
        console.log(err);
      }
    };
    fetchData();
  },[]);
 
 
  let suggestions = new Set()
  if (searchInput !== ''){
    fetchedList.forEach(item => {

      if (item?.attributes?.title?.toLowerCase().includes(searchInput.toLowerCase())){
        suggestions.add(item)
      }

      item?.attributes?.categories?.data?.forEach(cat => {
        if(cat?.attributes?.title?.toLowerCase().includes(searchInput.toLowerCase())){
          suggestions.add(item)
        }
      })

      item?.attributes?.tags?.data?.forEach(tag => {
        if(tag.attributes.tagname.toLowerCase().includes(searchInput.toLowerCase())){
          suggestions.add(item)
        }
      })
    });
    
  }else{
    suggestions = new Set()
  }
  console.log(suggestions)

  const handleSearchSubmit = () => {
    setSearchList([...suggestions])
  }
  console.log(searchList)
  
  return (
    <div className="wrapper">
      {/* <!-- Side navigation --> */}
      <aside className="side-nav">
        <div className="nav-open">
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="row-top">
          
          {/* Center the logo  */}
          <Link to={'/'}>
          <a href="index.html" className="logo" title="Kocoa Mania">
            <img src={Logo} alt="kocoamania" loading="lazy" />
          </a>
          </Link>
          <Link to={'/'}>
          <a href="index.html" title="Back to Home"
            ><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to
            Home</a
          >
            </Link>
        </div>
        <div className="tabs row-bottom">
          <ul className="tab-links" role="list">
          {error
          ? "Oops! Something went wrong"
          : loading
          ? "Loading ..."
          : data?.map((item) => 
          <li key={item?.id} className={active} onClick={(e)=>{handleCategoryClick(e,item?.attributes?.title)}}>


            {/* FIX ACTIVE ELEMENT  */}

            <a title="Birthday"  data-tab="tab-1" value={item?.attributes?.title}
            
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
          <input type="submit" value='Search' onClick={handleSearchSubmit}/>
        </section>
        
        {/* <!-- Tab content --> */}
          <ProductDisplay category={categorySelection} searchList={searchList} />
      </main> 
    </div>

  )
}

export default Products