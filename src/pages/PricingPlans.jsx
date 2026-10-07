import { Link } from 'react-router-dom';

export default function PricingPlans() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>Flexible Architecture Pricing Plans</h2>
            <p>Choose from our transparent and tailored pricing packages designed to suit residential, commercial, and bespoke architectural needs.</p>
          </div>
        </div>
      </section>

      <section className="pricing-section padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="pricing-item">
                <div className="pricing-head"><h2><span>Starter Plan</span>$149.00</h2></div>
                <ul className="pricing-list">
                  <li><i className="fas fa-check"></i>Initial Site Analysis</li>
                  <li><i className="fas fa-check"></i>Basic Floor Plan Design</li>
                  <li><i className="fas fa-check"></i>Concept Sketches</li>
                  <li><i className="fas fa-check"></i>1 Revision Round</li>
                  <li><i className="fas fa-check"></i>Email Support</li>
                </ul>
                <div className="pricing-footer"><a href="#" className="default-btn">Select Plan <span></span></a></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="pricing-item">
                <div className="pricing-head"><h2><span>Professional Plan</span>$299.00</h2></div>
                <ul className="pricing-list">
                  <li><i className="fas fa-check"></i>Full Architectural Drawings</li>
                  <li><i className="fas fa-check"></i>3D Rendered Views</li>
                  <li><i className="fas fa-check"></i>Material Suggestions</li>
                  <li><i className="fas fa-check"></i>2 Revision Rounds</li>
                  <li><i className="fas fa-check"></i>Email & Phone Support</li>
                </ul>
                <div className="pricing-footer"><a href="#" className="default-btn">Select Plan <span></span></a></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 sm-padding">
              <div className="pricing-item">
                <div className="pricing-head"><h2><span>Premium Plan</span>$499.00</h2></div>
                <ul className="pricing-list">
                  <li><i className="fas fa-check"></i>Complete Architecture Package</li>
                  <li><i className="fas fa-check"></i>Electrical Work Concepts</li>
                  <li><i className="fas fa-check"></i>Detailed IT Networking</li>
                  <li><i className="fas fa-check"></i>Unlimited Revisions</li>
                  <li><i className="fas fa-check"></i>Dedicated Project Manager</li>
                </ul>
                <div className="pricing-footer"><a href="#" className="default-btn">Select Plan <span></span></a></div>
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
