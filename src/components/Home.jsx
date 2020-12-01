import React from "react"
import Sidebar from "./Sidebar"
import Sidebar0 from "./Sidebar0"
import { Container, Row, Col } from "react-bootstrap"

import GenericBody from "./GenericBody"
import Body from "./Body.jsx"
import GenericSidebar from "./GenericSidebar"
import MyJumbotron from "./MyJumbotron"
import Footer from "./Footer"
import { withRouter } from "react-router"
import YourDashboard from "./YourDashboard"

/**
 * we will neeed this when we start routing stuff
 */
class Home extends React.Component {
	render() {
		return (
			<>
				<Container fluid>
					<Row>
						<Col md={9} className="bodyColumn">
							{/**here goes the body*/}
							<MyJumbotron />
							<YourDashboard />
							<GenericBody />
							<Body title="Experience" />
						</Col>
						<Col md={3}>
							<Sidebar0 />
							<Sidebar title="People also viewed" />
							<Sidebar title="People you may know" />
							<GenericSidebar />
						</Col>
					</Row>
					<Row>
						<Footer />
					</Row>
				</Container>
				{/**bonus if we get to the chat that should stick to the bottom of the viewport*/}
			</>
		)
	}
}

export default withRouter(Home)
