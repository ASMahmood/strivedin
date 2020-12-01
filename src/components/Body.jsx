import React from "react"
import Experience from './Experience.jsx'
import {AiOutlinePlus} from 'react-icons/ai'
import {Modal, Button} from 'react-bootstrap'

class Body extends React.Component {

    state={
        experiences:[],
        show:false,
    }

   
    handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});
    
    fetch= async () => {
        const url= "https://striveschool-api.herokuapp.com/api/profile/5fc4c459ed266800170ea3d7/experiences"
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

        // console.log(this.state.experiences[0])
		return(
			<>
           
         <Modal show={this.state.show} onHide={this.handleClose} >
         <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={this.handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={this.handleClose}>
             Save Changes
           </Button>
         </Modal.Footer>
       </Modal>
      
			<div  className="cardsin pt-3 px-3 pb-0 ">
                <div className="d-flex content">
                <h4 className="mb-3 d-inline ">{this.props.title}</h4>
                <AiOutlinePlus className= "icons ml-auto" onClick={this.handleShow}/>
                <Button variant="primary" onClick={this.handleShow}></Button>
              
                </div>
			

            {
            this.state.experiences.map((experience)=> 

            //console.log("experience",experience)


             <Experience 
             key={experience._id}   
             role={experience.role} 
             company={experience.company} 
             description={experience.description}
             startDate={experience.startDate}
             endDate={experience.endDate}
             area={experience.area} />
            )} 
        
     
		
		</div>
        
       </>

		) 
	}
}

export default Body