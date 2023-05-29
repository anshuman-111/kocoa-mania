import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/Hooks/useFetch'
//import ProductCard from '../../components/ProductComponents/productCard'
import ProductDisplay from '../../components/ProductComponents/ProductDisplay'
import Logo from '../../assets/img/logo.png';
const Products = () => {

  
  const [categorySelection, setSelection] = useState({})
  const categoryTitle = useParams().category
  
   // Re render Error
  useEffect(()=>{
  if (typeof(categoryTitle)!== 'undefined'){
       setSelection(categoryTitle)
  } else {
    setSelection('Birthday')
  }
  }, [categoryTitle])
  
  // API Call for getting categories for side nav
  const {data, loading, error} = useFetch('/categories?populate[0]=title')

 // console.log(categorySelection)
  return (
    <div className="wrapper">
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
          <li key={item?.id}>
          <a title="Birthday" className="active" data-tab="tab-1"
          onClick={()=>{
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
          />
          <input type="submit" value="Search" />
        </section>
        
        {/* <!-- Tab content --> */}
        <ProductDisplay category={categorySelection} />
      </main>
    </div>

  )
}

export default Products