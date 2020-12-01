import userEvent from "@testing-library/user-event"
import React, { useState } from "react"

import { FormControl, Card, Image, Container, Row, Col } from "react-bootstrap"

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ProfileToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		href=""
		ref={ref}
		onClick={(e) => {
			e.preventDefault()
			onClick(e)
		}}
	>
		{children}
	</a>
))

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const ProfileMenu = React.forwardRef(
	({ user, children, style, className, "aria-labelledby": labeledBy }, ref) => {
		const [value, setValue] = useState("")
		console.log("user passed", user)
		return (
			<div
				ref={ref}
				style={style}
				className={className + " hideme mt-2 p-1 rounded"}
				aria-labelledby={labeledBy}
			>
				<Card className="userMenu">
					<Card.Header className="p-0 m-0">
						<Container fluid>
							<Row>
								<Col className="p-0 m-0">
									<Image
										src={user.image}
										roundedCircle
										className="mediumProfilePic"
									/>
								</Col>
								<Col className="pl-1 m-0">
									<p className="p-0 m-0">{user.name}</p>
									<p className="p-0 m-0">{user.title}</p>
								</Col>
							</Row>
						</Container>
					</Card.Header>
				</Card>
			</div>
		)
	}
)

export { ProfileToggle, ProfileMenu }
