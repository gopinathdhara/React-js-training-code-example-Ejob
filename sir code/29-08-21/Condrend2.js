import React from 'react'

import AuthButton from './AuthButton'

class Condrend2 extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: true
        };
      }
    
      render() {
        return (
          <div>
            <h1>
              This is a Demo showing several ways to implement Conditional Rendering in React.
            </h1>
            <AuthButton isLoggedIn={this.state.isLoggedIn} />
          </div>
        );
      }
}

export default Condrend2;