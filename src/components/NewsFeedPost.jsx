import React from "react"
import { Card, Image } from "react-bootstrap"
import { GoPencil, GoTrashcan } from "react-icons/go"

class NewsFeedPost extends React.Component {
	constructor(props) {
		super(props)
		this.state = this.props.post
		this.state.mine = this.props.mine
	}

	deleteMe = async (id) => {
		console.log(
			"enter delete mode for post",
			this.state.id,
			"or, maybe, for",
			id
		)
		try {
			let TOKEN = process.env.REACT_APP_TOKEN
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/posts/" + id,
				{
					method: "DELETE",
					headers: new Headers({
						Authorization: `Bearer ${TOKEN}`,
						"Content-Type": "application/json",
					}),
				}
			)
			console.log("the server responded", response)
			this.props.refresh()
		} catch (err) {
			console.error(err)
		}
	}

	render() {
		return (
			<Card className="cardsin">
				<Card.Header>
					<Image
						src={this.state.user.image}
						className="miniProfilePic"
						roundedCircle
					/>
					<b className="ml-1">
						{this.state.user.name} {this.state.user.surname}
					</b>
				</Card.Header>
				<Card.Body className="d-flex flex-row">
					<span className="flex-fill">{this.state.text}</span>
					{this.state.mine && (
						<>
							<GoPencil
								className="icons mx-1"
								onClick={() =>
									this.props.edit({
										text: this.state.text,
										id: this.state._id,
									})
								}
							/>
							<GoTrashcan
								className="icons"
								onClick={() => this.deleteMe(this.state._id)}
							/>
						</>
					)}
				</Card.Body>
			</Card>
		)
	}
}

export default NewsFeedPost
