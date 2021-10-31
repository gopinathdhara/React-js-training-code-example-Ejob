import React from 'react'
import InterestCalcFunction from './InterestCalcFunction'
class interestShowClass extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            principal:'',
            rate:'',
            time:'',
            principal_error:'',
            rate_error:'',
            time_error:'',
            //for result
            principalResult:'',
            rateResult:'',
            timeResult:'',

        }
    }
    updatePrincipal=(event)=>{
        this.setState({
            principal:event.target.value
        })
    }
    updateRate=(event)=>{
        this.setState({
            rate:event.target.value
        })
    }
    updateTime=(event)=>{
        this.setState({
            time:event.target.value
        })
    }
    formSubmit=(event)=>{
        event.preventDefault();
         var rgx = /^[0-9]*\.?[0-9]*$/;
        var count=0;
        if(this.state.principal==""){
            count++;
            this.setState({
                principal_error:"Please enter principle"
            })
        }else{
            var res2 = rgx.test(this.state.principal);
            if(res2===false){
                this.setState({
                    principal_error:"Characters are not allowed in principal"
                })
            }else{
                 this.setState({
                principal_error:""
                })
            }
           
        }
        if(this.state.rate==""){
            count++;
            this.setState({
                rate_error:"Please enter rate"
            })
        }else{
            var res = rgx.test(this.state.rate);
            //alert(res);
            if(res===false){
                this.setState({
                    rate_error:"Characters are not allowed in rate"
                })
            }else{
                this.setState({
                     rate_error:""
                })
            }
            
        }
        if(this.state.time==""){
            count++;
            this.setState({
                time_error:"Please enter time"
            })
        }else{
            var res1 = rgx.test(this.state.time);
            if(res1===false){
                this.setState({
                    time_error:"Characters are not allowed in time"
                })
            }else{
                    this.setState({
                        time_error:""
                 })
            }
            
        }
        if(count==0){

            //alert('form sumitted successfully')
             this.setState({
                    principalResult:this.state.principal
                })
            this.setState({
                    rateResult:this.state.rate
                })
            this.setState({
                    timeResult:this.state.time
                })    

        }else{
           // alert('form has error')
        }
    }
    render(){
        return(
            <div class="col-sm-6" style={{padding:'10px','text-align':'center',border:'1px solid #ccc',margin:'0 auto','border-radius':'5px'}}>
                <h4 style={{color:'brown'}}>Props Example Simple Interest - Assignment</h4>
                    <form onSubmit={this.formSubmit}>
                        <fieldset>
                            <div class="form-group">
                                <label for="email">Principal:</label>
                                <input type="principal" class="form-control" placeholder="Enter Principal" name="principal" onChange={this.updatePrincipal}/>
                                <p style={{color:'red'}}>{this.state.principal_error}</p>
                            </div>
                            <div class="form-group">
                                <label for="email">Rate:</label>
                                <input type="text" class="form-control" placeholder="Enter Rate" name="rate" onChange={this.updateRate}/>
                                <p style={{color:'red'}}>{this.state.rate_error}</p>
                            </div>
                            <div class="form-group">
                                <label for="email">Time:</label>
                                <input type="text" class="form-control" placeholder="Enter Time" name="time" onChange={this.updateTime}/>
                                <p style={{color:'red'}}>{this.state.time_error}</p>
                            </div>
                            <div class="form-group">
                                    <input type="submit" class="btn-success" value="Calculate"/>
                            </div>
                            
                        </fieldset>
                        
                    </form>
                    <InterestCalcFunction principalParam={this.state.principalResult} rateParam={this.state.rateResult} timeParam={this.state.timeResult}/>
            </div>
        )
    }
    
}
export default interestShowClass;