import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/Hooks/useFetch'
import ProductDisplay from '../../components/ProductComponents/ProductDisplay'
import Logo from '../../assets/img/logo.png';
import loadScript from '../../components/Hooks/loadScript'
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


  let tagList = []
  let filteredProducts = []
  // Category Selection states from URL or From Side Nav
  const [categorySelection, setSelection] = useState()
  const categoryTitle = useParams().category

  useEffect(()=>{
    if(categoryTitle!=='undefined'){
      setSelection(categoryTitle)
    }
  },[categoryTitle])

  // Setting category state from params
    const handleCategoryClick = (e,title) => {
      setActive(e.currentTarget)
      setSelection(title)
    }

    console.log(categorySelection)

  // API Call for getting categories for side nav
  const {data, loading, error} = useFetch('/categories?populate[0]=title')

  // Getting all products for search through tags
  //const {tags, tagLoading, tagError } = useFetch('/tags?populate[0]=tagname')

  if (searchInput !== ''){
    // filteredProducts = productSearch.filter( item => {
    //   return item.includes(searchInput.toLowerCase())
    // }
    //)
    console.log(searchInput)
  }
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
          <input type="submit" value='Search'/>
        </section>
        
        {/* <!-- Tab content --> */}
          <ProductDisplay category={categorySelection} />
      </main> 
    </div>

  )
}

export default Products