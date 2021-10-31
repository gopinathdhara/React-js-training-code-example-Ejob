import React from 'react'
class Form2 extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            username:'',
            uage:'',
            uloc:'',
            result:''
        }
    }
    myChangeHandler=(event)=>{
       
        var nam=event.target.name;
        var val=event.target.value;
        
        this.setState({
            [nam]:val
        })
    }
    myClickHandler=(event)=>{
        var result=(
            <div>
                <h4>Name : { this.state.username }</h4>
                <h4>Age : { this.state.uage }</h4>
                <h4>Location : { this.state.uloc }</h4>
            </div>
        )
        this.setState({
            result:result
        })
    }
    render(){
        //condtional rendering by if else,ternary operator,switch case
        //show result when click on button oterwise result will not be updated
        var data='';
        if(this.state.result!==""){
                data=<div>
                    Result: {this.state.result} 
                </div>;
        }
        return (
            <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
            <form>
                <h3>Form Management By Class</h3>
                <p>condtional rendering by if else,ternary operator,switch case</p>
                <p>Enter name</p>
                 <p><input type="text" name="username" onChange={this.myChangeHandler} autoComplete="off"/></p>
                 <p>Enter age</p>
                 <p><input type="number" name="uage" onChange={this.myChangeHandler} autoComplete="off"/> <span style={{color:'red'}}>{this.state.err}</span></p>
                 <p>Enter Location</p>
                 <p><input type="text" name="uloc" onChange={this.myChangeHandler} autoComplete="off"/> </p>
                <p><input type="button" value="Show" class="btn btn-primary" onClick={this.myClickHandler}/> </p>
                {data}
            </form>
            <hr/>
            </div>
        )
    }
}
export default Form2;