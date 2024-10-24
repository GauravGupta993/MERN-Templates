import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { apicalldata } from "../data";
import {Link } from "react-router-dom";
import CardComponent from './cardComponent';
import {MainLayout} from "./mainLayout";

const ApiCallTemplate = () => {
  return (
    <MainLayout>
      <Container className="mt-4">
        <Row>
          {apicalldata.map((card) => (
            <Col md={4} sm={12} key={card.id}>
              <Link 
                to={`/apicall/${card.urlTerm}`} 
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

export default ApiCallTemplate;
