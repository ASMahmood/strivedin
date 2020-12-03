import React from "react"
import Experience from "./Experience.jsx"
import { AiOutlinePlus } from "react-icons/ai"
import AddExperience from "./AddExperience.jsx"

import { me } from "../fetch"

//HERE IS PROFILE BODY

class Body extends React.Component {
	state = {
		experiences: [],
		show: false,
		errMessage: "",
		loading: false,
		exId: "",

		id: false,

	}

	//THis fetch for showing experiences based on id/Id is coming from clicking
	fetch = async () => {
		let TOKEN = process.env.REACT_APP_TOKEN
		console.log("this.state.id", this.state.id)
		//old url https://striveschool-api.herokuapp.com/api/profile/5fc4c459ed266800170ea3d7/experiences
		const url = `https://striveschool-api.herokuapp.com/api/profile/${
			this.props.id === "me" ? this.state.id : this.props.id
		}/experiences`
		let response = await fetch(url, {
			method: "GET",
			headers: {

				Authorization: `Bearer ${TOKEN}`,

			},
		})
		if (response.ok) {
			let experiences = await response.json()
			console.log("experiences:", experiences)

			this.setState({ experiences: experiences })
		}
	}
	componentDidMount = () => {
		this.myId()
		//this.fetch()
	}

	myId = async () => {
		let id = await me()
		id = id._id
		this.setState({ id }, this.fetch)
		console.log("my own id", id)
	}

	//when comes the new id , it updates the profile page based on new id
	componentDidUpdate = (oldprops) => {
		if (oldprops.id !== this.props.id) {
			this.fetch()
		}
	}

	//It opens the modal in the component(AddExperience)
	handleShow = (showMode) => this.setState({ show: showMode })
	handleId = (id) => this.setState({ exId: id })

	//Here the showMode (false) is coming from a child component(AddExperience-inside of the Modal)
	handleClose = (showMode) => {
		this.setState({ show: showMode, exId: "" })

		this.myId()

		this.fetch()
	}

	render() {
		console.log("ex id:", this.state.exId)
		return (
			<>
				{this.state.show && (
					<AddExperience
						show={this.state.show}
						handleClose={this.handleClose}
						exId={this.state.exId}
						uid={this.state.id}
					/>
				)}

				<div className="cardsin pt-3 px-3 pb-0 ">
					<div className="d-flex content">
						<h4 className="mb-3 d-inline ">{this.props.title}</h4>
						<AiOutlinePlus
							className="icons ml-auto"
							onClick={this.handleShow}
						/>
					</div>

					{this.state.experiences.map((experience) => (
						//console.log("experience",experience)

						<Experience
							key={experience._id}
							id={experience._id}
							role={experience.role}
							company={experience.company}
							description={experience.description}
							startDate={experience.startDate}
							endDate={experience.endDate}
							image={experience.image}
							area={experience.area}
							handleShow={this.handleShow} //It accepts the showMode:true as prop from Experience and triggers the modal(add experience) open
							handleId={this.handleId}
						/>
					))}
				</div>
			</>
		)
	}
}

export default Body
