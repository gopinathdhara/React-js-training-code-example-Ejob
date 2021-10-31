import React from 'react';
import axios from 'axios';

class Test1 extends React.Component
{
    state={
        name:'John'
    }
    checkApi=(e)=>{

        axios.get('https://api.genderize.io/?name='+this.state.name
        ).then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render() {
        return (
            <button onClick={this.checkApi}>Show</button>
        );
    }

}

export default Test1