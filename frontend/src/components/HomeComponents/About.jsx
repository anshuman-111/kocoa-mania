
import useFetch from '../Hooks/useFetch'

const About = ({AboutData}) => {

  const {data, loading, error } = useFetch('/testimonials?populate=*')

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
              <blockquote className="swiper-slide quote" key={item.id}>
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
                {AboutData.aboutDescription}
              </p>
            </article>
          </div>
        </div>
      </section>
  )
}

export default About