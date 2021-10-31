import React from 'react'
class FormFinal1 extends React.Component
{
    state={
        uname:'',
        uname_error:'',
        uemail:'',
        uemail_error:'',
        upass:'',
        upass_error:'',
        uage:0,
        uage_error:'',
        lang:[],
        lang_error:'',
        gender:'',
        gender_error:'',
        cars:'',
        cars_error:''

    }
    language=[];

    myOnChange=(event)=>{
        if(event.target.name=="lang"){
            if(event.target.checked==true){
                //alert("checked");
                //this.state.lang.push(event.target.value);
                this.language.push(event.target.value);
                this.setState({
                    lang:this.language
                })
            }else{
                var ind=this.language.indexOf(event.target.value);
                this.language.splice(ind,1);
                this.setState({
                    lang:this.language
                })
            }
            console.log('state'+this.state);
        }else{
            this.setState({
            [event.target.name]:event.target.value
            },()=>{
            console.log('state'+this.state);
            });
        }
        
        //this.state.uname=event.target.value;
    }
    myOnSubmit=(event)=>{
        event.preventDefault();
        var count=0;
        if(this.state.gender==""){
            count++;
            this.setState({
                gender_error:"Gender is required"
            },()=>{
                console.log('state'+this.state);
            })
        }else{
             this.setState({
                gender_error:""
            },()=>{
                console.log('state'+this.state);
            })
        }
        if(this.state.uname==""){
            count++;
            this.setState({
                uname_error:"Name is required"
            },()=>{
                console.log('state'+this.state);
            })
        }else{
             this.setState({
                uname_error:""
            },()=>{
                console.log('state'+this.state);
            })
        }
        if(this.state.uemail==""){
            count++;
            this.setState({
                uemail_error:"Email is required"
            },()=>{
                console.log('state'+this.state);
            })
        }else{
             this.setState({
                uemail_error:""
            },()=>{
                console.log('state'+this.state);
            })
        }
        if(this.language.length==0)
        {
            this.setState({lang_error:'language can not be empty'})
            count++
        }
        else {this.setState({lang_error:''})}

         if(this.state.cars==""){
            count++;
            this.setState({
                cars_error:"Car is required"
            },()=>{
                console.log('state'+this.state);
            })
        }else{
             this.setState({
                cars_error:""
            },()=>{
                console.log('state'+this.state);
            })
        }

        if(count==0){
            alert("Form submitted successfully");
        }else{
             alert("Form has error");
             return false
        }
    }
    render(){
        return(
            <div class="col-sm-4" style={{padding:'10px',margin:'50px','text-align':'center'}}>
              <h3>Registration Form Validation</h3>
              <form onSubmit={this.myOnSubmit}>
                        <p>
                            <input type="radio" name="gender" value="male" onChange={this.myOnChange}/>Male
                            <input type="radio" name="gender" value="female" onChange={this.myOnChange}/>Female
                             
                        </p>
                        <p><span style={{color:'red'}}>{this.state.gender_error}</span></p>
                        <p><input type="text" placeholder="Enter Your Name" name="uname" onChange={this.myOnChange} class="form-control" autoComplete="off"/>

                        <span>{this.state.uname}</span>

                        <span style={{color:'red'}}>
                            {this.state.uname_error}
                        </span></p>

                        <p><input type="text" placeholder="Enter Your Email" name="uemail" onChange={this.myOnChange} class="form-control" autoComplete="off"/>

                        <span>{this.state.uemail}</span>

                        <span style={{color:'red'}}>
                            {this.state.uemail_error}
                        </span></p>
                        
                        <p>
                            <label> LANGUAGES: </label> 
                            <input type="checkbox" name="lang" value="Bengali" onChange={this.myOnChange}/>Beng 
                            <input type="checkbox" name="lang" value="Hindi" onChange={this.myOnChange}/>Hindi 
                            <input type="checkbox" name="lang" value="English" onChange={this.myOnChange}/>Eng 
                           
                            
                        </p>
                        <p><span style={{color:'red'}}>{this.state.lang_error}</span></p>
                        <p> <span>{this.state.lang}</span></p>
                        <p>
                            <label> Cars: </label> 
                                <select name="cars" id="cars" onChange={this.myOnChange}>
                                    <option value="">Select</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                                </select>
                        </p>
                        <p><span style={{color:'red'}}>{this.state.cars_error}</span></p>
                        <p><input type="submit" value="Register" class="btn btn-success"/></p>
              </form>
               
            </div>
        )
    }
}

export default FormFinal1;