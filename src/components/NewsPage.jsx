import React from "react"
import Sidebar from "./Sidebar"
import Sidebar0 from "./Sidebar0"
import { Container, Row, Col } from "react-bootstrap"

import GenericSidebar from "./GenericSidebar"
import Footer from "./Footer"
import { withRouter } from "react-router-dom"
import NewsFeedBody from "./NewsFeedBody"

/**
 * we will neeed this when we start routing stuff
 */
class Newsfeed extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	gotId = () => {
		return this.props.match.params.id ? this.props.match.params.id : "me"
	}

	render() {
		return (
			<>
				<Container>
					<Row>
						<Col md={3} className="leftSidebar"></Col>
						<Col md={6} className="bodyColumn">
							<NewsFeedBody />
						</Col>
						<Col md={3}>
							<Sidebar0 />
							<Sidebar title="Our Team" />
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

export default withRouter(Newsfeed)
