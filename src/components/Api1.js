import React, { useState } from "react";
import axios from "axios";

const Api1=()=>{

    const [id,setId]=useState();
    const [body,setBody]=useState();
    const [title,setTitle]=useState();
    const [userId,setUserId]=useState(); 

    const showData=()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
            console.log(res)
            setId(res.data.id)
            setBody(res.data.body)
            setTitle(res.data.title)
            setUserId(res.data.userId)
        }).catch((err)=>{
            console.log('error now')
             console.log(err)
        })
    }

    return (
        <>
        <div  class="col-sm-10" style={{border:'2px solid #ccc'}}>
            <h3>Api Call Axios </h3>
              <div>
                <button onClick={showData} class="btn btn-primary">Show Data</button>
                <br/>
                     <table class="table table-striped" style={{'margin':'10px'}}>
                            <tr>
                                <th>ID</th>
                                <th>UserID</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            <tr>
                                <td>{id}</td>
                                <td>{userId}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                    </table>        
              </div> 
        </div>
        </>
    )
};

export default Api1;