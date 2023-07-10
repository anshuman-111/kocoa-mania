
import '../../css/style.css';
import ProductCard from '../ProductComponents/ProductCard';
import ShowcaseCard from './ShowcaseCard';
import useFetch from '../Hooks/useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Hero = ({HeroData}) => {

  const [showcaseData, setShowcaseData] = useState([]);
  const [scLoading, setScLoading] = useState(false);
  const [scError, setScError] = useState(false);

  // FIX PHONE NUMBER
  const [phone, setPhone] = useState('')
  useEffect(()=>{
    if(typeof(HeroData.contact)==='undefined'){
      setPhone('919163826382')
    }else{
      setPhone(HeroData.contact.slice(1,))
    }
   
  },[])
  // API CALL FOR SHOWCASE IMAGES
  useEffect(() => {
    const fetchData = async () => {
      try {
        setScLoading(true);
        const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +  `/products?populate=*&[filters][isFeatured][$eq]=true`, {
          headers : {
            Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN
          }
        });
        setShowcaseData(res.data.data);
      } catch (err) {
  
        setScError(true);
      }
      setScLoading(false);
    };
    fetchData();
  }, []);
  
  // API CALL FOR PRODUCTS ON PAGE

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
                          {HeroData.wbte} <span className="text-larger"></span>
                          <span className="cursor">|</span>
                          <br />
                          {HeroData.wate}
                      </h1>
                      <a
                          href={`https://wa.me/${phone}/?text=Hello!. Could you please provide me with information on the options, flavors, pounds, and prices available.`}
                          className="btn btn-primary btn-red"
                          title="Order Now"
                          target="_blank"
                      >
                          <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                          ></i>
                          Enquire Now
                      </a>
                      <Link
                          to="/products"
                          className="btn btn-primary btn-white"
                          title="Browse Cakes"
                      >
                          <i className="fab fa-safari"></i>
                          Browse Cakes
                      </Link>
                  </div>

                  {/* <!-- Showcase hero --> */}
                  <div className="showcase-hero">
                      <div className="swiper showcase-hero--slider">
                          <div className="swiper-wrapper">
                              {scError
                                  ? "Oops! Something went wrong"
                                  : scLoading
                                  ? "Loading ..."
                                  : showcaseData?.map((item) => (
                                        <ShowcaseCard
                                            item={item}
                                            key={item.id}
                                        />
                                    ))}
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
                              : data?.map((item) => (
                                    <ProductCard
                                        item={item}
                                        phone={phone}
                                        key={item.id}
                                    />
                                ))}
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
  );
}

export default Hero