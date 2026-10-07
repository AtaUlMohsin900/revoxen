export default function Faq() {
  return (
    <>
      <section className="page-header padding">
        <div className="container">
          <div className="page-content text-center">
            <h2>Frequently Asked<br />Questions!</h2>
            <p>We specialize in architecture and Electrical Work services, transforming spaces with creativity, functionality, and precision.</p>
          </div>
        </div>
      </section>

      <section className="faq-section padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 padding-15">
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
            <div className="col-lg-6 padding-15">
              <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                      What services do you offer?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      We offer a wide range of architecture and Electrical Work services, including space planning, conceptual design, IT Networking, renovation, custom furniture design, and project supervision.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      How do I get started with a design project?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      You can start by contacting us via our website or phone. We'll schedule a consultation to understand your vision, requirements, and budget, then propose a custom design plan tailored to your needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      What is the timeline for completing a project?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      Timelines vary depending on the scale and complexity of the project. A typical interior project takes 4–12 weeks, while architectural projects may take longer. We provide a detailed timeline during the planning phase.
                    </div>
                  </div>
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
            <a href="/contact" className="default-btn wow fadeInUp" data-wow-delay="500ms">Make An Appointment<span></span></a>
          </div>
        </div>
      </section>
    </>
  );
}
