import React from 'react'
import useFetch from '../Hooks/useFetch'
const Contact = ({ContactData}) => {
  // Add models for all class types
  // Add Copy Link button in ProductImage.jsx
  return (

    <section className="section contact pt-7 pb-7" id="contact">
    <h2 className="heading heading-secondary text-red">Contact Us</h2>
    <div className="container reveal fade-bottom">
      <div className="top-row">
        {/* <!-- Course info --> */}
        <article className="contact-course-info text-center">
          <h3 className="heading heading-tertiary text-red pb-2">
            Baking is fun with Kocoa Mania
          </h3>
          <h4 className="heading heading-tertiary text-red">Class Type A:</h4>
          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem, voluptate esse repellendus nihil incidunt atque!
          </p>
          <h4 className="heading heading-tertiary text-red">Class Type B:</h4>
          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quas sequi ut numquam, suscipit laboriosam?
          </p>
          <h4 className="heading heading-tertiary text-red">Class Type C:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quas sequi ut numquam, suscipit laboriosam?
          </p>
        </article>
        {/* <!-- Contact info --> */}
        <div className="contact-info text-center">
          <div>
            <h4 className="heading heading-tertiary text-red">Phone</h4>
            <a href={`tel:+${ContactData.phone}`} title="Telephone">+{ContactData.phone}</a>
          </div>

          <div>
            <h4 className="heading heading-tertiary text-red">Email</h4>
            <a href={`mailto:${ContactData.email}`} title="Email Address"
              >{ContactData.email}</a
            >
          </div>

          {/* <!-- Social icons --> */}
          <div className="contact-info--social-icons">
            <a href={ContactData.facebook} title="Facebook" className="btn btn-secondary">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href={ContactData.instagram} title="Instagram" className="btn btn-secondary">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href={`https://wa.me/${ContactData.phone}`}
              title="What'sApp"
              className="btn btn-secondary"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <h3 className="heading heading-tertiary text-red">
          Delivery available 24/7 across kolkata
        </h3>
      </div>
    </div>
</section>
  )
}

export default Contact