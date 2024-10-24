import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { designdata } from "../data";
import {Link } from "react-router-dom";
import CardComponent from './cardComponent';
// import React from "react";
// import { Container } from "react-bootstrap";
import {MainLayout} from "./mainLayout";

const DesignTemplate = () => {
  return (
    <MainLayout>
      <Container className="mt-4">
        <Row>
          {designdata.map((card) => (
            <Col md={4} sm={12} key={card.id}>
              <Link 
                to={`/design/${card.urlTerm}`} 
                style={{textDecoration:'none'}}
              >
                <CardComponent 
                  title={card.title} 
                  text={card.description}  
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default DesignTemplate;
