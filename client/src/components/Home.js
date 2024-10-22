import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaServer, FaPalette, FaChevronRight } from "react-icons/fa";
import { MainLayout } from "./mainLayout";
import { apicalldata, designdata } from "../data";

const ImprovedHome = () => {
  const categories = [
    {
      title: "Design Templates",
      description: "Explore our collection of UI design templates and components",
      path: "/design",
      icon: <FaPalette size={24} />,
      data: designdata
    },
    {
      title: "API Call Templates",
      description: "Discover templates for handling API integrations",
      path: "/apicall",
      icon: <FaServer size={24} />,
      data: apicalldata
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Row className="text-center py-5">
        <Col>
          <h1 className="display-4 fw-bold mb-4">
            MERN Template Library
          </h1>
          <p className="lead text-muted">
            Browse our collection of ready-to-use templates and components
          </p>
        </Col>
      </Row>

      {/* Categories */}
      {categories.map((category, idx) => (
        <section key={idx} className="mb-5">
          <Link 
            to={category.path}
            style={{ textDecoration: "none" }}
          >
            <Card 
              className="mb-4"
              style={{ 
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <Card.Header 
                style={{ 
                  background: "#f8fafc",
                  border: "none"
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ color: "#2563eb" }}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="mb-1" style={{ color: "#1e3a8a" }}>
                        {category.title}
                      </h3>
                      <p className="mb-0 text-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <FaChevronRight style={{ color: "#2563eb" }} />
                </div>
              </Card.Header>
            </Card>
          </Link>

          <Row>
            {category.data.map((item) => (
              <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
                <Link
                  to={`${category.path}/${item.urlTerm}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card 
                    className="h-100"
                    style={{ 
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
                    onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <Card.Body>
                      <h4 className="text-dark mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted mb-0">
                        {item.description}
                      </p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </section>
      ))}
    </MainLayout>
  );
};

export default ImprovedHome;