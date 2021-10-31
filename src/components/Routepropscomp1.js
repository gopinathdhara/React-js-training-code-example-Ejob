import React from 'react'
class Routepropscomp1 extends React.Component
{
    //send props through route
    render(){
        return(
            <>
            <div class="col-sm-4">
                <h3>
                <label>Prop value is:</label>
                </h3> 
               <h3>Id: {this.props.location.u_id}</h3> 
               <h3>Name: {this.props.location.u_name}</h3> 
               <h3>Location: {this.props.location.u_loc}</h3> 
                
            </div>
            </>
        )
    }
}
export default Routepropscomp1;