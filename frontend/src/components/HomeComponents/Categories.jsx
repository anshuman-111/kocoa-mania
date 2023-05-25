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
const Categories = () => {
  return (
    // <!-- Categories -->
      <section className="section categories pt-7 pb-7" id="categories">
        <h2 className="heading heading-secondary text-white">
          Explore our Range of Confectionary
        </h2>
        <div className="container">
          <div className="card card-red reveal fade-left">
            <div className="card-image">
              <img src={cat1} alt="Product 5" />
            </div>
            <a href="#" title="Birthday">Birthday</a>
          </div>
          <div className="card card-light-red reveal fade-left">
            <div className="card-image">
              <img src={cat2} alt="Product 5" />
            </div>
            <a href="#" title="Ceremony">Ceremony</a>
          </div>
          <div className="card card-light-grey reveal fade-left">
            <div className="card-image">
              <img src={cat3} alt="Product 5" />
            </div>
            <a href="#" title="Kids">Kids</a>
          </div>
          <div className="card card-light-brown reveal fade-left">
            <div className="card-image">
              <img src={cat4} alt="Product 5" />
            </div>
            <a href="#" title="Wedding">Wedding</a>
          </div>
          <div className="card card-light-brown reveal fade-left">
            <div className="card-image">
              <img src={cat5} alt="Product 5" />
            </div>
            <a href="#" title="Birthday">Birthday</a>
          </div>
          <div className="card card-light-grey reveal fade-left">
            <div className="card-image">
              <img src={cat6} alt="Product 5" />
            </div>
            <a href="#" title="Ceremony">Ceremony</a>
          </div>
          <div className="card card-light-red reveal fade-left">
            <div className="card-image">
              <img src={cat7} alt="Product 5" />
            </div>
            <a href="#" title="Kids">Kids</a>
          </div>
          <div className="card card-red reveal fade-left">
            <div className="card-image">
              <img src={cat8} alt="Product 5" />
            </div>
            <a href="#" title="Wedding">Wedding</a>
          </div>
          <div className="card card-red reveal fade-left">
            <div className="card-image">
              <img src={cat9} alt="Product 5" />
            </div>
            <a href="#" title="Birthday">Birthday</a>
          </div>
          <div className="card card-light-red reveal fade-left">
            <div className="card-image">
              <img src={cat10} alt="Product 5" />
            </div>
            <a href="#" title="Ceremony">Ceremony</a>
          </div>
          <div className="card card-light-grey reveal fade-left">
            <div className="card-image">
              <img src={cat11} alt="Product 5" />
            </div>
            <a href="#" title="Kids">Kids</a>
          </div>
          <div className="card card-light-brown reveal fade-left">
            <div className="card-image">
              <img src={cat12} alt="Product 5" />
            </div>
            <a href="#" title="Wedding">Wedding</a>
          </div>
        </div>
        <div className="text-center pt-5">
          <a
            href="products.html"
            title="View More"
            className="btn btn-primary btn-red"
          >
            <i className="fa fa-plus-circle" aria-hidden="true"></i> View More</a
          >
        </div>
      </section>
  )
}

export default Categories