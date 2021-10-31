import React from 'react'

const data = [ 
    {id:'',title :'Default',content:'select content'} ,
    {id: 1, title: 'First', content: 'Welcome to JavaTpoint!!'},  
    {id: 2, title: 'Second', content: 'It is the best ReactJS Tutorial!!'},  
    {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS topics!!'}  
  ];  

const showdata=data.map((item)=>{
   return <option value={item.id}>{item.content}</option>;
});

const showlist=data.map((item)=>{
   return <li key={item.id}>{item.content}</li>;
});


class Keys extends React.Component
{
    render(){
        return(
          <div>
              <h2>rendering using keys,list,dropdown in dom</h2>
              <select>{showdata}</select>
              <br></br><br></br>
              <ul>{showlist}</ul>
              <br></br><br></br>
              <ol>{showlist}</ol>
          </div>
        );
    }

}

export default Keys;