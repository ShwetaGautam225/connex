import React, { useState } from 'react';
import { Container, ButtonGroup, Button, Row, Col, Card, Image } from 'react-bootstrap';

const projects = [
  {
    id: 1,
    title: "BoomPop",
    type: "Website & Mobile App",
    description:
      "Built The Backend System For This Leading Platform In Corporate Event Planning And Remote Team Experiences. Our Work Involved Secure API Development, Microservice Architecture, And Scalable Server-Side Infrastructure",
    image: "https://i.imgur.com/nXkJkVF.png", // Replace with actual image or local asset
    category: "Website & Mobile App",
    badge: "Website & Mobile App",
  },
  {
    id: 2,
    title: "Adani One",
    type: "Mobile App",
    description:
      "Adani One Is A Lifestyle And Travel App That Streamlines The Travel Experience By Providing Features Like Flight Bookings, Airport Services, Real-Time Updates, Loyalty Programs, And Exclusive Offers, All In One Seamless Platform.",
    image: "https://i.imgur.com/Ek1V2Jm.png", // Replace with actual image or local asset
    category: "Mobile App",
    badge: "Mobile App",
  },
];

const categories = ["All", "Website & Mobile App", "Website", "Mobile App"];

function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Container className="py-4">
      {/* Filters */}
      <div className="text-center mb-4">
        <ButtonGroup>
          {categories.map((cat) => (
            <Button  className={`filter-btn ${
              activeFilter === cat ? 'active-btn' : 'inactive-btn'
            }`}
              key={cat}
              onClick={() => setActiveFilter(cat) }
            >
             <span>{cat}</span>

            </Button>
          ))}
        </ButtonGroup>
      </div>

      {/* Projects */}
      {filteredProjects.map((project, index) => (
        <Row
          key={project.id}
          className="align-items-center my-5 py-4"
          style={{
            background:
              index % 2 === 0
                ? "linear-gradient(to right, #f6f9ff, #e9f6ff)"
                : "linear-gradient(to right, #ffe7e0, #fff4ef)",
            borderRadius: "20px",
          }}
        >
          <Col md={6} className="text-center">
            <Image
              src={project.image}
              alt={project.title}
              fluid
              style={{ maxHeight: "350px" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold">{project.title}</h3>
            <p>{project.description}</p>
            {project.title === "Adani One" && (
              <>
                <div className="mt-2">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Store_logo.svg"
                    width={100}
                    className="me-2"
                    alt="App Store"
                  />
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    width={120}
                    alt="Google Play"
                  />
                </div>
              </>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ProjectShowcase;
