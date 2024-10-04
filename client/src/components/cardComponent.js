import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const CardComponent = ({ title, text }) => {
    return (
      <Col className="mb-4" >
        {" "}
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  export default CardComponent