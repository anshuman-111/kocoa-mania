import React from 'react'

import useFetch from '../Hooks/useFetch'
const About = ({AboutData}) => {

  // Class Fees - 3 types 
  // Heading needs to editable -> add model

  // Business Number - +91 9163826382
  // Add image sharing option for Whatsapp Link
  // Image pre-load with Whatsapp Link

  

  const {data, loading, error } = useFetch('/testimonials?populate=*')
  console.log(data)
  return (
   // <!-- About Us -->
      <section className="section about" id="about">
   {/*    <!-- Testimonials --> */}
        <div className="about-testimonials text-center pt-7 pb-7" id="about">
          <h2 className="heading heading-secondary text-red">
            Customer Testimonials
          </h2>
          <div className="container reveal fade-right">
            <div className="swiper testimonials">
              <div className="swiper-wrapper">
              {error
          ? "Oops! Something went wrong"
          : loading
          ? "Loading ..."
          : data?.map((item) =>
              <blockquote className="swiper-slide quote">
              <p>
                {item?.attributes?.content} <br />
                <span className="name">{item?.attributes?.author}</span>
              </p>
              </blockquote>
          )}
                
                
              </div>
            </div>
          </div>
        </div>

      {/* <!-- About founder --> */}
        <div className="about-founder pt-7 pb-7">
          <h2 className="heading heading-secondary text-white">
            About the Founder
          </h2>
          <div className="container reveal fade-left">
            <div className="about-founder--image">
              <img src={AboutData.aboutImg} alt="Member 1" loading="lazy" />
            </div>
            <article className="about-founder--text">
              <div className="about-founder--arrow"></div>
              <p>
                {/* {AboutData.aboutDescription} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime fugiat quod cupiditate perferendis error eveniet ullam facere consequatur maiores nemo amet quas, facilis deserunt. Saepe officia nihil sunt cum, sed incidunt illo sint quod non officiis. Accusantium similique soluta error mollitia tempora iste magnam aliquam quidem autem unde reprehenderit molestias in harum asperiores ducimus totam reiciendis consequuntur ad commodi eos et, minus modi eveniet! Culpa assumenda facilis voluptatibus modi error corporis veritatis adipisci quo temporibus dolorem quos aspernatur ut nihil debitis consequatur, ducimus fuga quam nulla, non amet? Fuga vitae totam accusantium aperiam dolores odit, rerum quasi quod ut.
              </p>
            </article>
          </div>
        </div>
      </section>
  )
}

export default About