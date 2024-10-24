import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaHome, FaServer, FaPalette } from "react-icons/fa";

const ImprovedNavbar = () => {
  const location = useLocation();

  const links = [
    { path: "/", icon: FaHome, label: "Home" },
    { path: "/apicall", icon: FaServer, label: "API Templates" },
    { path: "/design", icon: FaPalette, label: "Design Templates" },
  ];

  return (
    <Navbar 
      bg="white" 
      fixed="top" 
      className="shadow-sm"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
    >
      <Container>
        <Nav className="mx-auto">
          {links.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                className="d-flex align-items-center px-4 position-relative"
                style={{
                  color: isActive ? "#2563eb" : "#64748b",
                  transition: "all 0.3s ease"
                }}
              >
                <Icon 
                  size={isActive ? 24 : 20} 
                  style={{ 
                    marginRight: "0.5rem",
                    transition: "all 0.3s ease"
                  }}
                />
                {label}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#2563eb"
                    }}
                  />
                )}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ImprovedNavbar;