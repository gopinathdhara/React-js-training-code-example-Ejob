import React from 'react';

class Firstex extends React.Component
{
    render()
    {
        return(
          <div>
            <h2>Welcome to React Programming</h2>
            <br></br>
            <table border="1">
              <tr>
                <th>Fname</th>
                <th>Lname</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>Sourav</td>
                <td>Kundu</td>
                <td>33</td>
              </tr>
            </table>
          </div>  
        );
    }
}

export default Firstex;