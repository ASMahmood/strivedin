import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"
import "./App.css"
import Sidebar from './components/Sidebar'
import Sidebar0 from './components/Sidebar0'
import { Container, Row, Col } from "react-bootstrap"

function App() {
	return (
		<>
			<Container fluid>
				<Row>{/*here goes the navbar*/}</Row>
				<Row>
					<Col md={9}>{/**here goes the body*/}</Col>
					<Col md={3}>
						<Sidebar0/>
						<Sidebar title="People also viewed" />
						<Sidebar title="People you may know" />
					</Col>
				</Row>
				<Row>{/**here goes the footer*/}</Row>
			</Container >
			{/**bonus if we get to the chat that should stick to the bottom of the viewport*/}
		</>
	)
}

export default App
