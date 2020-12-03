import React from "react"
import "../css/EvgeniSecond.css"
import { GrUserAdd } from "react-icons/gr"
import { RiVipDiamondFill } from "react-icons/ri"
import { RiFlag2Fill } from "react-icons/ri"
import { AiOutlinePlus } from "react-icons/ai"
import { Col, Row, Container, Image } from "react-bootstrap"
import { me } from "../fetch"

class LeftSideBarNewsPage extends React.Component {
	state = {
		myObject: {},
	}
	fetchMe = async () => {
		/*try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/me`,
				{
					method: "GET",
					headers: new Headers({
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0Y2MwNGVkMjY2ODAwMTcwZWEzZTEiLCJpYXQiOjE2MDY3MzI4MDQsImV4cCI6MTYwNzk0MjQwNH0.5SXRMRe0ODrHgIQD_X5IjaBng7GYCNd_FeZthitZ8bs",
					}),
				}
			)*/
		let parsedResponse = await me()
		this.setState({ myObject: parsedResponse })
		console.log(parsedResponse)
		/*} catch (e) {
			console.log("ERROR fetching" + e)
		}*/
	}
	componentDidMount = () => {
		console.log()
		this.fetchMe()
	}

	render() {
		return (
			<>
				<Container className="firstContainer">
					<Row className="coverImageRow">
						<Image
							className="coverPhoto"
							fluid
							src="https://place-hold.it/1920x400"
						/>
					</Row>
					<Row className="profilePicRow">
						<Image
							className="profilePic border-2 border-white"
							fluid
							src={this.state.myObject.image}
							roundedCircle
						/>
					</Row>
					<Row className="userNameRow">
						<Col>{this.state.myObject.username}</Col>
					</Row>
					<Row className="bioRow">
						<Col>{this.state.myObject.bio}</Col>
					</Row>
					<Row>
						<Col sm={9} xs={9}>
							<Row className="connections">Connections</Row>
							<Row className="grow">Grow your network</Row>
						</Col>
						<Col sm={3} xs={3}>
							{" "}
							<GrUserAdd className="addUser" />
						</Col>
					</Row>
					<Row className="access">Acces exclusive tools {"&"} insights </Row>
					<Row className="premiumRow">
						<Col sm={2} xs={2}>
							<RiVipDiamondFill className="premiumIcon" />
						</Col>
						<Col sm={10} xs={10} className="premiumText">
							Reactivate Premium
						</Col>
					</Row>
					<Row>
						<Col sm={2} xs={2}>
							{" "}
							<RiFlag2Fill className="dirtyFlag" />
						</Col>
						<Col sm={10} xs={10} className="savedText">
							{" "}
							Saved Items{" "}
						</Col>
					</Row>
				</Container>

				<Container className="secondContainer">
					<Row className="groups">
						<a href="/">Groups</a>
					</Row>
					<Row className="events">
						<Col sm={8} xs={6}>
							<a href="/">Events</a>
						</Col>
						<Col sm={4} xs={6}>
							<AiOutlinePlus className="plus" />
						</Col>
					</Row>
					<Row className="hashTag">
						<a href="/" className="hashTagText">
							Followed Hashtag
						</a>
					</Row>
					<Row className="discoverMe">
						<Col
							sm={{ size: 8, offset: 2 }}
							xs={{ size: 8, offset: 2 }}
							className="discoverText"
						>
							{" "}
							Discover Me{" "}
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default LeftSideBarNewsPage
