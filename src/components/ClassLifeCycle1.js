import React, { Component } from 'react';  
  
class ClassLifeCycle1 extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "Reactjs"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
    console.log('Component render!') 
      return (  
         <div class="col-sm-4">  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"All!!- It is  Reactjs Life Cycle."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) { 
      console.log('shouldComponentUpdate is called!')  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
export default ClassLifeCycle1; 