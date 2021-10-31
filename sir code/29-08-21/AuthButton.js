import React from 'react'

// functional component
const AuthButton = props => {
    let { isLoggedIn } = props;
  
    switch (isLoggedIn) {
      case true:
        return <button>Logout</button>;
        break;
      case false:
        return <button>Login</button>;
        break;
      default:
        return null;
    }

    //can be done by ternary operator also

    //return isLoggedIn ? <button>Logout</button> : <button>Login</button>;
  };
  
  export default AuthButton;