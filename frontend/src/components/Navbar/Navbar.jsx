
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="header">
      <div className="mobile-nav nav">
      <a href="#home" title="Home" className="scrollTo">Home</a>
      <a href="#categories" title="Products" className="scrollTo">Products</a>
      <a href="#about" title="About Us" className="scrollTo">About Us</a>
      <a href="#contact" title="Contact Us" className="scrollTo">Contact Us</a>
    </div>
      <div className="container">
        {/* Logo */}
        <Link to={'/'} className="logo" title="Kocoa Mania">
          <img src={Logo} alt="kocoamania" loading="lazy" />
        </Link>

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