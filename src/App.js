import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Profile from "./components/Profile.jsx"

import OurNavBar from "./components/OurNavBar"
import NewsPage from "./components/NewsPage"

function App() {
	console.log("env in app.js", process.env)
	return (
		<>
			<OurNavBar />
			<Router>
				<Route exact path="/" component={NewsPage} />
				<Route path="/profile/:id" component={Profile} />
			</Router>
		</>
	)
}

export default App
