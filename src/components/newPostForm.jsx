import React from "react"
import { Container, Form, Button, Image } from "react-bootstrap"
class NewPostForm extends React.Component {
	state = {
		message: { text: "" },
		method: "POST",
		id: "",
	}
	controlMessage = (event) => {
		console.log("trying to type a message", event.target.value)
		let text = event.currentTarget.value
		this.setState({ message: { text } })
	}
	post = async () => {
		try {
			console.log("editing message debug", JSON.stringify(this.state.message))
			let TOKEN = process.env.REACT_APP_TOKEN
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/posts/${this.state.id}`,
				{
					method: `${this.state.method}`,
					headers: new Headers({
						Authorization: `Bearer ${TOKEN}`,
						"Content-Type": "application/json",
					}),
					body: JSON.stringify(this.state.message),
				}
			)
			console.log("the server responded", response)
		} catch (error) {
			console.error(error)
		}
	}
	componentDidMount() {
		if (this.props.edit) {
			this.setState({
				text: this.props.edit.text,
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
			<Container className="d-flex flex-row">
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
						<Button
							className="rounded-pill greyButton float-right mt-1 py-0"
							disabled={this.state.message.text ? false : true}
							onClick={this.post}
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
