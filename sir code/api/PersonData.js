import React from 'react';
import axios from 'axios';

class PersonData extends React.Component
{
 state={
     persons:[]
 }

 componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
      console.log('response :'+res.data);
        const persons = res.data;
        this.setState({ persons });
      }) 
      .catch( err=>{
           console.log('error :'+err);
      })
  }

  render() {
    return (
        <div>
            <h2>PERSON NAMES :</h2> 
         <ol>
           { this.state.persons.map(person => <li>{person.name}</li>)}
        </ol>
        <br></br>
            <h2>EMAIL ID:</h2>
          <ol>
          { this.state.persons.map(person => <li>{person.email}</li>)} 
          </ol>
          <br></br>
          <h2>City Names :</h2>
          <ol>
          { this.state.persons.map(person => <li>{person.address.city}</li>)} 
          </ol>
        </div>
     );
  }


}

export default PersonData