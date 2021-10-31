import React, { useState } from "react";
import axios from "axios";

const Api2=()=>{

    const [details,setDetails]=useState(  

                    //define the structure for nested object
                    {
                            "id": "",
                            "name": "",
                            "username": "",
                            "email": "",
                            "address": {
                                    "street": "",
                                    "suite": "",
                                    "city": "",
                                    "zipcode": "",
                                    "geo": {
                                        "lat": "",
                                        "lng": ""
                                    }
                            },
                            "phone": "",
                            "website": "",
                            "company": {
                                    "name": "",
                                    "catchPhrase": "",
                                    "bs": ""
                            }
                    }
    );

    const showData=()=>{

        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{

            console.log(res.data[9])

            setDetails({

                "id":res.data[9].id,
                "name":res.data[9].name,
                "username":res.data[9].username,
                "email":res.data[9].email,
                "phone": res.data[9].phone,
                "website": res.data[9].website,
                "address":{
                    "street":res.data[9].address.street,
                    "suite":res.data[9].address.suite,
                    "city":res.data[9].address.city,
                    "zipcode":res.data[9].address.zipcode,
                    "geo":  {
                                "lat": res.data[9].address.geo.lat,
                                "lng": res.data[9].address.geo.lng,
                            }
                },
                "company": {
                                "name": res.data[9].company.name,
                                "catchPhrase": res.data[9].company.catchPhrase,
                                "bs": res.data[9].company.bs
                            }

            })
        }).catch((err)=>{
            console.log('error now')
             console.log(err)
        })
    }

    return (
        <>
        <div  class="col-sm-10" style={{border:'2px solid #ccc'}}>
            
            <h3>Api Call Axios 1 </h3>
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
                            <tr>
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
                    
                    </table>        
              </div> 
                
        </div>
        </>
  
    )
};

export default Api2;