import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header header-one${isSticky ? ' sticky-header sticky-fixed-top' : ''}`}>
      <div className="primary-header-one primary-header">
        <div className="container">
          <div className="primary-header-inner">
            <div className="header-logo">
              <Link to="/">
                <img src="/assets/img/logo-dark.png" alt="Logo" />
              </Link>
            </div>
            <div className="header-menu-wrap">
              <ul className="dl-menu">
                <li>
                  <Link to="/">Home</Link>
                  <ul>
                    <li><Link to="/">Home Slider</Link></li>
                    <li><Link to="/home-video">Home Video</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">Pages</Link>
                  <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/pricing">Pricing Plans</Link></li>
                    <li><Link to="/faq">Help & Faq's</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/projects-3-col">Projects</Link>
                  <ul>
                    <li><Link to="/projects-3-col">Project 3 Col</Link></li>
                    <li><Link to="/projects-4-col">Project 4 Col</Link></li>
                    <li><Link to="/project-details">Project Details</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog-grid">Blogs</Link>
                  <ul>
                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                    <li><Link to="/blog-single">Blog Single</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="header-right">
              <div className="search-icon dl-search-icon"><i className="ti-search" /></div>
              <Link className="header-btn" to="/contact">Book An Appointment<span></span></Link>
              <div className="mobile-menu-icon">
                <div className="burger-menu">
                  <div className="line-menu line-half first-line"></div>
                  <div className="line-menu"></div>
                  <div className="line-menu line-half last-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
