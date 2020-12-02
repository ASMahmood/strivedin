import React from "react"

import {Modal, Button,Form, Col} from 'react-bootstrap'

class Body extends React.Component {

    state={
        experience:{
            role:'',
            employmentType:'Choose one',
            company:'',
            area:'',
            currentlyWork:true,
            startDate:'',
            
            endDate:'',
            updateIndustry:false,
            updateHeadline:true,
            headline:'',
            description:''

        },
      
        
        errMessage:'',
        loading:false,
    }

   

    handleClose = () => this.props.handleClose(false);
    updateField=(e)=>{
        let experience= {...this.state.experience}
        let currentid=e.currentTarget.id

        if (currentid=== 'currentlyWork') {
            experience[currentid] = e.currentTarget.checked
        } 
        else if(currentid=== 'updateIndustry') {
            experience[currentid] = e.currentTarget.checked
        } 
        else if(currentid=== 'updateHeadline') {
            experience[currentid] = e.currentTarget.checked
        } 
        else {
            experience[currentid] = e.currentTarget.value // e.currentTarget.value is the keystroke
        }


        this.setState({ experience:experience })

    }

    postFetch= async ()=>{
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/5fc4c459ed266800170ea3d7/experiences',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.experience),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q"
                    })
                })
            if (response.ok) {
                alert('Experience saved!')
                this.setState({
                    experience:{
                        role:'',
                        company:'',
                        area:'',
                        startDate:'',
                        endDate:'',
                        description:''
                       
            
                    },
                    errMessage: '',
                    loading: false,
                })
            } else {
                console.log('an error occurred')
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

  
    submitForm=(e)=> {
        e.preventDefault()
        this.setState({loading:true})
        this.postFetch()
        
    }




   

    
   
  







	render() {

        const {show } = this.props
		return(
			<>
           
         <Modal show={show} onHide={this.handleClose} >
         <Modal.Header closeButton>
           <Modal.Title>Add Experience</Modal.Title>
         </Modal.Header>
         <Modal.Body>
                    <Form  onSubmit={this.submitForm}>
                        
                            <Form.Group    >
                                <Form.Label>Title*</Form.Label>
                                
                                <Form.Control id="role" type="text"  value={this.state.experience.role} onChange={this.updateField} placeholder="Ex: Retail Sales Manager"  required/>
                                
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
                            <Form.Group  >
                                <Form.Label>Company *</Form.Label>
                                <Form.Control  id="company"  type="text"  value={this.state.experience.company} onChange={this.updateField} placeholder="Ex: Strive School" required/>                   
                            </Form.Group>
                            <Form.Group  >
                                <Form.Label>Location</Form.Label>
                                <Form.Control  id="area"  type="text"  value={this.state.experience.area} onChange={this.updateField} placeholder="Ex: İstanbul /Turkey"/>                   
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
                            
                                        <Form.Group as ={Col}>
                                            <Form.Label htmlFor="date">Start Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                
                                                name="startDate"
                                                id="startDate"
                                                placeholder="start date"
                                                value={this.state.experience.startDate}
                                                onChange={this.updateField}
                                                required
                                                
                                            >
                                                
                                                
                                           
                                            </Form.Control>
                                        </Form.Group >
                                        <Form.Group   as ={Col}>
                                            <Form.Label htmlFor="date">End Date</Form.Label>
                                            {this.state.experience.currentlyWork &&
                                            <p>present</p>}
                                
                                            {!this.state.experience.currentlyWork &&
                                            <Form.Control
                                                type="date"
                                                
                                                name="endDate"
                                                id="endDate"
                                                placeholder="end date"
                                                value={this.state.experience.endDate}
                                                onChange={this.updateField}
                                                required
                                                
                                            >
                                           
                                            </Form.Control>
                                            }
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
                                        <Button variant="primary" type ="submit">
                                            Save 
                                        </Button>  
                                        <Button variant="primary" onClick={this.handleClose} >
             Close 
           </Button> 
                                    
                                          
              </Form>
       
         </Modal.Body>
         
       </Modal>
      
		
        
       </>

		) 
	}
}

export default Body