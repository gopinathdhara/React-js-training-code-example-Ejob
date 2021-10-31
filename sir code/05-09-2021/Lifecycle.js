import React from 'react'

class Lifecycle extends React.Component {
    constructor(props)
    {
        super(props);
        this.props=props;
        this.state = { hello : "World!" };
        console.log("constructor is called");
    }
 
    componentWillMount()
    {
        console.log("componentWillMount()  is called");
    }
 
    componentDidMount()
    {
        console.log("componentDidMount()  is called");
    }
 
    changeState()
    {
        this.setState({ hello : "Geek!" });
    }
 
    render()
    {
        return (
            <div>
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
            <h2>
            <a onClick={this.changeState.bind(this)} href='#'>Press Here!</a>
            </h2>
            </div>);
    }
 
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate()  is called");
        return true;
    }
 
    componentWillUpdate()
    {
        console.log("componentWillUpdate()  is called");
    }
 
    componentDidUpdate()
    {
        console.log("componentDidUpdate() is called");
        alert("State value is updated");
    }
}

export default Lifecycle

