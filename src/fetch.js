const me = async () => {
	let TOKEN = process.env.REACT_APP_TOKEN
	try {
		let response = await fetch(
			`https://striveschool-api.herokuapp.com/api/profile/me`,
			{
				method: "GET",
				headers: new Headers({
					Authorization: `Bearer ${TOKEN}`,
				}),
			}
		)
		response = await response.json()
		return response
		//console.log("user", response)
	} catch (e) {
		console.log("ERROR fetching" + e)
	}
}


const users = async () => {
	let TOKEN = process.env.REACT_APP_TOKEN
	try {
		let response = await fetch(
			`https://striveschool-api.herokuapp.com/api/profile/`,
			{
				method: "GET",
				headers: new Headers({
					Authorization: `Bearer ${TOKEN}`,
				}),
			}
		)
		response = await response.json()
		return response
		//console.log("user", response)
	} catch (e) {
		console.log("ERROR fetching" + e)
	}
}

export { me, users }

