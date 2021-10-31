import React, {Component} from 'react';


export default class Home extends  Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        console.log('Constructor Call');
        this.clickMe = this.clickMe.bind(this);
    }

    componentWillMount()
    {
        console.log('componentwillmount is called');
    }

    componentDidMount(){
        document.title = 'Home Page, Counter:'+ this.state.counter;
        console.log('componentDidMount Call');
    }

    componentDidUpdate(appdata, state){
        document.title = 'Home Page, Counter:'+ this.state.counter;
        console.log('componentDidUpdate Call:', appdata, state);
    }

    componentDidCatch(){
        console.log('componentDidCatch Call');
    }

    static shouldComponentUpdate(){
        console.log('shouldComponentUpdate Call');
        return true;
    }

    componentWillUnmount(){
        document.title = 'React App';
        console.log('componentWillUnmount Call');
    }

    clickMe(){
        this.setState((state) => {
            return {counter: state.counter + 1}
        });
    }

    render(){
        return (
        <div className="container">
            <h1>This is the Home Page</h1>
            <p>The Counter Hits: {this.state.counter}</p>
            <button onClick={this.clickMe}>Click Me</button>
        </div> 
        );
    }
}