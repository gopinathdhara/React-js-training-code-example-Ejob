import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    address:[],
    company:[]
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
       // console.log('response :'+res.data);
        const persons = res.data;
        this.setState({ persons });
        //console.log(persons.address);
        this.setState({address:persons.address});
        this.setState({company:persons.company});
      }) 
      .catch( err=>{
           console.log('error :'+err);
      })
  }

  render() {
    return (
        <div>
            {/* <h2>NAMES :  {this.state.persons.name}</h2>  */}
         <ol>
           { this.state.persons.map(person => <li>{person.name}</li>)}
        </ol>
        <br></br>
            {/* <h2>EMAIL ID:{this.state.persons.email}</h2> */}
          <ul>
          { this.state.persons.map(person => <li>{person.email}</li>)} 
          </ul>
          <br></br>
          {/* <h2>Username : {this.state.persons.username}</h2> */}
          <ul>
          { this.state.persons.map(person => <li>{person.address.city}</li>)} 
          </ul>
          <br></br>
          {/* <h2>City : {this.state.address.city}</h2>
          <br></br>
          <h2>street : {this.state.address.street}</h2>
          <br></br>
          <h2>zipcode : {this.state.address.zipcode}</h2>
          <br></br>
          <h2>company name : {this.state.company.name}</h2> */}
        </div>
     );
  }
}