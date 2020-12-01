import React from "react"
import Experience from './Experience.jsx'
import {AiOutlinePlus} from 'react-icons/ai'
import {Modal, Button,Form} from 'react-bootstrap'

class Body extends React.Component {

    state={
        experience:{
            title:'',
            employmentType:'Choose one',
            company:'',
            location:'',
            currentlyWork:true,
            startMonth:'',
            startYear:'',
            endMonth:'',
            endYear:'',
            endDate:'present',
            updateIndustry:false,
            updateHeadline:true,
            headline:'',
            description:''

        },
        experiences:[],
        show:false,
        errMessage:'',
        loading:false,
    }

    submitForm=(e)=> {
        e.preventDefault(),
        this.setState({loading:true})
        this.postFetch()

       
    }

    

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


    postFetch=async () => {

        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/5fc4c459ed266800170ea3d7/experiences',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.experience),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                })
            if (response.ok) {
                alert('Experience saved!')
                this.setState({
                    experience:{
                        title:'',
                        employmentType:'Choose one',
                        company:'',
                        location:'',
                        currentlyWork:true,
                        startMonth:'',
                        startYear:'',
                        endMonth:'',
                        endYear:'',
                        endDate:'present',
                        updateIndustry:false,
                        updateHeadline:true,
                        headline:'',
                        description:'',
            
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
           <Modal.Title>Add Experience</Modal.Title>
         </Modal.Header>
         <Modal.Body>
                    <Form  onSubmit={this.submitForm}>
                        
                            <Form.Group    >
                                <Form.Label>Title*</Form.Label>
                                
                                <Form.Control id="title" type="text"  value={this.state.experience.title} onChange={this.updateField} placeholder="Ex: Retail Sales Manager"  required/>
                                
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
                                <Form.Control  id="location"  type="text"  value={this.state.experience.location} onChange={this.updateField} placeholder="Ex: İstanbul /Turkey"/>                   
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
                           
                            
                            <Form.Group>
                                            <Form.Label htmlFor="month">Start Month</Form.Label>
                                            <Form.Control
                                                as="select"
                                                
                                                name="startMonth"
                                                id="startMonth"
                                                placeholder="Month"
                                                value={this.state.experience.startMonth}
                                                onChange={this.updateField}
                                                
                                            >
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                    </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label htmlFor="year">Start Month</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="startYear"
                                                id="startYear"
                                                placeholder="year"
                                                value={this.state.experience.startYear}
                                                onChange={this.updateField}
                                                
                                            >
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                            
                                            
                                                </Form.Control>
                                        </Form.Group>

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
                                            <Form.Label htmlFor="headline">Start Month</Form.Label>
                                            <Form.Control
                                                type="headline"
                                                name="headline"
                                                id="headline"
                                                placeholder="year"
                                                value={this.state.experience.headline}
                                                onChange={this.updateField}
                                                
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label htmlFor="description">Start Month</Form.Label>
                                            <Form.Control
                                                type="description"
                                                name="description"
                                                id="description"
                                                placeholder="year"
                                                value={this.state.experience.description}
                                                onChange={this.updateField}
                                                
                                            />
                                        </Form.Group>
                                    
                            
              </Form>
       
         </Modal.Body>
         <Modal.Footer>
          
           <Button variant="primary" type ="submit">
             Save 
           </Button>
           <Button variant="primary" onClick={this.handleClose} >
             Close 
           </Button>
         </Modal.Footer>
       </Modal>
      
			<div  className="cardsin pt-3 px-3 pb-0 ">
                <div className="d-flex content">
                <h4 className="mb-3 d-inline ">{this.props.title}</h4>
                <AiOutlinePlus className= "icons ml-auto" onClick={this.handleShow}/>
                
              
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