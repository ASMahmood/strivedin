 import React from "react"
 import User from "./User.jsx"
 import {Button} from "react-bootstrap"

 
 class Sidebar extends React.Component{

                state={
                    users:[],
                    show:"6",
                }

               

                
                fetch= async () => {
                    const url="https://striveschool-api.herokuapp.com/api/profile"
                    let response= await fetch(url,{
                        method:"GET",
                        headers: {Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ1OWVkMjY2ODAwMTcwZWEzZDciLCJpYXQiOjE2MDY3MzA4NjAsImV4cCI6MTYwNzk0MDQ2MH0.tP9w6YZ0yOqToeO2kXHHks7NXSo36rv-sFXVj8L7n8Q"

                    } 
                }
                )
                            if (response.ok){ 
                            let users= await response.json()
                            
                            this.setState({users})
                            
                        }

                }
                componentDidMount=()=>{
                    this.fetch()
                }
                showMore= () => {
                    this.setState({show:"10"})
                    this.fetch ()
                }

        render(){
            console.log(this.state.users)
         return(
          
            <div  className="cardsin pt-3 px-3 pb-0 ">
                <h4 className="mb-3">{this.props.title}</h4>
                {this.state.users.slice(0,this.state.show).map((user)=> 


                     <User key={user.id} image={user.image} name={user.name} title={user.title} />
                )}
            <Button className="btn-sidebar" onClick={()=> showMore } >Show More</Button>
            </div>
          
        
         )
     }
 }
 export default Sidebar;
