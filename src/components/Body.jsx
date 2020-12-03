import React from "react"
import Experience from "./Experience.jsx"
import { AiOutlinePlus } from "react-icons/ai"
import AddExperience from "./AddExperience.jsx"

//HERE IS PROFILE BODY 


class Body extends React.Component {
	state = {
		experiences: [],
		show: false,
		errMessage: "",
		loading: false,
		exId:''
	}


 //THis fetch for showing experiences based on id/Id is coming from clicking
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

    
	//when comes the new id , it updates the profile page based on new id
	componentDidUpdate = (oldprops) => {
		if (oldprops.id !== this.props.id) {
			this.fetch()
		}
	}

	//It opens the modal in the component(AddExperience)
	handleShow = (showMode) => this.setState({ show: showMode})
	handleId= (id) => this.setState({ exId: id})

	//Here the showMode (false) is coming from a child component(AddExperience-inside of the Modal)
	handleClose = (showMode) => {
		this.setState({ show: showMode, exId:'' })
		this.fetch()
	}

	render() {
		console.log("ex id:",this.state.exId)
		return (
			<>
				{this.state.show && (
					<AddExperience
						show={this.state.show}
						handleClose={this.handleClose}
						exId={this.state.exId}
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
							handleShow={this.handleShow}//It accepts the showMode:true as prop from Experience and triggers the modal(add experience) open
							handleId={this.handleId}
							
							

						/>
					))}
				</div>
			</>
		)
	}
}

export default Body
