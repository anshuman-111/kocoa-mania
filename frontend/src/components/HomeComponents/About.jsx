import React from 'react'
import imgAbout from '../../assets/img/team/1.jpeg'
const About = () => {
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
                <blockquote className="swiper-slide quote">
                  <p>
                    Ordered a poker chip shaped cake. It was amazing! <br />
                    <span className="name">Rohan Jain</span>
                  </p>
                </blockquote>
                <blockquote className="swiper-slide quote">
                  <p>
                    I got my birthday cake from here. It was really delicious
                    <br />
                    <span className="name">Sarah Williams</span>
                  </p>
                </blockquote>
                <blockquote className="swiper-slide quote">
                  <p>
                    I tried their Cup Cakes. It was tasty <br />
                    <span className="name">Rohan Jain</span>
                  </p>
                </blockquote>
                <blockquote className="swiper-slide quote">
                  <p>
                    Ordered a poker chip shaped cake. It was amazing! <br />
                    <span className="name">Rohan Jain</span>
                  </p>
                </blockquote>
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
              <img src={imgAbout} alt="Member 1" loading="lazy" />
            </div>
            <article className="about-founder--text">
              <div className="about-founder--arrow"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, deserunt. Ipsum asperiores a cumque molestias quis,
                nulla expedita illum repellat perspiciatis beatae! Sit, hic! Vel
                quis expedita dolore aliquam saepe inventore sit optio,
                consectetur officiis assumenda soluta odio omnis error
                reiciendis excepturi nostrum possimus, deleniti doloremque totam
                eveniet modi atque fuga libero ab! Corrupti, aut. Obcaecati,
                sequi facere soluta consectetur nulla dolorum autem magni nemo.
                Numquam autem beatae non officiis, nobis corporis hic tempora
                enim quae ipsum explicabo, excepturi, totam ad accusamus
                dolorum. Dicta sed, facere voluptatum,<br />

                doloribus recusandae ipsam inventore dignissimos illo magni
                animi consectetur nesciunt veniam rem explicabo aspernatur
                quidem amet placeat veritatis assumenda pariatur. Deleniti ipsam
                id eligendi accusantium consectetur quibusdam quia, sunt maxime
                blanditiis ipsa culpa fugit quis iste minus sequi reprehenderit
                quam corporis consequatur similique. Quibusdam consequuntur illo
                totam repellendus neque officia suscipit. Fuga non asperiores
                nemo deserunt esse aperiam<br />
                fugit eos, sequi magni soluta officia neque rem enim maiores.
                Provident sit sed facere sapiente, tempore ratione
                exercitationem minima ex, quae delectus impedit iure fugiat
                quisquam. Aut, hic? Suscipit odio ipsum natus laborum architecto
                cumque esse praesentium voluptate maxime repudiandae, eum
                nostrum magni! Eos fugiat tempore consectetur accusamus a
                voluptas iure in distinctio veritatis laborum!
              </p>
            </article>
          </div>
        </div>
      </section>
  )
}

export default About