import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';

function Header() {
  const location = useLocation();
 const oRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const angle = window.scrollY;
      if (oRef.current) {
        oRef.current.style.transform = `rotate(${angle}deg)`;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header position-sticky top-0  py-1"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="p-0 m-0">
          {/* <img
          ref={logoRef}
            src="/logo.svg"
            alt="Connex Infotech"
            style={{ transition: 'transform 0.2s ease' }}
            className="img-fluid h-auto w-100"
            height={93}
            width={218}
          /> */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src="/logo-img.svg" alt="Connex Infotech" />
      <img
        ref={oRef}
        src="/icon-o.svg"
        alt="Rotating O"
        className="logo-rotate"
      />
    </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="pb-4 pb-lg-0" id="responsive-navbar-nav">
          <Nav className="ms-auto me-0 me-xl-5 me-lg-0">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "#212529" }}
              className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ color: "#212529" }}
              className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                location.pathname === "/services" ? "active" : ""
              }`}
              style={{ color: "#212529" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
             className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}
              style={{ color: "#212529" }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/internship"
              className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                location.pathname === "/internship" ? "active" : ""
              }`}
              style={{ color: "#212529" }}
            >
              Internship
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`text-base fw-medium me-xl-4 me-lg-3 nav-link-custom ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              style={{ color: "#212529" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="d-lg-none d-xl-block">
            <Button
              variant="success"
              className="btn-primary text-base fw-semibold border-0 text-white"
            >
              Get A Free Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
