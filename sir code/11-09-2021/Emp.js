import React from 'react'
class Emp extends React.Component {

  state={
    p_stid:'',
    p_stnm:'',
    p_stloc:''
}

   componentWillMount()  //lifecycle method calls before render()
   {
     if(!this.props.location.emp_data)
     {
       alert ("No props found!")
     }
     else
      {
          this.setState(
              {
                p_stid:this.props.location.emp_data.u_id,
                p_stnm:this.props.location.emp_data.u_name,
                p_stloc:this.props.location.emp_data.u_loc
              }    
          )
      }
   }


  render() {
    return(
      <div>
        <h1>WELCOME  {this.state.p_stid}</h1>
        <h2>Your Name :  {this.state.p_stnm}</h2>
        <h2>Your location : {this.state.p_stloc}</h2>
      </div> 
      // <div>
      //   <h1>WELCOME : {this.props.location.emp_data.u_id}</h1>
      //  <h2>Your Name : {this.props.location.emp_data.u_name} </h2>
      //  <h2>Your location : {this.props.location.emp_data.u_loc}</h2>
      // </div> 

    ); 

  }
}
export default Emp