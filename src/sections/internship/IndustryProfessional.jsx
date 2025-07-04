import { Col, Container, Row } from "react-bootstrap";

const IndustryProfessional = () => {
  return (
    <section className="position-relative">
      <div className="">
        <Container>
          <Row className="pt-lg-5 mt-lg-2">
            {/* Text block - full width on all devices */}
            <Col xs={12} lg={7}>
              <h2 className="h2 text-start text-lg-start fw-semibold mb-3">
                We’re Not an Institute.
                <br />
                <span className="gradient-text">
                  We’re Industry Professionals.
                </span>
              </h2>

              {/* First text paragraph */}
              <div className="text-normal">
                <p className="">
                  At Connex Infotech, we don’t believe in classroom-only
                  learning. We’re not a coaching center or an academy — we’re
                  working professionals who have been part of real projects for
                  brands like <span className="fw-bold">Tata, Adani, WeCura, Boompop, Temple Bliss,
                  Barmade, Wilson and Blast Motion, and PlumCreek Farm.</span> We want
                  to share that knowledge with freshers through direct
                  mentorship and real-world experience.
                </p>
               
              </div>         
            </Col>

           <Col xs={12} lg={5} className="position-relative">
           <div> <img src="/internship/working.png" alt="" className="img-fluid" /></div>
  {/* <div className="image-stack">
    <img
      src="/internship/working-1.png"
      alt="working group"
      className="img-fluid top-image"
    />
    <img
      src="/internship/working-2.png"
      alt="discussion group"
      className="img-fluid bottom-image"
    />
  </div> */}
</Col>

          </Row>
        </Container>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default IndustryProfessional;
