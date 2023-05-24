import React from 'react'

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
              <img src="frontend/src/assets/img/categories/category-1.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Birthday">Birthday</a>
          </div>
          <div className="card card-light-red reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-2.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Ceremony">Ceremony</a>
          </div>
          <div className="card card-light-grey reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-3.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Kids">Kids</a>
          </div>
          <div className="card card-light-brown reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-4.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Wedding">Wedding</a>
          </div>
          <div className="card card-light-brown reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-5.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Birthday">Birthday</a>
          </div>
          <div className="card card-light-grey reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-6.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Ceremony">Ceremony</a>
          </div>
          <div className="card card-light-red reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-7.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Kids">Kids</a>
          </div>
          <div className="card card-red reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-8.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Wedding">Wedding</a>
          </div>
          <div className="card card-red reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-9.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Birthday">Birthday</a>
          </div>
          <div className="card card-light-red reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-10.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Ceremony">Ceremony</a>
          </div>
          <div className="card card-light-grey reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-11.jpg" alt="Product 5" />
            </div>
            <a href="#" title="Kids">Kids</a>
          </div>
          <div className="card card-light-brown reveal fade-left">
            <div className="card-image">
              <img src="dist/img/categories/category-12.jpg" alt="Product 5" />
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