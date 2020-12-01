import React from "react"
import {BsQuestionCircleFill} from "react-icons/bs"
import {Image} from "react-bootstrap"


class Sidebar0 extends React.Component{

              

               
    

       render(){
          
        return(
            <>

            <div className="cardsin pt-3 px-3 pb-0 ">
           
                           
                            <div className="d-flex  content  ">
                                <h6 className= "d-inline"> Edit Public Profile & URL</h6>
                                <BsQuestionCircleFill     className="icons0 ml-auto"/>
                                
                            </div>
                            <div className="d-flex  content  ">
                            <h6 className="mb-0">Add Profile in Another Language </h6>
                            <BsQuestionCircleFill className="icons0 ml-auto"/>
                        </div>
           
            </div>
         
           <div  className="cardsin pt-3 px-3 pb-0 ">
               <Image style={{width:"100%"}}src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"/>
             
           </div>
           </>
         
       
        )
    }
}
export default Sidebar0;
