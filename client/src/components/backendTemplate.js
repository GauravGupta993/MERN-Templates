import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { backenddata } from "../data";
import {Link } from "react-router-dom";
import CardComponent from './cardComponent';

function backendTemplate() {

  return (
    <Container className="mt-4">
      <Row >
        {backenddata.map((card) => (
          <Col md={4} sm={12} >
          <Link to={`/backend/${card.urlTerm}`} key={card.id} style={{textDecoration:'none'}}>
          <CardComponent title={card.title} text={card.description}  />
          </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default backendTemplate;
