import React from 'react'
class StateClass1 extends React.Component
{
    state={
        uname:"gopi",
        uage:30,
        uloc:"kolkata"
    }
    handleChange1=(event)=>{
        this.setState({
            uname:event.target.value 
        });
    }
    handleChange2=(event)=>{
        this.setState({
            uage:event.target.value 
        });
    }
    handleChange3=(event)=>{
        this.setState({
            uloc:event.target.value 
        });
    }
     handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value, 
            
        },()=>{ console.log(this.state);});
        
    }
    render(){
        return (

            <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                <h3>State management by class1</h3>
                <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange} class="form-control"/><br/>
                 <input type="text" name="uage" value={this.state.uage} onChange={this.handleChange} class="form-control"/><br/>
                 <select name="uloc" onChange={this.handleChange} class="form-control">
                     <option value="India">India</option>
                     <option value="UK">UK</option>
                     <option value="Australia">Australia</option>
                 </select><br/>
                <p id="myname">Name: {this.state.uname}</p>
                <p style={ { color:'green'} }>Age: {this.state.uage}</p>
                <p>Location: {this.state.uloc}</p>
                <hr/>
            </div>
            
        )
    }
}
export default StateClass1;