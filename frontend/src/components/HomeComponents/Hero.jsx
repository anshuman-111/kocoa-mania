import React from 'react'
import '../../css/style.css'
import prod1 from '../../assets/img/products/product-1.jpeg'
import prod2 from '../../assets/img/products/product-2.jpg'
const Hero = () => {
  return (
    // <!-- Home -->
    <section className="section home" id="home">
      {/* <!-- Showcase --> */}
     
      <div className="showcase">
        <div className="container">
          {/* <!-- showcase title --> */}
          <div className="showcase-title text-center">
            <h1 className="heading heading-primary text-white">
              Creating <span className="text-larger"></span
              ><span className="cursor">|</span>,<br />
              One Slice at a Time
            </h1>
            <a
              href="https://wa.me/919748217878/?text=Hello! I'm inquiring about your cakes. Could you please provide me with information on the flavors, sizes, and prices available?"
              className="btn btn-primary btn-red"
              title="Order Now"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Enquire Now
            </a>
            <a
              href="products.html"
              className="btn btn-primary btn-white"
              title="Browse Cakes"
            >
              <i className="fab fa-safari"></i>
              Browse Cakes
            </a>
          </div>

          {/* <!-- Showcase hero --> */}
          <div className="showcase-hero">
            <div className="swiper showcase-hero--slider">
              <div className="swiper-wrapper">
                <figure className="swiper-slide">
                  <img
                    src={prod1}
                    alt="Product 1"
                    loading="lazy"
                  />
                </figure>
                <figure className="swiper-slide">
                  <img
                    src={prod2}
                    alt="Product 2"
                    loading="lazy"
                  />
                </figure>
                <figure className="swiper-slide">
                  <img
                    src="dist/img/products/product-3.jpg"
                    alt="Product 3"
                    loading="lazy"
                  />
                </figure>
                <figure className="swiper-slide">
                  <img
                    src="dist/img/products/product-4.jpg"
                    alt="Product 4"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div className="btn-swipe swiper-button-next">
                <i className="fas fa-chevron-circle-right"></i>
              </div>
              <div className="btn-swipe swiper-button-prev">
                <i className="fas fa-chevron-circle-left"></i>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product carousel */}
      <div className="products products-carousel pt-7 pb-7">
        <div className="container">
          <div className="swiper carousel">
            <div className="swiper-wrapper">
              <figure className="swiper-slide card">
                <div className="card-image">
                  <img
                    src="dist/img/products/product-3.jpg"
                    alt="Product 3"
                    loading="lazy"
                  />
                </div>
                <figcaption className="card-details">
                  <div className="card-details--info">
                    <h3>Taj Mahal Cake</h3>
                    <p>White chocolate and...</p>
                  </div>
                  <div className="card-details--button">
                    <a href="https://wa.me/919876543210/?text=Hello! I'm inquiring about your cakes. Could you please provide me with information on the flavors, sizes, and prices available? " title="What'sApp">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    <a href="whatsapp://send?text=" data-acttion='share/whatsapp/share' title="Share">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="btn-swipe swiper-button-next">
              <i className="fas fa-chevron-circle-right"></i>
            </div>
            <div className="btn-swipe swiper-button-prev">
              <i className="fas fa-chevron-circle-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Hero