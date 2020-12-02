import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"
import "./App.css"
import Profile from "./components/Profile.jsx"

import OurNavBar from "./components/OurNavBar"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
	console.log("env in app.js", process.env)
	return (
		<>
			<OurNavBar />
			<Router>
				<Route exact path="/" component={Home} />
				<Route path="/profile/:id" component={Profile} />
			</Router>
		</>
	)
}

export default App
