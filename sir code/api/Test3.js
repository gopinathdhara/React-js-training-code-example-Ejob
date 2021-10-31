import React from 'react';
import axios from 'axios';

class Test3 extends React.Component
{
    state={
        currency:'MYR',
        rates:[]
    }
   
    componentDidMount(){

        axios.get('https://api.exchangerate-api.com/v4/latest/'+this.state.currency
        ).then(res=>{
                console.log(res.data)
                console.log(res.data.rates)
                this.setState({rates:res.data.rates});
               // console.log(Object.keys(this.state.rates));
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render() {
        return (
            <>
            <h2>INR :</h2>
            {this.state.rates.INR}
            <br></br>
            <h2>AMD</h2>
            {this.state.rates.AMD}
            </>
        );
    }
}

export default Test3