import React from 'react';
import '../../css/style.css';
import ProductCard from '../ProductComponents/productCard';
import ShowcaseCard from './ShowcaseCard';
import useFetch from '../Hooks/useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hero = ({HeroData}) => {

  const [showcaseData, setShowcaseData] = useState([]);
  const [scLoading, setScLoading] = useState(false);
  const [scError, setScError] = useState(false);

  // const txtUpdatingSpeed = 55;
  // const blinkAnimDuration = 2400;
  // let currentTextIndex = -1;
  // let wordsArr = HeroData.typingeffect
  // console.log(wordsArr)
  
  // FIX TYPING EFFECT

  // const addLetter = letterIndex => {
  //   if (letterIndex >= wordsArr[currentTextIndex].length) {
  //     blinkTypeCursor();
  //     return;
  //   }
  //   setTimeout(() => {
  //     myText.textContent += wordsArr[currentTextIndex][letterIndex];
  //     addLetter(letterIndex + 1);
  //   }, txtUpdatingSpeed);
  // };
  
  // const removeLetter = letterIndex => {
  //   if (letterIndex < 0) {
  //     updateText();
  //     return;
  //   }
  //   setTimeout(() => {
  //     myText.textContent = wordsArr[currentTextIndex].slice(0, letterIndex);
  //     removeLetter(letterIndex - 1);
  //   }, txtUpdatingSpeed);
  // };
  
  // const blinkTypeCursor = () => {
  //   typeCursor.classList.add('blinking');
  //   setTimeout(() => {
  //     typeCursor.classList.remove('blinking');
  //     removeLetter(wordsArr[currentTextIndex].length);
  //   }, blinkAnimDuration);
  // };
  
  // const updateText = () => {
  //   currentTextIndex++;
  //   if (currentTextIndex === wordsArr.length) {
  //     currentTextIndex = 0;
  //   }
  //   addLetter(0);
  // };
  
  // setTimeout(() => updateText(), 1000);


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

  

  console.log(data)
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
            <Link to="/products">
            <a
              href="products.html"
              className="btn btn-primary btn-white"
              title="Browse Cakes"
            >
              <i className="fab fa-safari"></i>
              Browse Cakes
            </a>
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
          : showcaseData?.map((item) => <ShowcaseCard item={item} key={item.id} />
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