import React from "react"

import { Modal, Button, Form, Col } from "react-bootstrap"

class AddExperience extends React.Component {
	state = {
		experience: {
			role: "",
			employmentType: "Choose one",
			company: "",
			area: "",
			currentlyWork: true,
			startDate: "",

			endDate: "",
			updateIndustry: false,
			updateHeadline: true,
			headline: "",
			description: "",
		},

		exp: {},
		errMessage: "",
		loading: false,
	}

	//It passes false as showMode to parent body. It means dont show Modal.
	handleClose = () => this.props.handleClose(false)

	updateField = (e) => {
		let experience = { ...this.state.experience }
		let currentid = e.currentTarget.id

		if (currentid === "currentlyWork") {
			experience[currentid] = e.currentTarget.checked
		} else if (currentid === "updateIndustry") {
			experience[currentid] = e.currentTarget.checked
		} else if (currentid === "updateHeadline") {
			experience[currentid] = e.currentTarget.checked
		} else {
			experience[currentid] = e.currentTarget.value // e.currentTarget.value is the keystroke
		}

		this.setState({ experience: experience })
	}

	EditFetch = async () => {
		let response

		try {
			if (this.props.exId) {
				const url = `https://striveschool-api.herokuapp.com/api/profile/me/experiences/`
				response = await fetch(url + this.props.exId, {
					method: "PUT",
					body: JSON.stringify(this.state.experience),
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q",
					}),
				})
			} else {
				response = await fetch(
					"https://striveschool-api.herokuapp.com/api/profile/me/experiences",
					{
						method: "POST",
						body: JSON.stringify(this.state.experience),
						headers: new Headers({
							"Content-Type": "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q",
						}),
					}
				)
			}

			if (response.ok) {
				alert("Experience saved!")
				this.setState({
					experience: {
						role: "",
						company: "",
						area: "",
						startDate: "",
						endDate: "",
						description: "",
					},
					errMessage: "",
					loading: false,
				})
				this.handleClose()
			} else {
				console.log("an error occurred")
				let error = await response.json()
				this.setState({
					errMessage: error.message,
					loading: false,
				})
			}
		} catch (e) {
			console.log(e) // Error
			this.setState({
				errMessage: e.message,
				loading: false,
			})
		}
	}

	submitForm = (e) => {
		e.preventDefault()
		this.setState({ loading: true })
		this.EditFetch()
	}

	getFetch = async () => {
		try {
			const url = `https://striveschool-api.herokuapp.com/api/profile/me/experiences/`
			let response = await fetch(url + this.props.exId, {
				method: "GET",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q",
				},
			})
			if (response.ok) {
				let exp = await response.json()
				console.log("exp:", exp)

				this.setState({
					experience: {
						role: exp.role,
						company: exp.company,
						area: exp.area,
						startDate: exp.startDate,
						endDate: exp.endDate,
						description: exp.description,
					},
				})
			}
		} catch (e) {
			console.log(e)
		}
	}

	handleDelete = async () => {
		try {
			const url = `https://striveschool-api.herokuapp.com/api/profile/me/experiences/`
			let response = await fetch(url + this.props.exId, {
				method: "DELETE",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q",
				},
			})
			if (response.ok) {
				alert("exp deleted succesfully")
				this.handleClose()
			} else {
				alert("Something went wrong!")
			}
		} catch (e) {
			console.log(e)
		}
	}

	componentDidMount = async () => {
		console.log(this.props.exId)

		if (this.props.exId) {
			this.getFetch()
		}
	}

	render() {
		// console.log("id:",this.props.match.params.id)

		const { show } = this.props
		return (
			<>
				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add Experience</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.submitForm}>
							<Form.Group>
								<Form.Label>Title*</Form.Label>

								<Form.Control
									id="role"
									type="text"
									value={this.state.experience.role}
									onChange={this.updateField}
									placeholder="Ex: Retail Sales Manager"
									required
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor="employmentType">
									Employment Type
								</Form.Label>
								<Form.Control
									as="select"
									name="employmentType"
									id="employmentType"
									value={this.state.experience.employmentType}
									onChange={this.updateField}
								>
									<option>Full-time</option>
									<option>Part-time</option>
									<option>Self- Employed</option>
									<option>Freelance</option>
									<option>Contract</option>
									<option>Internship</option>
									<option>Seasonal</option>
									<option>Apprenticeship</option>
								</Form.Control>
								<Form.Label htmlFor="employmentType">
									Country Spesific Employment Types
								</Form.Label>
							</Form.Group>
							<Form.Group>
								<Form.Label>Company *</Form.Label>
								<Form.Control
									id="company"
									type="text"
									value={this.state.experience.company}
									onChange={this.updateField}
									placeholder="Ex: Strive School"
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Location</Form.Label>
								<Form.Control
									id="area"
									type="text"
									value={this.state.experience.area}
									onChange={this.updateField}
									placeholder="Ex: İstanbul /Turkey"
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>
									<Form.Check
										type="checkbox"
										id="currentlyWork"
										label="I am currently working in this role"
										checked={this.state.experience.currentlyWork}
										onChange={this.updateField}
									/>
								</Form.Label>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label htmlFor="date">Start Date</Form.Label>
									<Form.Control
										type="date"
										name="startDate"
										id="startDate"
										placeholder="start date"
										value={this.state.experience.startDate}
										onChange={this.updateField}
										required
									></Form.Control>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label htmlFor="date">End Date</Form.Label>
									{this.state.experience.currentlyWork && <p>present</p>}

									{!this.state.experience.currentlyWork && (
										<Form.Control
											type="date"
											name="endDate"
											id="endDate"
											placeholder="end date"
											value={this.state.experience.endDate}
											onChange={this.updateField}
											required
										></Form.Control>
									)}
								</Form.Group>
							</Form.Row>

							<Form.Group>
								<Form.Label>
									<Form.Check
										type="checkbox"
										id="updateIndustry"
										label="Update my industry"
										checked={this.state.experience.updateIndustry}
										onChange={this.updateField}
									/>
								</Form.Label>
							</Form.Group>

							<Form.Group>
								<Form.Label>
									<Form.Check
										type="checkbox"
										id="updateHeadline"
										label="Update my headline"
										checked={this.state.experience.updateHeadline}
										onChange={this.updateField}
									/>
								</Form.Label>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor="description">Description</Form.Label>
								<Form.Control
									as="textarea"
									name="description"
									id="description"
									placeholder="description"
									value={this.state.experience.description}
									onChange={this.updateField}
								/>
							</Form.Group>
							<Form.Group className="d-flex px-3">
								{this.props.exId && (
									<Button
										className=" deleteBtn"
										variant="primary"
										onClick={this.handleDelete}
									>
										Delete
									</Button>
								)}
								<Button
									className="saveBtn ml-auto"
									variant="primary"
									type="submit"
								>
									{" "}
									Save
								</Button>
							</Form.Group>
						</Form>
					</Modal.Body>
				</Modal>
			</>
		)
	}
}

export default AddExperience
