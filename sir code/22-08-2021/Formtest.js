import React from 'react'

class Formtest extends React.Component
{
    state={
        uname:'',
        age:'',
        loc:'',
        result:''
    }
    
     handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }

     
     showResult=(e)=>{
         let ans='Welcome...'+this.state.uname+'  Age is: '+this.state.age+' to your city: '+this.state.loc;
         this.setState({result:ans})
     }


    render(){
        return(
            <div>
                Name : <input type='text' name='uname' onChange={this.handleChange}/>
                <br></br>
                Age : <input type='number' name='age' onChange={this.handleChange}/>
                <br></br>
                Location : <input type='text' name='loc' onChange={this.handleChange}/>
                <br></br>
                <input type='button' value='show' onClick={this.showResult}/>
                <br></br>
                <h2 style={{color: "red",backgroundColor: "lightblue"}}>{this.state.result}</h2>
            </div>

        );
    }

}

export default Formtest