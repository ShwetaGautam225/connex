import { Row, Col } from "react-bootstrap";

const IconList = ({ icon, title, description }) => {
  return (
    <li className="mt-4">
      <Row>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className="icon bg-white d-flex justify-content-center align-items-center sm_h_51 sm_w_51" style={{height: '80px', width: '80px', borderRadius: '100%', boxShadow: '0px 4px 20px 0px #0A2A301F'}}>
            <img src={icon} alt={title} className="sm_h_25 sm_w_25" />
          </div>
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <h4 className="sm_text_15 sm_line_height_14 fw-semibold line_height_23 ps-3 ps-xl-0">{title}</h4>
          <p className="sm_text_10 sm_line_height_14 text-base line_height_23 ps-3 ps-xl-0 mb-0">{description}</p>
        </Col>
      </Row>
    </li>
  );
};

export default IconList;