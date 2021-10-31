import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    user_name: '',
    user_email: '',
    user_mb: '',
    user_gen: '',
    user_loc: '',
    msg: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/CI_Webservice/CrudControl/insertData',
      JSON.stringify({
        user_name: this.state.user_name,
        user_email: this.state.user_email,
        user_contact: this.state.user_mb,
        user_gender: this.state.user_gen,
        user_location: this.state.user_loc
      })).then(res => {
        console.log(res.data)
        this.setState({ msg: 'USER REGISTRATION SUCCESSFUL !' });
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <>
        <form name="fm" onSubmit={this.handleSubmit}>
          NAME : <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange} />
          <br></br><br></br>
          EMAIL : <input type="email" name="user_email" value={this.state.user_email} onChange={this.handleChange} />
          <br></br><br></br>
          MOBILE : <input type="text" name="user_mb" value={this.state.user_mb} onChange={this.handleChange} />
          <br></br><br></br>
          GENDER :
          <input type="radio" name="user_gen" value="Male" onChange={this.handleChange} />MALE
          <input type="radio" name="user_gen" value="Female" onChange={this.handleChange} />FEMALE
          <br></br><br></br>
          LOCATION :
          <select name="user_loc" onChange={this.handleChange}>
            <option value="">Select Location</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="srilanka">SriLanka</option>
            <option value="pakistan">Pakistan</option>
          </select>
          <br></br><br></br>
          <input type="submit" value="REGISTER" />
        </form>
        <br></br><br></br>
        <h3>{this.state.msg}</h3>
      </>
    );
  }


}

export default Register