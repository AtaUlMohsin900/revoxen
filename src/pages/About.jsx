import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>About Us</h2>
            <p>At Revoxen Studio, we specialize in creating bespoke architectural and Electrical Work solutions for modern homes and commercial spaces.</p>
          </div>
        </div>
      </section>

      <section className="service-section bg-dark padding">
        <div className="container">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>IT Networking & Electrical Services</h2>
            <h3>Creative Spaces</h3>
            <p>Designed to Inspire</p>
            <p>We design modern, functional, and aesthetic spaces that reflect your personality and vision.<br />From planning to execution, we craft your dream environment with care.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
              <div className="service-card">
                <div className="service-thumb">
                  <img src="/assets/img/service-1.jpg" alt="Construction renovation" />
                </div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-city"></i></div>
                  <h3><Link to="/services">Construction renovation</Link></h3>
                  <p>Creative and sustainable architectural solutions tailored to your lifestyle and space.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
              <div className="service-card">
                <div className="service-thumb">
                  <img src="/assets/img/service-2.jpg" alt="Electrical Work" />
                </div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-brush"></i></div>
                  <h3><Link to="/services">Electrical Work</Link></h3>
                  <p>Elegant and intelligent electrical solutions that illuminate your space and elevate your lifestyle.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
              <div className="service-card">
                <div className="service-thumb">
                  <img src="/assets/img/service-3.jpg" alt="IT Networking" />
                </div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-pen-fancy"></i></div>
                  <h3><Link to="/services">IT Networking</Link></h3>
                  <p>High-speed, reliable networking solutions that power your operations and keep you seamlessly connected.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sm-padding">
              <div className="about-content">
                <div className="section-heading wow fadeInLeft" data-wow-delay="0">
                  <h2>Designing Spaces That Define Elegance</h2>
                  <p>At Revoxen Studio, we specialize in creating bespoke architectural and Electrical Work solutions for modern homes and commercial spaces. With a passion for form, function, and innovation — we turn your vision into sophisticated reality.</p>
                </div>
                <ul className="about-list">
                  <li className="wow fadeInLeft" data-wow-delay="200ms">
                    <i className="fas fa-check"></i>
                    <div className="about-list-content">
                      <h3>Construction renovation</h3>
                      <p>From concept planning to execution, we develop inspiring spaces that reflect your lifestyle and purpose.</p>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay="400ms">
                    <i className="fas fa-check"></i>
                    <div className="about-list-content">
                      <h3>Interior Styling</h3>
                      <p>We craft beautiful interiors — blending textures, lighting, and colors to create timeless living experiences.</p>
                    </div>
                  </li>
                </ul>
                <ul className="about-btn wow fadeInLeft" data-wow-delay="600ms">
                  <li>
                    <Link to="/contact" className="default-btn">Book Consultation <span></span></Link>
                    <Link className="whatsapp" to="/contact"><i className="fa-solid fa-phone"></i> + 880 1234 567890</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 sm-padding">
              <div className="about-bg-wrap">
                <div className="exp-box">
                  <h3>15+ <span>Years Of <br />Experience</span></h3>
                </div>
                <div className="front">
                  <img className="img-1" src="/assets/img/about-bg-2.jpg" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="wow fadeInUp" data-wow-delay="300ms">We Design Spaces That Inspire <br />Function, Beauty & Innovation</h2>
            <p className="wow fadeInUp" data-wow-delay="400ms">Discover bespoke architecture and Electrical Work solutions crafted to elevate your lifestyle and workspace aesthetics.</p>
            <Link to="/contact" className="default-btn wow fadeInUp" data-wow-delay="500ms">Make An Appointment<span></span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
