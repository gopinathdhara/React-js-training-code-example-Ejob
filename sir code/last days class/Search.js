import React from 'react';
import axios from 'axios';

class Search extends React.Component
{
    state={user_id:'',
           name:'',
           email:'',
           mob:'',
           gen:'',
           loc:'',
           msg:''
          }


    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

     
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost/CI_Webservice/CrudControl/showByID',
        JSON.stringify({
            "id":this.state.user_id
        })).then(res=>{
                 console.log(res.data);
                // console.log(res.data.user[0]);
                let flag=res.data.success;
                if(flag==1)
                {
                  this.setState({name:res.data.user[0].username});
                  this.setState({email:res.data.user[0].email});
                  this.setState({mob:res.data.user[0].phone});
                  this.setState({gen:res.data.user[0].gender});
                  this.setState({loc:res.data.user[0].location});
                  this.setState({msg:''});
                }
                else
                {
                  this.setState({msg:'UserID is wrong. Try Again!'});
                  this.setState({name:''});
                  this.setState({email:''});
                  this.setState({mob:''});
                  this.setState({gen:''});
                  this.setState({loc:''});
                }

            })
            .catch(err=>{
                console.log(err)
            })
    }



    render()
    {
        return(
            <>
             <h4>SEARCH EMPLOYEE  :</h4>
              <form onSubmit={this.handleSubmit}>
                EMPLOYEE ID : 
                <input type="number" name="user_id"  value={this.state.user_id} onChange={this.handleChange}/>
                <br></br><br></br>
                <input type="submit" value="SEARCH"/>
              </form>
               <br></br><br></br>
               <h4>{this.state.msg}</h4>
               <br></br><br></br>
               <table style={{backgroundColor:'lightgreen',color:'brown',width:'50%'}}>
                    <tr style={{border:'3px ridge brown'}}>
                       <th>NAME</th>
                       <th>EMAIL</th>
                       <th>MOBILE</th>
                       <th>GENDER</th>
                       <th>LOCATION</th>
                    </tr>
                    <tr style={{border:'3px ridge brown'}}>
                        <td>{this.state.name}</td>
                        <td>{this.state.email}</td>
                        <td>{this.state.mob}</td>
                        <td>{this.state.gen}</td>
                        <td>{this.state.loc}</td>
                    </tr>
               </table>

            </>
        );
    }



}

export default Search