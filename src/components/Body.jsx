import React from "react"
import Experience from "./Experience.jsx"
import { AiOutlinePlus } from "react-icons/ai"
import AddExperience from "./AddExperience.jsx"

class Body extends React.Component {
	state = {
		experiences: [],
		show: false,
		errMessage: "",
		loading: false,
	}

	handleShow = () => this.setState({ show: true })

	fetch = async () => {
		//old url https://striveschool-api.herokuapp.com/api/profile/5fc4c459ed266800170ea3d7/experiences
		const url = `https://striveschool-api.herokuapp.com/api/profile/${this.props.id}/experiences`
		let response = await fetch(url, {
			method: "GET",
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q",
			},
		})
		if (response.ok) {
			let experiences = await response.json()
			console.log("experiences:", experiences)

			this.setState({ experiences: experiences })
		}
	}
	componentDidMount = () => {
		this.fetch()
	}
	handleClose = (showMode) => {
		this.setState({ show: showMode })
		this.fetch()
	}
	componentDidUpdate = (oldprops) => {
		if (oldprops.id !== this.props.id) {
			this.fetch()
		}
	}
	render() {
		return (
			<>
				{this.state.show && (
					<AddExperience
						show={this.state.show}
						handleClose={this.handleClose}
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
							role={experience.role}
							company={experience.company}
							description={experience.description}
							startDate={experience.startDate}
							endDate={experience.endDate}
							area={experience.area}
						/>
					))}
				</div>
			</>
		)
	}
}

export default Body
