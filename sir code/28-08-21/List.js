import React from 'react'

const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
const listItems = myList.map((value)=>{   
        return <li>{value}</li>;   
    });  
class List extends React.Component
{
    render(){
        return(
           <div>
               <h2>Rendering Lists inside component</h2>  
            <ul>{listItems}</ul>
            <br></br>
            <br></br>
            <ol>{listItems}</ol>
           </div>
        );

    }
     
}

export default List;