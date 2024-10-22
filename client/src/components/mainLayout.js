import React from "react";
import { Container } from "react-bootstrap";

// Main Layout wrapper component
const MainLayout = ({ children }) => {
  return (
    <div style={{ 
      paddingTop: "80px", 
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)"
    }}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export {MainLayout};