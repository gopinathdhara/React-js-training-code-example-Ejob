import React from 'react'
class StateClass2 extends React.Component
{
    state={
        uname:'Gopi',
        ulocation:"Howrah",
        usubject:"React Js",
        ugender: "Male"
    }
    handleChange=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value
            },()=>{
                console.log(this.state);
            }
            
        );
    }
    render(){
        return (
            <div >
                <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                     <h3>State management by class</h3>
                        <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange} class="form-control"/><br/>
                        <input type="text" name="ulocation" value={this.state.ulocation} onChange={this.handleChange} class="form-control"/><br/>
                        <select name="usubject" onChange={this.handleChange} class="form-control">
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="React Js">React Js</option>
                        </select><br/>
                        <input type="radio" name="ugender" value="Male" onChange={this.handleChange}/> Male 
                         <input type="radio"  name="ugender" value="FeMale" onChange={this.handleChange}/> FeMale 
                        <br/>

                        <div style={{ 'margin-top':'30px' }}>
                            <table class="table table-striped" border="1" cellPadding="10" cellSpacing="10">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Subject</th>
                                        <th>Gender</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{this.state.uname}</td>
                                        <td>{this.state.ulocation}</td>
                                        <td>{this.state.usubject}</td>
                                        <td>{this.state.ugender}</td>
                                        
                                    </tr>
                                    
                                    </tbody>
                                </table>
                        </div>
                        <hr/>
                </div>
                
                
            </div>
        )
    }
}

export default StateClass2;