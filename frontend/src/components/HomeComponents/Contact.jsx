import React from 'react'
import useFetch from '../Hooks/useFetch'
const Contact = () => {

  return (
      <section className="section contact pt-7 pb-7" id="contact">
        <h2 className="heading heading-secondary text-red">Contact Us</h2>
        <div className="container reveal fade-bottom">
          <div className="top-row">
            {/* <!-- Course info --> */}
            <article className="contact-course-info text-center">
              <p className="pb-4">
                Join us and have fun while learning how to make the best cake
                ever.
              </p>
              <h4 className="heading heading-tertiary text-red">className Schedule:</h4>
              <p className="pb-4">Mon - Fri</p>
              <h4 className="heading heading-tertiary text-red">className Fees:</h4>
              <p className="pb-1">Rs. 1000 for entire course.</p>
              <p>Rs. 200 for one className.</p>
            </article>
            {/* <!-- Contact info --> */}
            <div className="contact-info text-center">
              <div>
                <h4 className="heading heading-tertiary text-red">Phone</h4>
                <a href="tel:+919876543210" title="Telephone">+91 9876543210</a>
              </div>

              <div>
                <h4 className="heading heading-tertiary text-red">Email</h4>
                <a href="mailto:kocoamania@gmail.com" title="Email Address"
                  >kocoamania@gmail.com</a
                >
              </div>

              <address>
                <h4 className="heading heading-tertiary text-red">Address</h4>
                <p>3 Fitzwilliam St, Paramatta NSW</p>
              </address>
{/*      <!-- Social icons --> */}
              <div className="contact-info--social-icons">
                <a href="#" title="Facebook" className="btn btn-secondary">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" title="Instagram" className="btn btn-secondary">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  title="What'sApp"
                  className="btn btn-secondary"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Opening hours --> */}
          <div className="text-center pt-7"> 
            <h4 className="heading heading-tertiary text-red">Opening Hours:</h4>
            <p className="pb-1">Sunday - Thursday 11:00 AM to 8:00 PM</p>
            <p>Friday & Saturday 11:00 AM to 8:30 PM</p>
          </div>
        </div>
      </section>
  )
}

export default Contact