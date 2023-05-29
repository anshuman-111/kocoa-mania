import React from 'react'
import cat1 from '../../assets/img/categories/category-1.jpg'
import cat2 from '../../assets/img/categories/category-2.jpg'
import cat3 from '../../assets/img/categories/category-3.jpg'
import cat4 from '../../assets/img/categories/category-4.jpg'
import cat5 from '../../assets/img/categories/category-5.jpg'
import cat6 from '../../assets/img/categories/category-6.jpg'
import cat7 from '../../assets/img/categories/category-7.jpg'
import cat8 from '../../assets/img/categories/category-8.jpg'
import cat9 from '../../assets/img/categories/category-9.jpg'
import cat10 from '../../assets/img/categories/category-10.jpg'
import cat11 from '../../assets/img/categories/category-11.jpg'
import cat12 from '../../assets/img/categories/category-12.jpg'
import CategoryCard from '../ProductComponents/CategoryCard'
import useFetch from '../../components/Hooks/useFetch'
import { Link } from 'react-router-dom'

const Categories = () => {

  const {data, loading, error } = useFetch('/categories?populate[0]=image&populate[1]=title')

  return (
    // <!-- Categories -->
      <section className="section categories pt-7 pb-7" id="categories">
        <h2 className="heading heading-secondary text-white">
          Explore our Range of Confectionary
        </h2>
        <div className="container">
        {error
          ? "Oops! Something went wrong"
          : loading
          ? "Loading ..."
          : data?.map((item) => 
            <CategoryCard item={item} key={item.id} />
          )}

        </div>
        <div className="text-center pt-5">
        <Link to='/products'>
        <a
            href="products.html"
            title="View More"
            className="btn btn-primary btn-red"
          >
          <i className="fa fa-plus-circle" aria-hidden="true"></i> View More</a>
        </Link>
         
        </div>
      </section>
  )
}

export default Categories