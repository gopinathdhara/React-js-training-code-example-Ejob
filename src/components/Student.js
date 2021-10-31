import React from 'react'

class Student extends React.Component
{
    state={
        p_stid:'',
        p_stnm:'',
        p_stloc:''
    }

    componentDidMount() //lifecycle method calls after render()
    {
      alert('componentdidmount is called');
      console.log('componentdidmount is called');
      if(!this.props.location.stud_data)
      {
          alert("No props found!")
      }
      else
      {
          this.setState(
              {
                p_stid:this.props.location.stud_data.st_id,
                p_stnm:this.props.location.stud_data.st_name,
                p_stloc:this.props.location.stud_data.st_loc
              }    
          )
      }
    }
    
    componentDidUpdate(prevState,prevProps)
    {
      alert('componentdidupdate is called');
      console.log('componentdidupdate is called');
        if(prevState.p_stid==this.state.p_stid)
        {
            alert('No state is updated')
        }
        else
        {
            alert('State update is done')
        }
    }



    render() {
        return(
          <div class="col-sm-4">
            <h3>WELCOME  {this.state.p_stid}</h3>
            <h3>Your Name :  {this.state.p_stnm}</h3>
            <h3>Your location : {this.state.p_stloc}</h3>
          </div> 
        ); 
    
      }
}
export default Student