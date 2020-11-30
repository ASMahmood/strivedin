import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Roberto.css";
import "./css/Hilal.css";
import "./css/Evgeni.css";
import "./App.css";
import MyJumbotron from "./components/MyJumbotron";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Row>{/*here goes the navbar*/}</Row>
        <Row>
          <Col md={10}>
            <MyJumbotron />
          </Col>
          <Col md={2}>{/**here goes the sidebar */}</Col>
        </Row>
        <Row>{/**here goes the footer*/}</Row>
      </Container>
      {/**bonus if we get to the chat that should stick to the bottom of the viewport*/}
    </>
  );
}

export default App;
