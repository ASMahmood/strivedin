import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Roberto.css"
import "./css/Hilal.css"
import "./css/Evgeni.css"
import "./App.css"
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"

function App() {
	return (
		<>
			<Router>
				<Route exact path="/" component={Home}/>
			</Router>
		</>
	)
}

export default App
