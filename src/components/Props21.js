import React from 'react'
import Props22 from "./Props22"
class Props21 extends React.Component
{
    /* component interaction App.js->Props21->Props22 */
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: true,
          chkStatus: true
        };
        console.log(this.state);
      }
      myOnChangeLogin=(event)=>{
            this.setState({
                isLoggedIn:true
            },()=>{
                console.log(this.state);
            })
      }
      myOnChangeLogout=(event)=>{
            this.setState({
                isLoggedIn:false
            },()=>{
                console.log(this.state);
            })
      }
      sayHi=()=>{
          alert("hi")
      }
      render(){
          return(
                <div class="col-sm-4">
                    <h3>Props example</h3>
                    <input type="radio" name="isLoggedIn"  onChange={this.myOnChangeLogin}/>LogIn
                    <input type="radio" name="isLoggedIn"  onChange={this.myOnChangeLogout}/>LogOut
                    <Props22 sayHiParam={this.sayHi} isLoggedInParam={this.state.isLoggedIn} chkStatusParam={this.state.chkStatus}/>
                </div>
          )
      }
}
export default Props21;