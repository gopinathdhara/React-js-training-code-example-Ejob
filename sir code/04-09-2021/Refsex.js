import React from 'react'

class Refsex extends React.Component
{
    constructor(props) {  
        super(props);  
        this.callRef = React.createRef();  //create a reference 
        this.callRef2= React.createRef();
        this.callRef3=React.createRef();
        this.addingRefInput = this.addingRefInput.bind(this);
        this.textchng=this.textchng.bind(this);
      } 
      
      addingRefInput() {  
        //this.callRef.current.focus();  
        alert(this.callRef.current.value+"......."+this.callRef2.current.value);
      }  

      textchng(){
        this.callRef.current.value="hello thank you";
        //this.callRef2.current.value="Have a nice day!!!!";
        this.callRef3.current.innerText="Thank you visit again!";
      }
      
      render() {  
        return (
            <div>
              ENTER NAME:
              <input type="text"  ref={this.callRef} />  
              <br></br>
              ENTER DATE:
              <input type="date" ref={this.callRef2}/>
              <br></br>
              <input  type="button"  value="Click"  onClick={this.addingRefInput}  />  
              <br></br>
              <input  type="button"  value="Show"  onClick={this.textchng}  /> 
              <br></br>
              <h2 ref={this.callRef3}>Welcome to this page!</h2>
            </div>  
        );  
      }  

}

export default Refsex