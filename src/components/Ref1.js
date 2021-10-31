import React from 'react'
class Ref1 extends React.Component
{
    constructor(props){
        super(props)
        this.callRef=React.createRef()
        this.callRef1=React.createRef()
        this.callRef2=React.createRef()
        this.myClick=this.myClick.bind(this)
    }
    myClick=()=>{
        this.callRef.current.value="Hi Good Day"
        this.callRef1.current.innerText="Good Morning"
        this.callRef2.current.innerText="Subject React Js"
    }
    render(){
        return (

            <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                <h3>Ref</h3>
                <h5>It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.</h5>
                <input type="text" name="uname" ref={this.callRef} class="form-control"/><br/>
                <input type="button" value="Click" onClick={this.myClick} />
                <h3 ref={this.callRef1}>Hi Gopi</h3>
                <h4 ref={this.callRef2}>Subject Angular</h4>
                 
            </div>
            
        )
    }
}
export default Ref1;