import React from 'react'

class Form3 extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      mySubmitHandler = (event) => {
         event.preventDefault(); //prevent the form from actually being submitted
        if(this.state.username)
        {
          alert("You are submitting " + this.state.username);
        }
        else
        {
          alert("Provide usernamr.....");
        }
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      render() {
        return (
          <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          <input
            type='submit'
          />
          </form>
        );
      }
}

export default Form3