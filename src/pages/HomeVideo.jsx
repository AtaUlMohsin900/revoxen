import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';

export default function HomeVideo() {
  return (
    <>
      <Hero />

      <section className="service-section bg-dark padding">
        <div className="container">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>IT Networking & Electrical Services</h2>
            <h3>Creative Spaces</h3>
            <p>Designed to Inspire</p>
            <p>We design modern, functional, and aesthetic spaces that reflect your personality and vision. <br />From planning to execution, we craft your dream environment with care.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
              <div className="service-card">
                <div className="service-thumb">
                  <img src="/assets/img/service-1.jpg" alt="img" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fa-solid fa-city" />
                  </div>
                  <h3><Link to="/services">Construction renovation</Link></h3>
                  <p>Creative and sustainable architectural solutions tailored to your lifestyle and space.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
              <div className="service-card">
                <div className="service-thumb">
                  <img src="/assets/img/service-2.jpg" alt="img" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fa-solid fa-brush" />
                  </div>
                  <h3><Link to="/services">Electrical Work</Link></h3>
                  <p>Elegant and intelligent electrical solutions that illuminate your space and elevate your lifestyle.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
              <div className="service-card">
                <div className="service-thumb">
                  <img src="/assets/img/service-3.jpg" alt="img" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fa-solid fa-pen-fancy" />
                  </div>
                  <h3><Link to="/services">IT Networking</Link></h3>
                  <p>Seamless integration of technology and design to create efficient, scalable network solutions.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-plus" /></Link>
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
                    <i className="fas fa-check" />
                    <div className="about-list-content">
                      <h3>Construction renovation</h3>
                      <p>From concept planning to execution, we design inspiring spaces that reflect your lifestyle and purpose.</p>
                    </div>
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay="400ms">
                    <i className="fas fa-check" />
                    <div className="about-list-content">
                      <h3>Interior Styling</h3>
                      <p>We craft beautiful interiors — blending textures, lighting, and colors to create timeless living experiences.</p>
                    </div>
                  </li>
                </ul>
                <ul className="about-btn wow fadeInLeft" data-wow-delay="600ms">
                  <li>
                    <Link to="/contact" className="default-btn">Book Consultation <span /></Link>
                    <Link className="whatsapp" to="/contact"><i className="fa-solid fa-phone" /> + 880 1234 567890</Link>
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
                  <img className="img-1" src="/assets/img/about-bg-2.jpg" alt="img" />
                </div>
                <img className="img-2" src="/assets/img/about-bg-3.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 xs-padding">
              <div className="faq-box padding">
                <div className="section-heading mb-30">
                  <h2>Frequently Asked <br />Questions!</h2>
                  <p>We specialize in architecture and Electrical Work services, transforming spaces with creativity, functionality, and precision.</p>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What services do you offer?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        We offer a wide range of architecture and Electrical Work services, including space planning, conceptual design, IT Networking, renovation, custom furniture design, and project supervision.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I get started with a design project?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        You can start by contacting us via our website or phone. We'll schedule a consultation to understand your vision, requirements, and budget, then propose a custom design plan tailored to your needs.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is the timeline for completing a project?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Timelines vary depending on the scale and complexity of the project. A typical interior project takes 4–12 weeks, while architectural projects may take longer. We provide a detailed timeline during the planning phase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 xs-padding">
              <div className="cta-block text-center">
                <div className="cta-block-content">
                  <h2>100%</h2>
                  <h3>Fully Satisfaction <br />Guarantee!</h3>
                  <Link to="/contact" className="default-btn" style={{ color: '#fff' }}>Request a Free Estimate<span /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 xs-padding">
              <div className="faq-bg d-none d-md-block" />
            </div>
          </div>
        </div>
      </section>

      <section className="team-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>Meet Our Expert <br />Networking Team</h2>
            <p>Our team of visionary engineers bring innovative ideas and<br /> precision to every project from concept to completion.</p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-1.jpg" alt="img" />
                  <ul className="team-social">
                    <li><a href="https://www.facebook.com/profile.php?id=61592448639614"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Faizan Zafar <span>CEO</span></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-2.jpg" alt="img" />
                  <ul className="team-social">
                    <li><a href="https://www.facebook.com/profile.php?id=61592448639614"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Olivia Hughes <span>Electrical Worker</span></h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 xs-padding">
              <div className="team-item">
                <div className="team-thumb">
                  <img src="/assets/img/team-3.jpg" alt="img" />
                  <ul className="team-social">
                    <li><a href="https://www.facebook.com/profile.php?id=61592448639614"><i className="fa-brands fa-facebook"></i></a></li>
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
                  <img src="/assets/img/team-4.jpg" alt="img" />
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

      <section className="work-process-section padding">
        <div className="process-border" />
        <div className="container">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>4 Simple Steps to <br />Bring Your Space to Life</h2>
            <p>From concept to completion, we transform your ideas into stunning architectural and interior spaces.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
              <div className="work-pro-item">
                <i className="far fa-calendar-check" />
                <h3>Schedule a Consultation</h3>
                <p>Let’s understand your vision, needs, and preferences in a personalized design session.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
              <div className="work-pro-item">
                <i className="far fa-hand-pointer" />
                <h3>Approve the Concept</h3>
                <p>We share design proposals and mood boards for your review and approval.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
              <div className="work-pro-item">
                <i className="fas fa-ruler-combined" />
                <h3>Design & Build</h3>
                <p>Our team handles everything — detailed design, drawings, and on-site execution.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
              <div className="work-pro-item">
                <i className="far fa-thumbs-up" />
                <h3>Project Handover</h3>
                <p>We deliver a beautiful, functional, and ready-to-use space — just the way you imagined.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section padding bg-dark">
        <div className="features-bg" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="section-heading mb-20">
                <h2>Our Goal Is To Inspire <br />Through Every Space</h2>
                <p>We are a trusted name in architecture and Electrical Work, delivering innovative, functional, and aesthetic spaces. From residential to commercial projects, we offer comprehensive solutions including space planning, IT Networking, construction drawings, interior styling, and turnkey execution.</p>
              </div>
              <div className="row mb-20">
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa-solid fa-mountain-sun" />
                    </div>
                    <div className="feature-content">
                      <h3>Creative Designers</h3>
                      <p>Our team crafts innovative designs that blend aesthetics.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa-solid fa-pencil" />
                    </div>
                    <div className="feature-content">
                      <h3>Timely Project Delivery</h3>
                      <p>We ensure every architecture and interior project.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa-solid fa-rocket" />
                    </div>
                    <div className="feature-content">
                      <h3>Premium Materials</h3>
                      <p>We use high-quality, sustainable materials that enhance.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa-solid fa-door-open" />
                    </div>
                    <div className="feature-content">
                      <h3>Advanced Tools & Technology</h3>
                      <p>Our team leverages the latest design software.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/services" className="default-btn">Book Our Service <span /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="book-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="200ms">
              <div className="section-heading mb-20">
                <h2>Crafting Timeless Spaces <br /> Through Architecture & Design</h2>
                <p>We specialize in creating elegant, functional, and inspiring spaces tailored to your lifestyle. From modern architecture to luxurious interiors, our experienced team ensures every detail reflects your vision.</p>
                <Link to="/contact" className="learn-more">Book an Appointment</Link>
              </div>
            </div>
            <div className="col-lg-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
              <div className="booking-form">
                <div className="form-heading">
                  <h2>Make An Appointment</h2>
                </div>
                <form action="#" method="post" id="ajax_appointment" className="form-horizontal" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group colum-row row">
                    <div className="col-sm-6">
                      <input type="text" id="name" name="name" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" id="email" name="email" className="form-control" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <select className="form-control" id="services" name="services" defaultValue="" required>
                        <option value="" disabled>Choose a Service</option>
                        <option value="architecture">Architecture Design</option>
                        <option value="interior">Electrical Work</option>
                        <option value="renovation">Renovation & Remodeling</option>
                        <option value="landscape">Landscape Design</option>
                        <option value="3d">IT Networking</option>
                        <option value="construction">Construction Planning</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <select className="form-control" id="property_type" name="property_type" defaultValue="" required>
                        <option value="" disabled>Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="office">Office Space</option>
                        <option value="retail">Retail Store</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group colum-row row">
                    <div className="col-sm-6">
                      <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone Number" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" id="project_area" name="project_area" className="form-control" placeholder="Approximate Area (sq ft)" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea id="project_details" name="project_details" cols="30" rows="5" className="form-control address" placeholder="Brief Description of Your Project" />
                    </div>
                  </div>
                  <button id="submit" className="default-btn" type="submit">Book Appointment</button>
                  <div id="form-messages" className="alert" role="alert"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section bg-dark padding">
        <div className="container-fluid">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>Explore Our Architectural & Interior Projects</h2>
            <p>We design elegant, functional, and modern spaces that inspire. <br />See how we transform visions into architectural realities.</p>
          </div>
          <div className="slider project-carousel nav-style carousel-dots">
            <div className="project-item">
              <div className="project-inner">
                <img src="/assets/img/project-1.jpg" alt="img" />
                <h3><Link to="/projects-3-col"><span>Residential</span>Modern Villa Design</Link></h3>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <img src="/assets/img/project-2.jpg" alt="img" />
                <h3><Link to="/projects-3-col"><span>Commercial</span>Office Interior Renovation</Link></h3>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <img src="/assets/img/project-3.jpg" alt="img" />
                <h3><Link to="/projects-3-col"><span>Interior</span>Luxury Living Room Setup</Link></h3>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <img src="/assets/img/project-4.jpg" alt="img" />
                <h3><Link to="/projects-3-col"><span>Architecture</span>Contemporary Home Facade</Link></h3>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <img src="/assets/img/project-5.jpg" alt="img" />
                <h3><Link to="/projects-3-col"><span>Interior</span>Minimalist Kitchen Design</Link></h3>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <img src="/assets/img/project-6.jpg" alt="img" />
                <h3><Link to="/projects-3-col"><span>Commercial</span>Retail Store Interior</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section padding">
        <div className="container">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>What Our Clients Say</h2>
            <p>We take pride in crafting bespoke architecture and interior experiences <br />across the UK with elegance, function, and timeless design.</p>
          </div>
          <div className="slider testimonials-carousel nav-style carousel-dots">
            <div className="testi-item">
              <div className="testi-inner">
                <img src="/assets/img/testi-1.png" alt="thumb" />
                <h3>Oliver Bennett<span>Homeowner</span></h3>
                <ul className="ratings">
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                </ul>
              </div>
              <p>"The team transformed our Victorian townhouse into a light-filled modern home while preserving its heritage charm. We couldn't be more pleased."</p>
            </div>
            <div className="testi-item">
              <div className="testi-inner">
                <img src="/assets/img/testi-2.png" alt="thumb" />
                <h3>Charlotte Hughes<span>Interior</span></h3>
                <ul className="ratings">
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                </ul>
              </div>
              <p>"From the first sketch to final installation, the process was smooth and inspiring. Every detail was thoughtfully curated to reflect our lifestyle."</p>
            </div>
            <div className="testi-item">
              <div className="testi-inner">
                <img src="/assets/img/testi-3.png" alt="thumb" />
                <h3>Henry Whitmore<span>Commercial</span></h3>
                <ul className="ratings">
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                </ul>
              </div>
              <p>"Their architectural expertise gave our office space a complete facelift. It’s now a welcoming environment that reflects our brand identity perfectly."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms">
            <h2>Insights & Trends in <br />Architecture & Interiors</h2>
            <p>Discover innovative ideas, design inspiration, and practical tips from the world of architecture and Electrical Work.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 sm-padding">
              <div className="blog-item">
                <div className="blog-thumb">
                  <img src="/assets/img/post-1.jpg" alt="post" />
                  <span className="category"><Link to="/blog-grid">Interior</Link></span>
                </div>
                <div className="blog-content">
                  <h3><Link to="/blog-grid">Top Interior Trends: Minimalist Spaces with Maximum Impact</Link></h3>
                  <p>Explore how clean lines, neutral palettes, and open layouts are redefining modern interior spaces across homes and offices.</p>
                  <Link to="/blog-grid" className="read-more">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding">
              <div className="blog-item">
                <div className="blog-thumb">
                  <img src="/assets/img/post-2.jpg" alt="post" />
                  <span className="category"><Link to="/blog-grid">Architecture</Link></span>
                </div>
                <div className="blog-content">
                  <h3><Link to="/blog-grid">Sustainable Architecture: Designing for the Future</Link></h3>
                  <p>Learn how architects are blending eco-friendly materials with bold aesthetics to create sustainable living and working spaces.</p>
                  <Link to="/blog-grid" className="read-more">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-padding">
              <div className="blog-item">
                <div className="blog-thumb">
                  <img src="/assets/img/post-3.jpg" alt="post" />
                  <span className="category"><Link to="/blog-grid">Design</Link></span>
                </div>
                <div className="blog-content">
                  <h3><Link to="/blog-grid">Inside Look: Contemporary commercial Buildings that Inspire</Link></h3>
                  <p>Get inspired by stunning residential designs featuring cutting-edge architecture, smart layouts, and artistic interiors.</p>
                  <Link to="/blog-grid" className="read-more">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
