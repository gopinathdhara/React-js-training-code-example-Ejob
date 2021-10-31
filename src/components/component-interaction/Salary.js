import React from 'react'
class Salary extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            bs:this.props.bs_props,
            hra:this.props.hra_props,
            spa:this.props.spa_props
        }
    }  
    myOnChange=(event)=>{
         this.setState({
            [event.target.name]:event.target.value, 
            
        },()=>{ console.log(this.state);});
    }
    updateForm=()=>{
        console.log("called click")
        var totSalary=parseInt(this.state.bs)+parseInt(this.state.hra)+parseInt(this.state.spa);
        this.props.salaryChange(totSalary)
    }
    render(){
        return (
            <div >
               
                    <h4>
                         <b>Basic Salary :</b>  
                        <input type="text" name="bs" value={this.state.bs} onChange={this.myOnChange}/>
                       
                    </h4>
                    <h4>
                        <b>Hra :</b>
                        <input type="text" name="hra" value={this.state.hra} onChange={this.myOnChange}/>
                         
                    </h4>
                    <h4>
                        <b> Special Allowance :</b>
                        <input type="text" name="spa" value={this.state.spa} onChange={this.myOnChange}/>
                        
                    </h4>
                    <p>
                        <button value="Update" onClick={this.updateForm}>Update</button>
                    </p>
            </div>
        )
    }
}
export default Salary;