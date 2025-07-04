import { Col, Container, Row } from "react-bootstrap";

const Certification = () => {
  return (
    <section className="position-relative py-2 py-lg-5">
      <div className="">
        <Container>
          <Row className="pt-lg-5 mt-lg-2">
            <Col xs={12} lg={5} className="position-relative">
            <div> <img src="/internship/certification.png" className="img-fluid"  alt="" /></div>
              {/* <div className="image-stack">
                <img
                  src="/internship/certificate-1.png"
                  alt="certificate group"
                  className="img-fluid top-image"
                />
                <img
                  src="/internship/certificate-2.png"
                  alt="discussion group"
                  className="img-fluid certificate-image"
                />
              </div> */}
            </Col>
            <Col xs={12} lg={7}>
              <h2 className="h2 text-start text-lg-start fw-semibold mb-3 gradient-text">
                Certificate of Completion
              </h2>

              {/* First text paragraph */}
              <div className="text-normal">
                <p className="">
                  <span className="fw-bold">
                    After completing the internship, you will get the official
                    certificate from Connex Infotech
                  </span>{" "}
                  which will serve as recognition of your hard work and the
                  skills you’ve gained through real-world projects.
                </p>
                <p>
                  <span className="fw-bold">
                    This certificate can help you secure placements and job
                    offers
                  </span>
                  showcasing your practical experience & dedication to potential
                  employers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default Certification;
