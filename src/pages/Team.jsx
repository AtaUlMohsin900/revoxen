import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>Our Team</h2>
            <p>Meet the experts who deliver architecture, electrical work, and IT networking services.</p>
          </div>
        </div>
      </section>

      <section className="team-section bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-1.jpg" alt="Lead Architect" />
                  <ul className="team-social">
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3> <span>Lead Architect</span></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-2.jpg" alt="Electrical Expert" />
                  <ul className="team-social">
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Olivia Hughes <span>Electrical worker</span></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-3.jpg" alt="Project Manager" />
                  <ul className="team-social">
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>James Whitmore <span>Project Manager</span></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-4.jpg" alt="3D Visualizer" />
                  <ul className="team-social">
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Sara Doe <span>3D Visualizer</span></h3>
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
