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
  Image,
} from "react-bootstrap";
class MyJumbotron extends React.Component {
  state = {
    myObject: {},
  };
  fetchMe = async (id) => {
    try {
      console.log(this.props.tracksUrl);
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id ? id : "me"}`,
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
    console.log("id passed to the jumbotron", this.props.id);
    this.fetchMe(this.props.id);
  };
  componentDidUpdate = (oldprops) => {
    if (oldprops.id !== this.props.id) {
      this.fetchMe(this.props.id);
    }
  };
  render() {
    return (
      <Jumbotron className="customJumbotron GenericBody p-0 cardsin">
        <Image
          className="coverPhoto"
          src="https://place-hold.it/1920x300"
          fluid
        />
        <Image
          className="profilePic border-2 border-white"
          roundedCircle
          src={this.state.myObject.image} /*"https://place-hold.it/130x130"*/
        />
        <Container className="d-flex flex-row justify-content-end offset-overlay">
          <Dropdown className="Jumbodrop">
            <Dropdown.Toggle
              className="addProfileSection rounded-pill"
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
          <Button className="moreButton ml-4 btn-outline-dark rounded-pill">
            <solid> More... </solid>
          </Button>
          <BsPencil className="pencil my-auto" />
        </Container>
        <Container className="m-0 mb-4">
          <Row className="name">
            <Col>
              {this.state.myObject.name} {this.state.myObject.surname}
            </Col>
          </Row>
          <Row>
            <Col>{this.state.myObject.bio}</Col>
          </Row>
          <hr />
          <Row>
            <Col sm={8} className="area">
              {this.state.myObject.area}
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
