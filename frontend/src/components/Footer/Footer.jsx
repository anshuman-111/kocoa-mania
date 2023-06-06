import React from 'react'
import fssaiLogo from '../../assets/img/fssai_logo.png'
import fssaiCert from '../../assets/img/fssai_cert.pdf'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer pt-3 pb-3">
    <div className="container">
      {/* <!-- Footer logo --> */}
      <div className="footer-logo">
        <Link to={'/'} className="logo" title="Kocoa Mania">
          <img src={logo} alt="kocoamania" loading="lazy" />
        </Link>
      </div>
      <div className="text-center">
        <div className="footer-nav pb-2">
          <a href="#home" title="Home" className="scrollTo">Home</a>
          <a href="#categories" title="Products" className="scrollTo">Products</a>
          <a href="#about" title="About Us" className="scrollTo">About Us</a>
          <a href="#contact" title="Contact Us" className="scrollTo"
            >Contact Us</a
          >
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; <span className="year"></span> All rights reserved. | 
            <span href="#" className="popup-show"
              > Privacy policy</span
            >
          </p>
        </div>
      </div>
      {/* <!-- FSSAI logo --> */}
      <div className="footer-fssai-logo">
        <a
          href={fssaiCert}
          title="Kocoa Mania FSSAI Certificate"
          target="_blank"
        >
          <img src={fssaiLogo} alt="FSSAI Certificate" />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer