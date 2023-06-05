import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'

const Footer = () => {
  return (
    <footer className="footer pt-3 pb-3">
    <div className="container">
      {/* <!-- Footer logo --> */}
      <div className="footer-logo">
        <a href="index.html" className="logo" title="Kocoa Mania">
          <img src="dist/img/logo.png" alt="kocoamania" loading="lazy" />
        </a>
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
          href="certificate/REG-CERTIFICATE.pdf"
          title="Kocoa Mania FSSAI Certificate"
          target="_blank"
        >
          <img src="dist/img/logo-fssai.png" alt="FSSAI Certificate" />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer