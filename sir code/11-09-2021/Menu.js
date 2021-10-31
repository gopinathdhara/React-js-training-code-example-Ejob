import React from 'react';

import {Link} from 'react-router-dom';

class Menu extends React.Component
{
    state={
      id:101,
      name:'sourav kundu',
      loc:'kolkata'
    }

    render()
    {
        return(
            <div>
            <ul>
                <li>
                <Link to="/Firstex">Page 1</Link>    
                </li>
                <li>
                <Link to="/first">Page 2</Link>
                </li>
                <li>
                <Link to={{pathname:'/compnew/'+this.state.id}}>Page 3</Link>
                </li>
                <li>
                <Link to={{pathname:'/users/',u_id:this.state.id,u_name:this.state.name,u_loc:this.state.loc}}>Page 4</Link>
                </li>
                <li>
                <Link to={{pathname:'/empinfo/',
                emp_data:{u_id:this.state.id,u_name:this.state.name,u_loc:this.state.loc}}}>Page 5</Link>
                </li>
                <li>
                <Link to={{pathname:'/studinfo/',stud_data:{st_id:this.state.id,st_name:this.state.name,st_loc:this.state.loc}}}>Page 6</Link> 
                </li>
            </ul>
            </div>
        );
    }
}

export default Menu;