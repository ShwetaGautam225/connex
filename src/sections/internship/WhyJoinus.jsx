import { Container, Row, Col } from "react-bootstrap";
import { IconList } from "../../components/ui";

const WhyJoinus = () => {
  return (
    <section id="why-choose-us" aria-label="Why Choose Us">
      <Container className="">
        <Row>
          <Col lg={6} md={12} sm={12} className="d-none d-lg-block">
            <img
              src={"/internship/why-join.png"}
              height={625}
              width={580}
              alt="Why Choose Us"
              className="h-auto w-100"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <h2 className="h2 text-center text-lg-start fw-semibold mb-2 mb-lg-3">
              Why Join <br />
              <span className="d-none d-lg-inline-block gradient-text">Connex Infotech?</span>
              <span className="gradient-text d-lg-none">Connex Infotech</span>
            </h2>
            <ul className="list-unstyled ps-0 pt-2 pt-lg-0">
              <IconList
                icon={"/mentor.png"}
                title="Mentorship by Industry Experts"
                description="Work directly with professionals who’ve built apps used by millions."
              />
              <IconList
                icon={"/projects.png"}
                title="Work on Real Projects"
                description="Not dummy apps — you’ll work on actual solutions, solve real bugs, and collaborate like in a real IT job."
              />
              <IconList
                icon={"/skills.png"}
                title="Career-Ready Skills"
                description="From GitHub collaboration to API integration, you’ll gain hands-on experience you can showcase."
              />
              <IconList
                icon={"/boring.png"}
                title="No Boring Lectures"
                description="This is not a training institute. It’s a professional environment where you learn by doing."
              />
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyJoinus;
