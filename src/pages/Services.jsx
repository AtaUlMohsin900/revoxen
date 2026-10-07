import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>Our Services</h2>
            <p>Discover our architecture, electrical work, and IT networking services built for modern living.</p>
          </div>
        </div>
      </section>

      <section className="service-section bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
              <div className="service-card">
                <div className="service-thumb"><img src="/assets/img/service-1.jpg" alt="Construction renovation" /></div>
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
                <div className="service-thumb"><img src="/assets/img/service-2.jpg" alt="Electrical Work" /></div>
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
                <div className="service-thumb"><img src="/assets/img/service-3.jpg" alt="IT Networking" /></div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-pen-fancy"></i></div>
                  <h3><Link to="/services">IT Networking</Link></h3>
                  <p>Seamless integration of technology and design to create efficient and scalable network solutions.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="600ms">
              <div className="service-card">
                <div className="service-thumb"><img src="/assets/img/service-4.jpg" alt="Landscape Design" /></div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-tree"></i></div>
                  <h3><Link to="/services">Landscape Design</Link></h3>
                  <p>Creating harmonious outdoor spaces that blend nature with architecture beautifully.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="700ms">
              <div className="service-card">
                <div className="service-thumb"><img src="/assets/img/service-5.jpg" alt="Renovation and Restoration" /></div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-hammer"></i></div>
                  <h3><Link to="/services">Renovation & Restoration</Link></h3>
                  <p>Expert upgrades and restorations that breathe new life into existing structures.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="800ms">
              <div className="service-card">
                <div className="service-thumb"><img src="/assets/img/service-6.jpg" alt="Project Management" /></div>
                <div className="service-content">
                  <div className="service-icon"><i className="fa-solid fa-diagram-project"></i></div>
                  <h3><Link to="/services">Project Management</Link></h3>
                  <p>End-to-end supervision and coordination ensuring timely and on-budget project delivery.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus"></i></Link>
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
