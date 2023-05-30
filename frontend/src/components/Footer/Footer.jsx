import React from 'react'

const Footer = () => {
  return (
    <footer class="footer pt-3 pb-3">
    <div class="container">
      {/* <!-- Footer logo --> */}
      <div class="footer-logo">
        <a href="index.html" class="logo" title="Kocoa Mania">
          <img src="dist/img/logo.png" alt="kocoamania" loading="lazy" />
        </a>
      </div>
      <div class="text-center">
        <div class="footer-nav pb-2">
          <a href="#home" title="Home" class="scrollTo">Home</a>
          <a href="#categories" title="Products" class="scrollTo">Products</a>
          <a href="#about" title="About Us" class="scrollTo">About Us</a>
          <a href="#contact" title="Contact Us" class="scrollTo"
            >Contact Us</a
          >
        </div>
        <div class="copyright">
          <p>
            Copyright &copy; <span class="year"></span> All rights reserved. |
            <a href="#" class="popup-show" title="Privacy policy"
              >Privacy policy</a
            >
          </p>
        </div>
      </div>
      {/* <!-- FSSAI logo --> */}
      <div class="footer-fssai-logo">
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