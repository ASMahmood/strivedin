import React from "react"
import { Container, Form, Button, Image } from "react-bootstrap"
class NewPostForm extends React.Component {
	state = {
		message: { text: "" },
		method: "POST",
		id: "",
		data: null,
	}
	controlMessage = (event) => {
		console.log("trying to type a message", event.target.value)
		const data = new FormData()
		data.append("text", this.state.message.text)
		let text = event.currentTarget.value
		this.setState({ message: { text }, data })
	}
	handleImg = (ev) => {
		console.log("/****image uploader handler function****")
		console.log("target", ev.target)
		const data = new FormData()
		data.append("post", ev.target.files[0])
		this.setState({ data })
	}
	post = async () => {
		let TOKEN = process.env.REACT_APP_TOKEN
		let text = {
			method: `${this.state.method}`,
			headers: new Headers({
				Authorization: `Bearer ${TOKEN}`,
				"Content-Type": "application/json",
			}),
			body: JSON.stringify(this.state.message),
		}

		let img = {
			method: `PUT`,
			headers: new Headers({
				Authorization: `Bearer ${TOKEN}`,
			}),
			body: this.state.data,
		}

		try {
			console.log("editing message debug", JSON.stringify(this.state.message))

			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/posts/${this.state.id}`,
				this.state.method !== "img" ? text : img
			)
			console.log("inside the post poster")
			console.log(
				"this.state.method",
				this.state.method,
				"this.state.data",
				this.state.data
			)

			if (this.state.method !== "img" && this.state.data !== "null") {
				response = await response.json()
				this.setState({ method: "img", id: response._id }, this.post)
			}
			this.props.refresh()
		} catch (error) {
			console.error(error)
		}
	}

	postTxt = async () => {
		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/posts/${this.state.id}`,
				{
					method: this.state.method,
					headers: new Headers({
						Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
						"Content-Type": "application/json",
					}),
					body: JSON.stringify(this.state.message),
				}
			)
			response = await response.json()
			return response._id
		} catch (e) {
			console.error(e)
		}
	}

	postImg = async () => {
		try {
			let id = await this.postTxt()
			let url = `https://striveschool-api.herokuapp.com/api/posts/${id}`
			console.log("posimg url", url)
			let response = await fetch(url, {
				method: "POST",
				headers: new Headers({
					Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
				}),
				body: this.state.data,
			})
			response = await response.json()
			console.log(
				"so we did try to post an image here is the response",
				response
			)
			this.props.refresh()
		} catch (e) {
			console.error(e)
		}
	}

	componentDidMount() {
		if (this.props.edit) {
			this.setState({
				message: { text: this.props.edit.text },
				method: "PUT",
				id: this.props.edit.id,
			})
			/*this.state.text = this.props.edit.text
			this.state.method = "PUTT"
			this.state.id = this.props.edit.id*/
		}
	}
	render() {
		return (
			<Container className="d-flex flex-row ">
				<Image
					roundedCircle
					src="http://placehold.it/100x100"
					className="mediumProfilePic"
				/>
				<Container>
					<p>myname</p>
					<Button variant="outline-dark" className="rounded-pill py-0">
						Anyone &#x25bc;
					</Button>
					<Form>
						<Form.Control
							as="textarea"
							rows={4}
							className="border-0 noManualResize"
							placeholder="What do you want to talk about"
							onChange={this.controlMessage}
							value={this.state.message.text}
						></Form.Control>
						<Form.File
							id="picture"
							label="add a picture"
							name="pic"
							onChange={this.handleImg}
						/>
						{this.props.photo === "photo" && "anystuff"}

						<Button
							className="rounded-pill greyButton float-right mt-1 py-0"
							disabled={this.state.message.text ? false : true}
							onClick={this.postImg}
						>
							Post
						</Button>
					</Form>
				</Container>
			</Container>
		)
	}
}

export default NewPostForm
