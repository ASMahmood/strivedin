import React from "react";
import "../css/Evgeni.css";
import { BsPencil } from "react-icons/bs";
import {
  Col,
  Row,
  Navbar,
  NavDropdown,
  Form,
  Nav,
  FormControl,
  Button,
  Container,
  Jumbotron,
  Dropdown,
} from "react-bootstrap";
class MyJumbotron extends React.Component {
  state = {
    myObject: {},
  };
  fetchMe = async () => {
    try {
      console.log(this.props.tracksUrl);
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          method: "GET",
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0Y2MwNGVkMjY2ODAwMTcwZWEzZTEiLCJpYXQiOjE2MDY3MzI4MDQsImV4cCI6MTYwNzk0MjQwNH0.5SXRMRe0ODrHgIQD_X5IjaBng7GYCNd_FeZthitZ8bs",
          }),
        }
      );
      let parsedResponse = await response.json();
      this.setState({ myObject: parsedResponse });
      console.log(parsedResponse);
    } catch (e) {
      console.log("ERROR fetching" + e);
    }
  };
  componentDidMount = () => {
    this.fetchMe();
  };
  render() {
    return (
      <Jumbotron className="customJumbotron">
        <img className="coverPhoto" src="https://place-hold.it/550x200" />
        <Row className="coverPhotoRow">
          <Col sm={5}>
            <img className="profilePic" src="https://place-hold.it/130x130" />
          </Col>
          <Col sm={4}>
            <Dropdown>
              <Dropdown.Toggle
                className="addProfileSection"
                id="dropdown-basic"
              >
                Add profile section
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="dropDownItem" href="#/action-1">
                  Intro
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-2">
                  About
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-3">
                  Background
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-3">
                  Skills
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-3">
                  Accomplishments
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-3">
                  Additional information
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-3">
                  Supported Languages
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={3}>
            <Button className="moreButton">
              <solid> More... </solid>
            </Button>
            <BsPencil className="pencil" />
          </Col>
        </Row>
        <Container>
          <Row className="name">
            {this.state.myObject.name} {this.state.myObject.surname}
          </Row>
          <Row>{this.state.myObject.bio}</Row>
          <Row>
            <Col sm={8} className="area">
              {this.state.myObject.area}, England, United Kingdom
            </Col>
            <Col className="ContactInfo" sm={4}>
              <a>Contact info </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default MyJumbotron;