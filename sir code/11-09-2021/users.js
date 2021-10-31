import React from 'react'
class Users extends React.Component {

  // componentWillReceiveProps(newProps)
  // {
  //   if(this.props !== newProps)
  //   {
  //     alert("No props is updated")
  //   }
  //   else
  //   {
  //     alert("Props is updated")
  //   }
  // }
  
  render() {
    return(
      <div>
        <h1>WELCOME  {this.props.location.u_id}</h1>
        <h2>Your Name :  {this.props.location.u_name}</h2>
        <h2>Your location : {this.props.location.u_loc}</h2>
      </div> 
    ); 

  }
}
export default Users