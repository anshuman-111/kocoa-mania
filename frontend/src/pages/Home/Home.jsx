import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Categories from '../../components/HomeComponents/Categories'
import Contact from '../../components/HomeComponents/Contact'
import About from '../../components/HomeComponents/About'
import useFetch from '../../components/Hooks/useFetch'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const {data, loading, error} = useFetch("/home?populate=*")

  const heroData = { 
    wbte: data?.attributes?.wbte,
    typingeffect: data?.attributes?.typingeffect?.words,
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