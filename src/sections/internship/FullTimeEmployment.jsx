import { Col, Container, Row } from "react-bootstrap";

const FullTimeEmployment = () => {
  return (
    <section className="position-relative">
      <div className="">
        <Container>
          <Row className="pt-lg-5 mt-lg-2">
            <Col xs={12} lg={5} className="position-relative">
            <div> <img src="/internship/employee.png" className="img-fluid"  alt="" /></div>
              {/* <div className="image-stack">
                <img
                  src="/internship/employee-1.png"
                  alt="employee group"
                  className="img-fluid top-image"
                />
                <img
                  src="/internship/employee-2.png"
                  alt="employee group"
                  className="img-fluid bottom-image"
                />
              </div> */}
            </Col>
            <Col xs={12} lg={7}>
              <h2 className="h2 text-center text-lg-center fw-semibold mb-3">
                Beyond Internship A Path to <br/>
                <span className="gradient-text"> Full-Time Employment</span>
              </h2>

              {/* First text paragraph */}
              <div className="text-normal text-center">
                <p >
                  Our internships aren’t just training — they’re a stepping
                  stone to real jobs. If you perform well, demonstrate your
                  potential, and show the right attitude, you could receive an
                  offer letter to join Connex Infotech full-time.</p>
                  <p> We recognize
                  talent, reward dedication, and are always looking for the next
                  team member to join us on exciting industry projects.
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

export default FullTimeEmployment;
