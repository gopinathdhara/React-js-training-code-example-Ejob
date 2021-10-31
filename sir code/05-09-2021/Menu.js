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
            </ul>
            </div>
        );
    }
}

export default Menu;