import { Link } from 'react-router-dom';

export default function Projects3Col() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>Projects 3 Column</h2>
            <p>We design elegant, functional, and modern spaces that inspire. <br />See how we transform visions into architectural realities.</p>
          </div>
        </div>
      </section>

      <section className="project-section bg-grey padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 padding-15 project-item">
              <div className="project-inner">
                <img src="/assets/img/project-1.jpg" alt="Modern Villa Design" />
                <h3><Link to="/projects-4-col"><span>Architecture</span>Modern Villa Design</Link></h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15 project-item">
              <div className="project-inner">
                <img src="/assets/img/project-2.jpg" alt="Luxury Living Room" />
                <h3><Link to="/projects-4-col"><span>Interior</span>Luxury Living Room Setup</Link></h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15 project-item">
              <div className="project-inner">
                <img src="/assets/img/project-3.jpg" alt="Commercial Building" />
                <h3><Link to="/projects-4-col"><span>Architecture</span>Commercial Building Facade</Link></h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15 project-item">
              <div className="project-inner">
                <img src="/assets/img/project-4.jpg" alt="Scandinavian Kitchen" />
                <h3><Link to="/projects-4-col"><span>Interior</span>Scandinavian Kitchen Design</Link></h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15 project-item">
              <div className="project-inner">
                <img src="/assets/img/project-5.jpg" alt="3D Modern Office" />
                <h3><Link to="/projects-4-col"><span>3D Visual</span>Modern Office 3D Render</Link></h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 padding-15 project-item">
              <div className="project-inner">
                <img src="/assets/img/project-6.jpg" alt="Minimalist Bedroom" />
                <h3><Link to="/projects-4-col"><span>Interior</span>Minimalist Bedroom Concept</Link></h3>
              </div>
            </div>
          </div>
          <ul className="pagination-wrap text-center mt-30">
            <li><a href="#"><i className="ti-arrow-left"></i></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#" className="active">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i className="ti-arrow-right"></i></a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
