import React, { useEffect } from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Categories from '../../components/HomeComponents/Categories'
import Contact from '../../components/HomeComponents/Contact'
import About from '../../components/HomeComponents/About'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import loadScript from '../../components/Hooks/loadScript'
const Home = ({data}) => {
  useEffect(() => {
   
    loadScript("https://kit.fontawesome.com/ec5c855e8d.js");
    loadScript('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js');
    loadScript('/src/js/main.js');
    loadScript('/src/js/index.js');
}, [])
 

  const heroData = { 
    wbte: data?.attributes?.wbte,
    wate: data?.attributes?.wate,
  }

  const aboutData = {
    aboutImg: import.meta.env.VITE_STRAPI_UPLOAD_URL + data?.attributes?.aboutImage?.data?.attributes?.url,
    aboutDescription: data?.attributes?.aboutDescription
  }

  const contactData = {
    phone: data?.attributes?.phone,
    email: data?.attributes?.email,
    address: data?.attributes?.address,
    classInfoTitle: data?.attributes?.classInfoTitle,
    classHours: data?.attributes?.classhours,
    classFees: data?.attributes?.classFees,
    openingHours: data?.attributes?.openingHours
  }
 
  return (
    <>
        <Navbar />
        <Hero HeroData={heroData}/>
        <Categories />
        <About AboutData={aboutData} />
        <Contact ContactData={contactData}/>
        <Footer />
    </>
  )
}

export default Home