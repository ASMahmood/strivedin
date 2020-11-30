import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"
import "./App.css"
import { Container, Row, Col } from "react-bootstrap"
import OurNavBar from "./components/OurNavBar"
import GenericBody from "./components/GenericBody"
import GenericSidebar from "./components/GenericSidebar"

function App() {
	return (
		<>
			{/*here goes the navbar*/}
			<OurNavBar />

			<Container>
				<Row>
					<Col md={10}>
						{/**here goes the body*/}
            <MyJumbotron />
						<GenericBody />
					</Col>
					<Col md={2}>
						{/**here goes the sidebar */}
						<GenericSidebar />
					</Col>
				</Row>
				<Row>{/**here goes the footer*/}</Row>
			</Container>
			{/**bonus if we get to the chat that should stick to the bottom of the viewport*/}
		</>
	)
}

export default App;
