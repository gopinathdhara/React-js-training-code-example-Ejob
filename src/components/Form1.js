import React from 'react' //import React,{Component} from 'react' - class Form1 extends React
class Form1 extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            username:'',
            uage:'',
            err:''
        }
    }
    myChangeHandler=(event)=>{
        // this.setState({
        //     username:event.target.value
        // })

        //##########form validation#######
        var nam=event.target.name;
        var val=event.target.value;
        var err="";
        if(nam=="uage"){
            if(val==""){
                err=<strong>Your age must not be empty</strong>
            }
            else if(val<=18){
                err=<strong>Your age must be greater than 18</strong>
            }
        }
         this.setState({
            err:err
        })
        this.setState({
            [nam]:val
        })
    }
    //form submit
    mySubmitHandler=(event)=>{
        event.preventDefault();
        if(this.state.username){
            alert("you are submitting "+this.state.username);
        }else{
            alert("Please provide username");
        }
    }
    render(){
        var header='';
        //condtional rendering by if else,ternary operator,switch case
        if(this.state.username){
            header=<h3>Hello {this.state.username} </h3>;
        }else{
            header='';
        }
        return (
            <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                    <form onSubmit={this.mySubmitHandler}>
                        <h3>Form Management By Class</h3>
                        <p>condtional rendering by if else,ternary operator,switch case</p>
                        <p>{header}</p>
                        <p>Enter name</p>
                        <p><input type="text" name="username" onChange={this.myChangeHandler} autoComplete="off"/></p>
                        <p><input type="number" name="uage" onChange={this.myChangeHandler} autoComplete="off"/> </p>
                        <p><span style={{color:'red'}}>{this.state.err}</span></p>
                        <p><input type="submit" value="submit" class="btn btn-primary"/> </p>
                        </form> 
                        <hr/>
                        
             </div>
            
        )
    }
}
export default Form1;