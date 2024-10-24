import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React from "react";
import { Container } from "react-bootstrap";
const CardComponent = ({ title, text }) => {
  return (
    <Col className="mb-4">
      <Card 
        style={{ 
          transition: "all 0.3s ease",
          height: "100%"
        }}
        onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

  export default CardComponent