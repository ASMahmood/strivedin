import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import OurNavBar from "./components/OurNavBar"

function App() {
	console.log("env in app.js", process.env)
	return (
		<>
			<OurNavBar />
			<Router>
				<Route path="/" component={Home} />
			</Router>
		</>
	)
}

export default App
