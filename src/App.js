import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"

import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import OurNavBar from "./components/OurNavBar"
require("dotenv").config()

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
