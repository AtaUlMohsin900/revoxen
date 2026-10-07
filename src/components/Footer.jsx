import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section bg-dark">
      <div className="container">
        <div className="row padding">
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="footer-item">
              <Link className="logo" to="/">
                <img src="/assets/img/logo-dark.png" alt="logo" />
              </Link>
              <p>We design beautiful, functional spaces that inspire and elevate everyday living experiences.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="footer-item">
              <h3>Office Location</h3>
              <p>Suite 12, 3rd Floor, 962 Fifth Avenue, New York, NY 10022</p>
              <p>office@yoursite.com <br />(+1) 212 345 6789</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="footer-item">
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9am - 6pm <br />Sat: 10am - 3pm</p>
              <ul className="footer-social">
                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="footer-item">
              <h3>Subscribe to Updates</h3>
              <form action="#" className="subscribe-form">
                <input type="email" name="email" className="form-input" placeholder="Enter your email..." />
                <button type="submit" className="submit-btn"><i className="far fa-envelope"></i></button>
              </form>
              <p>Join our mailing list for design inspiration and project showcases.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="copyright">Copyrights © Revoxen, Designed By <a href="https://themeforest.net/user/designsninja/portfolio" target="_blank" rel="noreferrer">DesignsNinja</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
