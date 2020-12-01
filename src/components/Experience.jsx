import React from "react"
import {Image} from "react-bootstrap"
 import {ImPencil} from "react-icons/im"
 
 class Experience extends React.Component{

             

        

        render(){
            console.log("company")
        
            
           
         return(
          
           

            <div className="d-flex  content  ">
            <Image className="Img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9FxYCx3Z63hljZuqkk2220u1CtSQc8xX1exxCkxBnlVC3PXVhRwgFUzvK3Z5t33ZmHR9yZ-DB3h_Co4z5N4g5H8gX-Fj6Uo&usqp=CAU&ec=45732304"/>
            <div>
                <h6> {this.props.role}</h6>
                <p className="mb-0">{this.props.company}</p>
                <p className="mb-0">{this.props.company}</p>
                <p className="mb-0">{this.props.company}</p>
                
            </div>
            <ImPencil className="icons ml-auto"/>
        </div>
           
         
          
        
         )
     }
 }
 export default Experience;