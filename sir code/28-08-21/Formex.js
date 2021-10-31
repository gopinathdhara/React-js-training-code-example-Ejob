import React from 'react';

class Formex extends React.Component
{
    state={
        uid:'',
        uid_error:'',
        pass:'',
        pass_error:'',
        loc:'',
        loc_error:'',
        age:0,
        age_error:'',
        email:'',
        email_error:'',
        gender:'',
        gender_error:'',
        lang:[],
        lang_error:''
    }
    
    handleChange=(e)=>{
        let index;
        if(e.target.name=="lang")
        {
         if(e.target.checked)
         {
             this.state.lang.push(e.target.value);
             console.log('if:',this.state.lang);
            //  console.log("state :"+this.state);
         }
         else
         {
             index=this.state.lang.indexOf(e.target.value);
             this.state.lang.splice(index,1);
             console.log('else:',this.state.lang);
         }
        }
        else
        {
            this.setState({[e.target.name]:e.target.value},()=>{
                console.log('state',this.state);
              })
        }  
     }

     mySubmitHandler=(e)=>{
         e.preventDefault(); //to prevent default page loading 
         let count=0
        if(this.state.uid =='')
        {
         this.setState({uid_error:'user id can not be blank'})
         count++
        }
        else{this.setState({uid_error:''}) }
        if(this.state.pass=='')
        {
            this.setState({pass_error:'passowrd can not be empty'})
            count++
        }
        else {this.setState({pass_error:''})}
        if(this.state.loc=='')
        {
            this.setState({loc_error:'location can not be empty'})
            count++
        }
        else {this.setState({loc_error:''})}
        if(this.state.age=='')
        {
            this.setState({age_error:'age can not be empty'})
            count++
        }
        else {this.setState({age_error:''})}
        if(this.state.email=='')
        {
            this.setState({email_error:'email can not be empty'})
            count++
        }
        else {this.setState({email_error:''})}
        if(this.state.gender=='')
        {
            this.setState({gender_error:'gender can not be empty'})
            count++
        }
        else {this.setState({gender_error:''})}
        if(this.state.lang=='')
        {
            this.setState({lang_error:'language can not be empty'})
            count++
        }
        else {this.setState({lang_error:''})}
        if(count==0)
        {
          alert("Form is submitting successfully")
        }
        else{
            return false
        }
     }
      

    render()
    {
        var myStyle = {  
            fontSize: 20,  
            fontFamily: 'Courier',  
            color: 'red'  
         }  
        return(
            <div>
            <form   onSubmit={this.mySubmitHandler}>
             <label style = {myStyle}>USERID :</label> 
             <input type="text" name="uid" onChange={this.handleChange}/> <span>{this.state.uid_error}</span>
             <br></br><br></br>
             <label style = {myStyle}>PASSWORD :</label> 
             <input type="password" name="pass" onChange={this.handleChange}/> <span>{this.state.pass_error}</span>
             <br></br><br></br>
             <label style = {myStyle}>LOCATION :</label> 
             <select name="loc" onChange={this.handleChange}>
             <option value="">Select country</option>
             <option value="india">IND</option>
             <option value="australia">AUS</option>
             <option value="sri lanka">SL</option>
             <option value="china">CH</option>
             </select> 
             <span>{this.state.loc_error}</span>
             <br></br><br></br>
             <label style = {myStyle}>AGE:</label> 
             <input type="number" name="age" onChange={this.handleChange}/> 
             <span>{this.state.age_error}</span>
             <br></br><br></br>
             <label style = {myStyle}>EMAIL:</label> 
             <input type="email" name="email" onChange={this.handleChange}/> 
             <span>{this.state.email_error}</span>
             <br></br><br></br>
             <label style = {myStyle}>GENDER:</label> 
             <input type="radio" name="gender" value="male" onChange={this.handleChange}/>Male
             <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female
             <span>{this.state.gender_error}</span> 
             <br></br><br></br>
             <label style = {myStyle}>LANGUAGES:</label> 
             <input type="checkbox" name="lang" value="Bengali" onChange={this.handleChange}/>Beng 
             <input type="checkbox" name="lang" value="Hindi" onChange={this.handleChange}/>Hindi 
             <input type="checkbox" name="lang" value="English" onChange={this.handleChange}/>Eng 
             <span>{this.state.lang_error}</span>
             <br></br><br></br>
             <input type="submit" value="Register"/>
             </form>
            </div>
        );
    }
}

export default Formex;