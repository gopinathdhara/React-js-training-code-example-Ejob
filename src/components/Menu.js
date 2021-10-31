import React from 'react'
import {Link} from 'react-router-dom'
class Menu extends React.Component
{
    state={
        id:5,
        name:'Gopi',
        location:'Howrah'
    }
    render(){
        return(
            <>
            <ul class="menulinkul">
                <li>
                    <Link to="/" class="menulink">Home</Link>
                    <Link to="/hello" class="menulink">Hello</Link>
                    <Link to="/welcome" class="menulink">Welcome</Link>
                    {/* send props through route */}
                    <Link to={{ pathname:'/routenewcomp/'+this.state.id }} class="menulink">Route Props</Link> 
                    {/* send props through route */}
                    <Link to={{ pathname:'/routepropscomp1/',u_id:this.state.id,u_name:this.state.name,u_loc:this.state.location }} class="menulink">Route Props</Link>
                    {/* props validation through route */}
                    <Link to={{ pathname:'/routepropscomp2/',emp_data: {u_id:this.state.id,u_name:this.state.name,u_loc:this.state.location }}} class="menulink">Route Props Validation</Link>
                    
                    <Link to={{pathname:'/studinfo/',stud_data:{st_id:this.state.id,st_name:this.state.name,st_loc:this.state.location}}} class="menulink">Page 6</Link> 
                
                </li>
            </ul>
            </>
        )
    }
}

export default Menu;