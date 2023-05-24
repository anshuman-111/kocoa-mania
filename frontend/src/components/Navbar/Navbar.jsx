import React from 'react'
import Logo from '../../assets/img/logo.png';
const Navbar = () => {
  return (
    <header className="header">
      
      <div className="container">
        {/* Logo */}
        <a href="index.html" className="logo" title="Kocoa Mania">
          <img src={Logo} alt="kocoamania" loading="lazy" />
        </a>

        {/* Main navigation */}
        <nav className="main-nav nav">
          <ul role="list">
            <li>
              <a href="#home" title="Home" className="scrollTo active">Home</a>
            </li>
            <li>
              <a href="#categories" title="Products" className="scrollTo"
                >Products</a
              >
            </li>
            <li>
              <a href="#about" title="About Us" className="scrollTo">About Us</a>
            </li>
            <li>
              <a href="#contact" title="Contact Us" className="scrollTo"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>

        {/* Hamburger menu */}
        <div className="hamburger">
          <input type="checkbox" id="toggler" />
          <label htmlFor="toggler" className="hamburger">
            <span className="line"></span>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Navbar