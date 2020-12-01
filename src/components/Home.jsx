import React from "react"
import Sidebar from "./Sidebar"
import Sidebar0 from "./Sidebar0"
import { Container, Row, Col } from "react-bootstrap"
import OurNavBar from "./OurNavBar"
import GenericBody from "./GenericBody"
import GenericSidebar from "./GenericSidebar"
import MyJumbotron from "./MyJumbotron"
import { withRouter } from "react-router"
/**
 * we will neeed this when we start routing stuff
 */
class Home extends React.Component {
	render() {
		return (
		<>
			<OurNavBar />
			<Container fluid>
				<Row>
					<Col md={9} className="bodyColumn">
						{/**here goes the body*/}
						<MyJumbotron />
						<GenericBody />
					</Col>
					<Col md={3}>
						<Sidebar0 />
						<Sidebar title="People also viewed" />
						<Sidebar title="People you may know" />
						<GenericSidebar />
					</Col>
				</Row>
				<Row>{/**here goes the footer*/}</Row>
			</Container>
			{/**bonus if we get to the chat that should stick to the bottom of the viewport*/}
		</>)
	}
}

export default withRouter(Home)
