import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import Categories from '../../components/HomeComponents/Categories'
import Contact from '../../components/HomeComponents/Contact'
import About from '../../components/HomeComponents/About'
import useFetch from '../../components/Hooks/useFetch'
const Home = () => {
  const {data, loading, error} = useFetch("/home")
  console.log("nisto")
  return (
    <>
        <Hero />
        <Categories />
        <About />
        <Contact />
    </>
  )
}

export default Home