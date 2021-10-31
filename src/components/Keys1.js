import React from 'react';

class Keys1 extends React.Component
{
    constructor(props){
        super(props);
        this.active="Hi I am class variable"
        this.state={
            data:[
                    "India",
                    "Australia",
                    "UK",
                    "America",
                    "Newzland"
                ],
                activeState:"Hi I am state variable"
        }
    }
    getMyData=()=>{
        console.log("active class variable "+this.active);
        return this.state.data.map((elem,index)=>{
            return <li key={index}>{elem}</li>;
        })
    }
    changeClassVariable=()=>{
        alert("class variable called")
        this.active="Hello I am updated class variable"
       
    }
    changeState=()=>{
        alert("state variable called")
        this.setState({
            activeState:"Hello I am updated state variable"
        })
    }
    render(){
        return(
            <div class="col-sm-6">
                <h3>Keys</h3>
                <h5>A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. It also helps to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time.</h5>
                <ul>
                    {this.getMyData()}
                </ul>
                <h5 style={{color:'red'}}>ReactJS - What is difference between component state and class variable ?</h5>
                <h4>The difference between the two is that React will re-render your component when state changes (with this.setState(/*...*/)).
                If you update the class variable, React will be unaware of it and won't re-render your component.</h4>
                <h4 style={{color:'blue'}} > Class variable : {this.active}</h4>
                <h4 style={{color:'green'}}> State variable : {this.state.activeState}</h4>
                <button onClick={this.changeClassVariable} class="btn btn-danger">Click to see class variable</button> &nbsp;
                <button onClick={this.changeState} class="btn btn-primary">Click to see state variable</button>
            </div>
        );
    }
}
export default Keys1;