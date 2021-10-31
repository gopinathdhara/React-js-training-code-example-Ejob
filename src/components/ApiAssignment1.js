import React from 'react';
import axios from 'axios';

class ApiAssignment1 extends React.Component
{
    constructor(props) {  
        super(props);  
        this.state ={
            //for all countries
            countryNames:[],
            //call api with name to get details
            name:'',
            //for details
            countryDetails:{},
            currencies:{},
            flags:{},
            languages:{}
        }  
    }  

    //The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server.

    //call api get all countries before render
     componentWillMount(){
         console.log('Component Will MOUNT!')  
         axios.get('https://restcountries.com/v3.1/all').then((res)=>{
            // console.log(res.data);
             this.setState({
                 countryNames:res.data
             })
         })
    }
    componentDidMount(){
        console.log('Component Did MOUNT!')  
    }
    setCountryName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    //get details call api after details button click
    getDetails=()=>{
        axios.get('https://restcountries.com/v3.1/name/'+this.state.name+'?fullText=true').then((res)=>{
             console.log(res.data[0]);
             var data=res.data[0];
             var currency='';
             var languages='';
             if(typeof data.currencies!="undefined") {
                     currency=data.currencies[Object.keys(data.currencies)[0]];
             }
             if(typeof data.languages!="undefined") {
                     languages=data.languages[Object.keys(data.languages)[0]];
             }
             this.setState({
                 countryDetails:data,
                 currencies:currency,
                 flags:data.flags.png,
                 languages:languages
             })
             console.log(this.state.countryDetails);
         })
    }
    populateDetailsData=()=>{

       var details=''
       if(this.state.countryDetails.hasOwnProperty("capital")){
            var symbol='';
            var currencyName='';
            var flags1='';
            var languages='';
            if(typeof this.state.currencies!="undefined"){
                symbol=this.state.currencies.symbol;
                currencyName=this.state.currencies.name;
            }
            if(typeof this.state.languages!="undefined"){
                languages=this.state.languages;
            }
            if(typeof this.state.flags!="undefined"){
                flags1=<img src={this.state.flags} alt="Flags" style={{"height":"100px"}}/>;
            }
            details=<tr>
            <td>{this.state.countryDetails.capital?this.state.countryDetails.capital:''}</td>
            <td>{symbol} {currencyName}</td>
            <td>{flags1}</td>
            <td>{this.state.countryDetails.population?this.state.countryDetails.population:''}</td>
            <td>{this.state.countryDetails.region?this.state.countryDetails.region:''}</td>
            <td>{languages}</td>
            </tr>
        }
         return details;       
    }
    render(){

        var heading="Country List Assignment -  Live Api"
        var info="Information For Country "+this.state.name+":";
        return(
            <>
            <div class="col-sm-10" style={{border:'2px solid green','padding':'20px','margin':'20px','border-radius':'10px','background':'aquamarine'}}>
              
              <fieldset class="border p-2">
                   <legend class="w-auto"><h3 class="hdng">{heading}</h3></legend> 
                <div>
                    <select name="name" class="form-control" style={{'width':"50%",'margin':'0 auto'}} onChange={this.setCountryName}>
                    <option value="">---Select Country---</option>
                    { 
                        this.state.countryNames.map((elem,index)=>{
                            return <option value={elem.name.common}>{elem.name.common}</option>
                         })
                    }
                    </select>
                </div>
                <div style={{'margin-top':'20px'}}>   
                        <button class="btn btn-success" onClick={this.getDetails}>Details</button>
                </div>
                {
                                    this.populateDetailsData()?
                                            <div style={{'margin-top':'20px'}}>  
                                                                <h3 style={{'color':'red'}}>{info}</h3> 
                                                                <table class="table table-striped table-dark" border="2px" cellPadding="10px" cellSpacing="10px" >
                                                                        <thead>
                                                                        <tr>
                                                                            <th>Capital</th>
                                                                            <th>Currency</th>
                                                                            <th>Image</th>
                                                                            <th>Population</th>
                                                                            <th>Region</th>
                                                                            <th>Lang</th>
                                                                        </tr>
                                                                        </thead>
                                                                        
                                                                        <tbody>
                                                                    
                                                                        {this.populateDetailsData()}
                                                                    
                                                                        </tbody>
                                                                    </table>
                                            </div>
                                    :''
                }
                
                
                </fieldset>
            </div>
            </>
        )
    }
}

export default ApiAssignment1