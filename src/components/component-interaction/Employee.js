import React from 'react'
import Salary from './Salary';
class Employee extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            updatedSalary:0
        }
    }  
   updateSalary=(updatedSalary)=>{
        this.setState({
            updatedSalary:updatedSalary
        })
    }
    
    render(){
        var data='';
        if(this.state.updatedSalary>0){
            data=   <h4>
                        <b>Updated Salary :</b>  {this.state.updatedSalary}
                    </h4>
        }
        return (
            <>
            <div class="col-sm-10" style={{'border':'2px solid #ccc','padding':'10px','margin':'20px','border-radius':'10px'}}>
                <h3>Interaction between Components in React using props</h3>
                <h4>Now Employee is the Parent and Salary Component is the Child. Parent Component is passing the Data to Child Components through properties.Now We want to allow People to change the salary details let it be Basic or HRA or Special Allowance , Resulting Updated Total Salary in the Employee Component should get displayed.That means we have to Pass the data from Child to Parent.</h4>
                <h4 style={{'text-decoration':'underline','color':'blue'}}>Employee Details</h4>
                    <h4>
                       <b>Id :</b>  {this.props.id}
                    </h4>
                    <h4>
                         <b>Name :</b> {this.props.name}
                    </h4>
                    <h4>
                        <b>Salary :</b>  {this.props.salary}
                    </h4>
                    {data}
                    <hr/>
                    <h4 style={{'text-decoration':'underline','color':'red'}}>Salary Details</h4>
                    <Salary bs_props={this.props.basicSalary} hra_props={this.props.hra} spa_props={this.props.specialAllowance} salaryChange={this.updateSalary} />

            </div>
            
            </>
        )
    }
}
export default Employee;