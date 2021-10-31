import React from 'react';

class Third extends React.Component
{
  state={
      uname:'Sourav',
      uage:30,
      uloc:'kolkata'
  }

//   handleChange1=(e)=>{
//         this.setState({uname:e.target.value});
//   }

//   handleChange2=(e)=>{
//     this.setState({uage:e.target.value});
//   }

//   handleChange3=(e)=>{
//     this.setState({uloc:e.target.value});
//   }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value},
         ()=>{console.log(this.state);}
        )
    }


  render()
  {
      return(
          <div>
              <h3 id='head1'>NAME IS : {this.state.uname}</h3>
              <br></br>
              <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange}/>
              <h3 id='head2'>AGE IS : {this.state.uage}</h3>
              <br></br>
              <input type="number" name="uage" value={this.state.uage} onChange={this.handleChange}/>
              <h3 style={{color:'green',textAlign:'center'}}>LOCATION IS : {this.state.uloc}</h3>
              <br></br>
              <select name="uloc" onChange={this.handleChange}>
                    <option value="india">Ind</option>
                    <option value="australia">Aus</option>
                    <option value="pakistan">Pak</option>
                    <option value="bangladesh">Ban</option>
                    <option value="srilanka">SL</option>
              </select>
          </div>
      );
  }



}

export default Third