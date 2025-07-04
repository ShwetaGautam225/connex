import { Col, Container, Row } from "react-bootstrap";

const FullTimeEmployment = () => {
  return (
    <section className="position-relative">
      <div className="" >
        <Container>
        <Row className="pt-lg-5 mt-lg-2">
  {/* Text block - full width on all devices */}
  <Col xs={12} lg={12}>
    <h2 className="h2 text-start gradient-text text-lg-start fw-semibold mb-3">
      Who Are We?
    </h2>
  </Col>

<section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-3">Internship Program Roadmap</h2>
        <div className="text-center mb-4">
          <h5 className="text-success d-inline-block me-2">
             Basic Level - 45 Days
          </h5>
          <p className="text-muted mb-0">Goal: Intro To Tech + Hands-On Practice</p>
        </div>

        <Row className="gy-4 mb-5">
          {/* FOUNDATIONS */}
          <Col md={4}>
            <div className="roadmap-box p-4 rounded-4 bg-gradient-light position-relative">
              <div className="roadmap-badge">Week 1-2</div>
              <h5 className="fw-bold">FOUNDATIONS</h5>
              <ul className="list-unstyled mb-0">
                <li> Tech Stack Setup (IDE, SDKs)</li>
                <li> GitHub + Version Control</li>
                <li> Programming basics</li>
              </ul>
            </div>
          </Col>

          {/* CORE SKILLS */}
          <Col md={4}>
            <div className="roadmap-box p-4 rounded-4 bg-gradient-lightgreen position-relative">
              <div className="roadmap-badge">Week 3-4</div>
              <h5 className="fw-bold">Core Skills</h5>
              <ul className="list-unstyled mb-0">
                <li> CRUD Operations</li>
                <li> API integration basics</li>
                <li> Basic UI/UX design</li>
              </ul>
            </div>
          </Col>

          {/* MINI PROJECT */}
          <Col md={4}>
            <div className="roadmap-box p-4 rounded-4 border border-primary position-relative">
              <div className="roadmap-badge">Week 5-6</div>
              <h5 className="fw-bold">Mini Project</h5>
              <ul className="list-unstyled mb-0">
                <li> Build A Simple App/Site</li>
                <li> Debugging & error handling</li>
                <li> Evaluation & feedback</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* INTERMEDIATE LEVEL */}
        <div className="text-center">
          <h5 className="text-success d-inline-block me-2">
             Intermediate Level - 3 Months
          </h5>
          <p className="text-muted mb-0">Goal: Skill Building + Real Project Development</p>
        </div>
      </Container>
    </section>
</Row>

        </Container>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default FullTimeEmployment;
