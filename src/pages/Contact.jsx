export default function Contact() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>Contact Us</h2>
            <p>Get in touch for appointments, estimates, and expert architecture or IT networking support.</p>
          </div>
        </div>
      </section>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="100%" height="350" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1754613743363!5m2!1sen!2s" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Location map"></iframe>
        </div>
      </div>

      <section className="contact-section bg-grey padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 sm-padding">
              <div className="contact-info">
                <h2>Contact Our Team &amp; <br />Start Your Project Today!</h2>
                <p>Architecture and Electrical Work studio. Founded in 1991, we take a collaborative approach to design—valuing creativity, function, and the unique vision of every client.</p>
                <h3>42 Kingsway, Suite 5A <br />London WC2B 6EX, United Kingdom</h3>
                <h4>
                  <span>Email:</span> hello@yoursite.com <br />
                  <span>Phone:</span> +44 (0) 20 7946 0000 <br />
                  <span>Fax:</span> +44 (0) 20 7946 0001
                </h4>
              </div>
            </div>
            <div className="col-lg-6 sm-padding">
              <div className="contact-form">
                <form name="contact-form" id="contact-form" action="contact-form.php" method="POST">
                  <div className="form-group colum-row row">
                    <div className="col-sm-6">
                      <input type="text" id="name" name="name" className="form-control" placeholder="Name" required="required" data-error="Your Name is Required" />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" id="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Please Enter Valid Email" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea id="message" name="message" cols="30" rows="5" className="form-control message" placeholder="Message" required data-error="Please, Leave us a message" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <button className="default-btn" type="submit" name="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
