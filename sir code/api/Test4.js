import React from 'react';
import axios from 'axios';

class Test4 extends React.Component
{
    state={
        name:'',
        gender:''
    }

     handleChange=(e)=>{
         this.setState({name:e.target.value});
     }

    checkName=(e)=>{
        axios.get('https://api.genderize.io/?name='+this.state.name
        ).then(res=>{
                console.log(res.data)
                this.setState({gender:res.data.gender});
            })
            .catch(err=>{
                console.log(err)
            })
    }



    render(){
      return(
        <>
          <h3 style={{color:'green'}}>CHECK YOUR GENDER ......</h3>
          ENTER YOUR NAME :
          <input type='text' name='name' placeholder='name plz' onChange={this.handleChange}/>
          <br></br>
          <button onClick={this.checkName}>CHECK</button>
          <br></br>
          <h3 style={{color:'brown'}}>YOUR GENDER IS : {this.state.gender}</h3>
        </>

      )}

}

export default Test4  