import React, { useState } from "react";
import axios from "axios";

const Api3=()=>{
    const [userDetails,setUserDetails]=useState(  
        []
    ); 
    const showData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUserDetails(res.data)
        }).catch((err)=>{
             console.log('error now')
             console.log(err)
        })
    }

    const getData=()=>{
        return userDetails.map((details,i)=>{
                    return (
                                    <tr  key={i}>
                                        <td>{details.id}</td>
                                        <td>{details.name}</td>
                                        <td>{details.username}</td>
                                        <td>{details.email}</td>
                                        <td>{details.phone}</td>
                                        <td>{details.website}</td>
                                        <td>
                                            street: {details.address.street}<br/>
                                            suite: {details.address.suite}<br/>
                                            city: {details.address.city}<br/>
                                            zipcode: {details.address.zipcode}<br/>
                                            lat: {details.address.geo.lat}<br/>
                                            lng: {details.address.geo.lng}<br/>
                                        
                                        </td>
                                        <td>
                                            name: {details.company.name}<br/>
                                            catchPhrase: {details.company.catchPhrase}<br/>
                                            bs: {details.company.bs}<br/>
                                        </td>
                                    </tr>
                            )
        });
    }

    return (
        <>
        <div  class="col-sm-10" style={{border:'2px solid #ccc'}}>
            <h3>Api Call Axios 3 </h3>
              <div>
                <button onClick={showData} class="btn btn-primary">Show Data</button>
                <br/>
                     <table class="table table-striped table-dark" style={{'margin':'10px'}}>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Address</th>
                                <th>company</th>
                            </tr>
                            {getData()}
                    </table>        
              </div> 
        </div>
        </>
    )
};

export default Api3;