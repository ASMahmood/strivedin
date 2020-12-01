import React from "react"
import Experience from './Experience.jsx'

class Body extends React.Component {

    state={
        experiences:[],
        show:"6",
    }

   

    
    fetch= async () => {
        const url= "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e/experiences"
        let response= await fetch(url,{
            method:"GET",
            headers: {Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q"

        } 
    }
    )
                if (response.ok){ 
                let experiences= await response.json()
                console.log("experiences:",experiences)
                
                this.setState({experiences:experiences})
                
            }

    }
    componentDidMount=()=>{
        this.fetch()
    }








	render() {

        console.log(this.state.experiences[0])
		return(
			
			<div  className="cardsin pt-3 px-3 pb-0 ">
			<h4 className="mb-3">{this.props.title}</h4>

            {
            this.state.experiences.map((experience)=> 

            //console.log("experience",experience)


             <Experience 
             key={experience._id}   
             title={experience.title} 
             company={experience.company} 
             role={experience.role}
             role={experience.role}
             role={experience.role} />
            )} 
        
     
		
		</div>

		) 
	}
}

export default Body