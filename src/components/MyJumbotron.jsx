<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import "../css/Evgeni.css";
import { BsPencil } from "react-icons/bs";
import { Col, Row, Button, Container, Dropdown, Image } from "react-bootstrap";
import { me, addProfilePic } from "../fetch";


import {GoPencil} from "react-icons/go"
import { AiOutlinePlus } from "react-icons/ai"
var tries = 1

=======
=======
>>>>>>> parent of 99647e0... ComponentDidUpdate
import React from "react"
import "../css/Evgeni.css"
import { BsPencil } from "react-icons/bs"
import { Col, Row, Button, Container, Dropdown, Image } from "react-bootstrap"
import { me, addProfilePic } from "../fetch"
var tries = 1
<<<<<<< HEAD
>>>>>>> parent of 99647e0... ComponentDidUpdate
=======
>>>>>>> parent of 99647e0... ComponentDidUpdate
class MyJumbotron extends React.Component {
	state = {
		myObject: {},
	}
	fetchMe = async (id) => {
		try {
			console.log(this.props.tracksUrl)
			let TOKEN = process.env.REACT_APP_TOKEN
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${id ? id : "me"}`,
				{
					method: "GET",
					headers: new Headers({
						Authorization: `Bearer ${TOKEN}`,
					}),
				}
			)
			let parsedResponse = await response.json()
			this.setState({ myObject: parsedResponse })
			console.log(parsedResponse)
		} catch (e) {
			console.log("ERROR fetching" + e)
		}
		/*let parsedResponse = await me();
    console.log(parsedResponse);*/
		//this.setState({ myObject: parsedResponse })
	}
	fetchAddProfilePic = async (e) => {
		console.log("doing the fetch post")
		let formData = new FormData()
		formData.append("profile", e.target.files[0])
		let parsedResponse = await addProfilePic(formData, this.state.myObject._id)
		console.log(parsedResponse)
	}
<<<<<<< HEAD

<<<<<<< HEAD

  showChangeAvatar = () => {
    let inputButton = document.querySelector(".inputImage");
    if (tries % 2 == 1) {
      inputButton.classList.remove("d-none");
    } else {
      inputButton.classList.add("d-none");
    }
    tries++;
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
  loadFile = (e) => {
    var image = document.querySelector(".profilePhoto");
    image.src = URL.createObjectURL(e.target.files[0]);
  };
  displayImage = () => {
    let image = document.querySelector(".inputImage");
    console.log(image);
  };
  render() {
    return (
      <Container className="notJumbotronContainer">
        <Row>
          <Image
            className="coverPhoto"
            src="https://place-hold.it/800x400"
            fluid
          />
        </Row>
        <Row>
          <Col sm={10} xs={10}>
            <Image
              className="profilePhoto "
              src={this.state.myObject.image}
              fluid
              roundedCircle
              onClick={() => this.showChangeAvatar()}
            />
            <input
              className="inputImage d-none"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={(event) => this.fetchAddProfilePic(event)}
            />
          </Col>
          <Col sm={2} xs={2}>
            <BsPencil className="pencil" />
          </Col>
        </Row>
        <Row className="username">{this.state.myObject.username}</Row>
        {/*<Row className="bio">{this.state.myObject.bio}</Row> i commented this out because it broke stuff if the bio was too long*/}
        <Row className="bio">
          {this.state && new String(this.state.myObject.bio).substring(0, 200)}
          {" ..."}
        </Row>
        <Row>
          <Col className="location">
            {this.state.myObject.area} <a href="/profile/me">Contact Info </a>
          </Col>
        </Row>
        <Row>
          <Col sm={3} className="colBtn first">
            <Dropdown className="Jumbodrop">
              <Dropdown.Toggle
                className="addProfileSection rounded-pill"
                id="dropdown-basic"
              >
                Open to
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="dropDownItem" href="#/action-1">
                  Finding a new job
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="dropDownItem" href="#/action-2">
                  Hiring
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={5} className="colBtn second">
            <Dropdown className="Jumbodrop">
              <Dropdown.Toggle
                className="addProfileSection second rounded-pill"
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
          <Col sm={3} className="colBtn third">
            <Button className="moreBtn rounded-pill btn-outline-secondary">
              More...
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={6} xs={7}>
            <Container className="dottedContainer">
              <Row className="ml-1">
                Show recruiters you're open to work-you control who sees this{" "}
              </Row>
              <Row className="ml-1">
                <a href="/profile/me">Get started</a>
              </Row>
            </Container>
          </Col>
          <Col sm={6} xs={7}>
            <Container className="dottedContainer">
              <Row className="ml-1">
                Shere that you're hiring - and attract qualified candidates.{" "}
              </Row>
              <Row className="ml-1">
                <a href="/profile/me">Get started</a>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
=======
=======

>>>>>>> parent of 99647e0... ComponentDidUpdate
	showChangeAvatar = () => {
		let inputButton = document.querySelector(".inputImage")
		if (tries % 2 == 1) {
			inputButton.classList.remove("d-none")
		} else {
			inputButton.classList.add("d-none")
		}
		tries++
	}
	componentDidMount = () => {
		console.log("id passed to the jumbotron", this.props.id)
		this.fetchMe(this.props.id)
	}
	componentDidUpdate = (oldprops) => {
		if (oldprops.id !== this.props.id) {
			this.fetchMe(this.props.id)
		}
	}
	loadFile = (e) => {
		var image = document.querySelector(".profilePhoto")
		image.src = URL.createObjectURL(e.target.files[0])
	}
	displayImage = () => {
		let image = document.querySelector(".inputImage")
		console.log(image)
	}
	render() {
		return (
			<Container className="notJumbotronContainer">
				<Row>
					<Image
						className="coverPhoto"
						src="https://place-hold.it/800x400"
						fluid
					/>
				</Row>
				<Row>
					<Col sm={10} xs={10}>
						<Image
							className="profilePhoto "
							src={this.state.myObject.image}
							fluid
							roundedCircle
							onClick={() => this.showChangeAvatar()}
						/>
						<input
							className="inputImage d-none"
							type="file"
							id="avatar"
							name="avatar"
							accept="image/png, image/jpeg"
							onChange={(event) => this.fetchAddProfilePic(event)}
						/>
					</Col>
					<Col sm={2} xs={2}>
						<BsPencil className="pencil" />
					</Col>
				</Row>
				<Row className="username">{this.state.myObject.username}</Row>
				{/*<Row className="bio">{this.state.myObject.bio}</Row> i commented this out because it broke stuff if the bio was too long*/}
				<Row className="bio">
					{this.state && new String(this.state.myObject.bio).substring(0, 200)}
					{" ..."}
				</Row>
				<Row>
					<Col className="location">
						{this.state.myObject.area} <a href="/profile/me">Contact Info </a>
					</Col>
				</Row>
				<Row>
					<Col sm={3} className="colBtn first">
						<Dropdown className="Jumbodrop">
							<Dropdown.Toggle
								className="addProfileSection rounded-pill"
								id="dropdown-basic"
							>
								Open to
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item className="dropDownItem" href="#/action-1">
									Finding a new job
								</Dropdown.Item>
								<hr />
								<Dropdown.Item className="dropDownItem" href="#/action-2">
									Hiring
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Col>
					<Col sm={5} className="colBtn second">
						<Dropdown className="Jumbodrop">
							<Dropdown.Toggle
								className="addProfileSection second rounded-pill"
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
					<Col sm={3} className="colBtn third">
						<Button className="moreBtn rounded-pill btn-outline-secondary">
							More...
						</Button>
					</Col>
				</Row>
				<Row>
					<Col sm={6} xs={7}>
						<Container className="dottedContainer">
							<Row className="ml-1">
								Show recruiters you're open to work-you control who sees this{" "}
							</Row>
							<Row className="ml-1">
								<a href="/profile/me">Get started</a>
							</Row>
						</Container>
					</Col>
					<Col sm={6} xs={7}>
						<Container className="dottedContainer">
							<Row className="ml-1">
								Shere that you're hiring - and attract qualified candidates.{" "}
							</Row>
							<Row className="ml-1">
								<a href="/profile/me">Get started</a>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		)
	}
<<<<<<< HEAD
>>>>>>> parent of 99647e0... ComponentDidUpdate
=======
>>>>>>> parent of 99647e0... ComponentDidUpdate
}
export default MyJumbotron
