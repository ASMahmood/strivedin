import React from "react"
 import {Image} from "react-bootstrap"
 import {HiUserAdd} from "react-icons/hi"
 
 class User extends React.Component{

             
                
        

        render(){
           
         return(
          
           


                        <div className="d-flex  content  ">
                            <Image  className="userpic"src={this.props.image} />
                            <div>
                                <h6> {this.props.name}</h6>
                                <p className="mb-0">{this.props.title}</p>
                                
                            </div>
                            <HiUserAdd className="icons ml-auto"/>
                        </div>
           
         
          
        
         )
     }
 }
 export default User;