// import React from 'react'

// function Message(props){
//     if(props.isLoggedIn){
//         return <h1>Welcome Back</h1>
//     }else{
//         return <h1>Please login first</h1>
//     }
// }
// function Login(props){
//     return (
//         <button onClick={props.clickInfo}>Login</button>
//     )
// }
// function Logout(props){
//     return (
//         <button onClick={props.clickInfo}>Logout</button>
//     )
// }
// class Props1 extends React.Component
// { 
//     constructor(props){
//         super(props);
//         this.handleLogin=this.handleLogin.bind(this);
//         this.handleLogout=this.handleLogout.bind(this);
//         this.state={
//             isLoggedIn:false
//         }
//     }
//     handleLogin=()=>{
//         this.setState({isLoggedIn:true})
//     }
//     handleLogout=()=>{
//         this.setState({isLoggedIn:false})
//     }
//     render(){
//         return(
//             <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
//                 <h3>Props</h3>
//                 <Message isLoggedIn={this.state.isLoggedIn}/>
//                 {
//                     (this.state.isLoggedIn)?(
//                         <Logout clickInfo={this.handleLogout}/>
//                     ):(
//                          <Login clickInfo={this.handleLogin}/>
//                     )
//                 }
//             </div>
//         );
//     }
// }
// export default Props1;

import React from 'react'

function Message(props){
    if(props.isLoggedIn){
        return (
                  <div >
                    <h4> Welcome Back Good Day! </h4>
                   </div>
        )
    }else{
        return (
                  <div>
                    <h4> Please Login First Good Day!  </h4>
                   </div>
        )
    }
}

function Login(props){
    return <button onClick={props.myLogin} class="btn-warning">Login</button>
}
function Logout(props){
    return <button onClick={props.myLogout} class="btn-success">Logout</button>
}

class Props1 extends React.Component
{
    
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    myLogin=()=>{
        //alert("login")
        this.setState({
            isLoggedIn:true
        },()=>{
            console.log(this.state);
        })
    }
    myLogout=()=>{
        //alert("logout")
        this.setState({
            isLoggedIn:false
         },()=>{
            console.log(this.state);
        })
    }
    render(){
        
        var data='';
        if(this.state.isLoggedIn){
            data= <div >
                    <Message isLoggedIn={this.state.isLoggedIn}/>
                    <p><Logout myLogout={this.myLogout}/></p>
                   </div>;

        }else{
            data= <div >
                    <Message isLoggedIn={this.state.isLoggedIn}/>
                    <p><Login myLogin={this.myLogin}/></p>
                  </div>;
        }
        return (
            <div class="col-sm-6" style={{padding:'10px',margin:'50px','text-align':'center'}}>
                <h3>Props example</h3>
                {data}
            </div>
        );
    }
}
export default Props1;