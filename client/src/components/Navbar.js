import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaServer, FaCode } from 'react-icons/fa';

function ColorSchemesExample() {
  const location = useLocation();

  const getIconSize = (path) => {
    return location.pathname === path ? '40px' : '20px';
  };

  return (
    <>
      <Navbar style={{ backgroundColor: 'transparent' }} expand="lg"> 
        <Container className="d-flex justify-content-center">
          <div 
            style={{ 
              backgroundColor: 'blue', 
              padding: '10px', 
              borderRadius: '5px', 
              display: 'flex', 
              justifyContent: 'center' 
            }}
          >
            <Nav>
              <Nav.Link 
                as={Link} 
                to="/" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'white', 
                  margin: '0 10px' 
                }}
              >
                <FaHome style={{ fontSize: getIconSize('/') }} /> Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/backend" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'white', 
                  margin: '0 10px' 
                }}
              >
                <FaServer style={{ fontSize: getIconSize('/backend') }} /> Backend Templates
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/frontend" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'white', 
                  margin: '0 10px' 
                }}
              >
                <FaCode style={{ fontSize: getIconSize('/frontend') }} /> Frontend Templates
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
      
      <br />
    </>
  );
}

export default ColorSchemesExample;
