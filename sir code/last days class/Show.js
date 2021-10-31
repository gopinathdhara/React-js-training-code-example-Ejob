import React from 'react';
import axios from 'axios';

class Show extends React.Component
{
    state={
        userdata:[]
    }

    showInfo=(e)=>{
        axios.get('http://localhost/CI_Webservice/CrudControl/showData'
        ).then(res=>{
                //console.log(res.data.user.data)
                this.setState({userdata:res.data.user.data});
            })
            .catch(err=>{
                console.log(err)
            })
    }

    
    render()
    {
        return(
               <>
                 <h3>USER DATA LISTING :</h3>
                 <br></br>
                 <input type="button" value="GET INFO" onClick={this.showInfo}/>
                 <br></br><br></br>
                 <table style={{backgroundColor:'lightgreen',color:'brown',width:'50%'}}>
                    <tr style={{border:'3px ridge brown'}}>
                       <th>ID</th>
                       <th>NAME</th>
                       <th>EMAIL</th>
                       <th>MOBILE</th>
                       <th>GENDER</th>
                       <th>LOCATION</th>
                    </tr>
                     {
                       this.state.userdata.map((items)=>{
                           //console.log(items.phone);
                       return(
                           <tr>
                               <td>{items.id}</td>
                               <td>{items.username}</td>
                               <td>{items.email}</td>
                               <td>{items.phone}</td>
                               <td>{items.gender}</td>
                               <td>{items.location}</td>
                           </tr>
                       )
                      })
                     }
                </table>
               </>
        );
    }
}

export default Show