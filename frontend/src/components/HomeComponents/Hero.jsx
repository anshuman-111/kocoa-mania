import React from 'react';
import '../../css/style.css';
import prod1 from '../../assets/img/products/product-1.jpeg';
import prod2 from '../../assets/img/products/product-2.jpg';
import prod3 from '../../assets/img/products/product-3.jpg';
import prod4 from '../../assets/img/products/product-4.jpg';
import ProductCard from '../ProductComponents/productCard';
import ShowcaseCard from './ShowcaseCard';
import useFetch from '../Hooks/useFetch';

const Hero = ({HeroData}) => {

  const { showcase, scLoading, scError } = 
    useFetch(`/products?populate=*&[filters][isFeatured][$eq]=true`)
  
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][isNew][$eq]=true`
  );



  return (
    // <!-- Home -->
    <section className="section home" id="home">
      {/* <!-- Showcase --> */}

      <div className="showcase">
        <div className="container">
          {/* <!-- showcase title --> */}
          <div className="showcase-title text-center">
            <h1 className="heading heading-primary text-white">
              {HeroData.wbte} <span className="text-larger"></span
              ><span className="cursor">|</span>,<br />
              {HeroData.wate}
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
              {scError
          ? console.log("Something went wrong!")
          : scLoading
          ? console.log("loading")
          : showcase?.map((item) => <ShowcaseCard item={item} key={item.id} />
          )}
                
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
            {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <ProductCard item={item} key={item.id} />)}
              

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