import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import necessary components from react-router-dom
import { Button } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CardComponent from "./cardComponent";
import { frontenddata, backenddata } from "../data";

function Home() {
  return (
    <div className="App">
      <Container className="gap-5">
        <Row>
          <Link to="/frontend">
            <Button
              variant="primary"
              size="lg"
              style={{ fontSize: "40px", width: "100%" }}
            >
              Frontend Templates
            </Button>
          </Link>
        </Row>
        <Container className="mt-4">
          <Row>
            {frontenddata.map((card) => (
              <Link
                to={`/frontend/${card.urlTerm}`}
                style={{ textDecoration: "none" }}
                key={card.id}
              >
                <CardComponent title={card.title} text={card.description} />
              </Link>
            ))}
          </Row>
        </Container>
        <Row>
          <Link to="/backend">
            <Button
              variant="primary"
              size="lg"
              style={{ fontSize: "40px", width: "100%" }}
            >
              Backend Templates
            </Button>
          </Link>
        </Row>
        <Container className="mt-4">
          <Row>
            {backenddata.map((card) => (
              <Link
                to={`/backend/${card.urlTerm}`}
                style={{ textDecoration: "none" }}
                key={card.id}
              >
                <CardComponent
                  key={card.id}
                  title={card.title}
                  text={card.description}
                />
              </Link>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
