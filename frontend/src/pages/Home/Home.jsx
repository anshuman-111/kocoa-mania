import React, { useEffect, useState } from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Categories from '../../components/HomeComponents/Categories'
import Contact from '../../components/HomeComponents/Contact'
import About from '../../components/HomeComponents/About'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PrivacyPolicy from '../../components/Footer/PrivacyPolicy'
import Loader from '../../components/HomeComponents/Loader'




const Home = ({data}) => {
  
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  })
  const heroData = { 
    wbte: data?.attributes?.wbte,
    wate: data?.attributes?.wate,
    contact: data?.attributes?.phone
  }

  const aboutData = {
    aboutImg: import.meta.env.VITE_STRAPI_UPLOAD_URL + data?.attributes?.aboutImage?.data?.attributes?.url,
    aboutDescription: data?.attributes?.aboutDescription
  }

  const contactData = {
    phone: data?.attributes?.phone.slice(1,),
    email: data?.attributes?.email,
    address: data?.attributes?.address,
    classInfoTitle: data?.attributes?.classInfoTitle,
    classHours: data?.attributes?.classhours,
    classFees: data?.attributes?.classFees,
    openingHours: data?.attributes?.openingHours,
    facebook: data?.attributes?.facebook,
    instagram: data?.attributes?.instagram,

  }
 
  return (
    <>
        {isLoading ? <Loader /> : <></>}
        <Navbar />
        <Hero HeroData={heroData}/>
        <Categories />
        <About AboutData={aboutData} />
        <Contact ContactData={contactData}/>
        <Footer />
        <PrivacyPolicy />
    </>
  )
}

export default Home