import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useFetch from '../../components/Hooks/useFetch'
import ProductDisplay from '../../components/ProductComponents/ProductDisplay'
import Logo from '../../assets/img/logo.png';
import axios from 'axios'
import SearchResults from '../../components/ProductComponents/SearchResults'
import Loader from '../../components/HomeComponents/Loader'
import CategoryTab from '../../components/ProductComponents/CategoryTab'
const Products = ({phone}) => {

  useEffect(()=>{
    const handlePopState = () => {
      window.location.reload()
    }
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState);
    }
  },[])
  // Setting states for Search
  const [searchInput, setSearchInput] = useState('')
  const [searchBox, setSearchBox] = useState(false)
  const [onResultClick, setResultclick] = useState(false) 
  const [active, setActive] = useState('')
  const [fetchedList, setFetchedList] = useState([])
  const [searchList, setSearchList] = useState([])
  // Category Selection states from URL or From Side Nav
  const [categorySelection, setSelection] = useState()
  const categoryTitle = useParams().category


  // Set Loader 
  useEffect(()=>{
    setTimeout(()=>{
      setPageLoading(false)
    }, 1000)
  })


   // Setting category state from params
  useEffect(()=>{
    if(categoryTitle!=='undefined'){
      setSelection(categoryTitle)
      setActive(categoryTitle)
    }
  },[categoryTitle])

    // Adding category click function
    const handleCategoryClick = (title) => {
      setSelection(title)
      setSearchList([])
      setSearchInput('')
      setActive(title)
      document.getElementById('search').value = ''

    }


  // API Call for getting categories for side nav
  const {data, loading, error} = useFetch('/categories?populate[0]=title')

  // Getting all products for search
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

      }
    };
    fetchData();
  },[]);
 

  // Showing and hiding text box based on search input
  useEffect(()=>{
    if(searchInput !== '' && onResultClick===false){
      setSearchBox(true)
    }else {
      setSearchBox(false)
    }
  },[searchInput])
  
  let searchBoxList = new Set()
  let suggestions = new Set()
    if (searchInput !== ''){

      fetchedList.forEach(item => {
  
        if (item?.attributes?.title?.toLowerCase().startsWith(searchInput.toLowerCase().trim())){
          searchBoxList.add(item?.attributes?.title )
          suggestions.add(item)
        }else if(item?.attributes?.title?.toLowerCase().includes(searchInput.toLowerCase().trim())){
          searchBoxList.add(item?.attributes?.title )
          suggestions.add(item)
        }
  
        item?.attributes?.tags?.data?.forEach(tag => {
          if(tag?.attributes?.tagname.toLowerCase().includes(searchInput.toLowerCase().trim())){
            searchBoxList.add(tag?.attributes?.tagname)
            suggestions.add(item)
          }
        })
      });
    
    }else{
    
      suggestions = new Set()
      searchBoxList = new Set()
    }

  

  const handleSearchSubmit = () => {
    setSearchList([...suggestions])
    setSearchInput('')
    setResultclick(false)
  }
  searchBoxList = new Array([... searchBoxList])
  searchBoxList[0] = searchBoxList[0].slice(0,8)
 

  

  return (
    <>
    {loading ? <Loader /> : <></>}
    
      <div className="wrapper">
      {/* <!-- Side navigation --> */}
      <aside className="side-nav">
        <div className="nav-open">
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="row-top">
          
          {/* Center the logo  */}
          <Link to={'/'} className="logo"  title="Kocoa Mania" onClick={
            ()=>{
              document.dispatchEvent('popstate')
            }
          }>
            <img src={Logo} alt="kocoamania" loading="lazy" />
          </Link>
          <Link to={'/'} title="Back to Home" onClick={()=>{
            document.dispatchEvent('popstate')
          }}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to
            Home
            </Link>
        </div>
        <div className="tabs row-bottom">
          <ul className="tab-links" role="list">
          {error
          ? "Oops! Something went wrong"
          : loading
          ? "Loading ..."
          : data?.map((item) =>
          <li key={item?.id} onClick={()=>{
            handleCategoryClick(item?.attributes?.title)
          }}>
            <CategoryTab item={item} active={active} />
          </li>
          )}
            
          </ul>
        </div>
      </aside>

      {/* <!-- Product gallery --> */}
      <main className="product-gallery">


        {/* <!-- Searchbar --> */}
        <section className="searchbar">
          {/* <!-- searchbox --> */}
          <div className="searchbox">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search the cakes"
              onChange={e => 
                setSearchInput(e.target.value)}
            />

            {/* <!-- Searchbox result --> */}
            {!searchBox ? <></> :
              <div className="searchbox-result">
              <ul role="list">
                {searchBoxList[0].length < 1 && searchInput!=='' ? <p>Sorry! No results found for {searchInput} </p> : 
                searchBoxList[0].map((item, index)=>
                  <li key={index} onClick={()=>{
                      setSearchInput(item)
                      document.getElementById('search').value = item
                      setSearchBox(false)
                      setResultclick(true)
                  }}><a title={item}>{item}</a></li>
                )
                }
                
                
              </ul>
            </div>
            }
            </div>
            
          <input type="submit" value="Search" onClick={handleSearchSubmit}/>
    </section>
        
        {/* <!-- Tab content --> */}
        {searchList.length < 1 ?  
        <ProductDisplay category={categorySelection} phone={phone} /> :
        <SearchResults searchList={searchList}/>
        }
          
      </main> 
    </div>
    </>
  )
}

export default Products