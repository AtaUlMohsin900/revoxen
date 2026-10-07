import videoSrc from '../../assets/img/video-bg.mp4';

export default function Hero() {
  return (
    <section className="hero-section video">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="container">
        <div className="hero-content">
          <h1>Innovative Designs That Inspire Everyday Living</h1>
          <p>We blend architecture and Electrical Work to bring elegance and function into every space.</p>
          <div className="hero-action">
            <a href="/contact" className="default-btn">Book An Appointment <span></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
