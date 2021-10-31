import React from 'react'
import MyDisplay from './MyDisplay';
import { connect } from 'react-redux' 

class MyCounter extends React.Component
{
     constructor(props){
        super(props);
        this.state={
            countVal:this.props.countVal
        }
    }
    incrementCount=()=>{
        // this.setState({
        //    countVal: parseInt(this.state.countVal)+1
        // })
        this.props.dispatch({ type: "Increment_Parent" });
    }
    decrementCount=()=>{
        // this.setState({
        //     countVal:parseInt(this.state.countVal)-1
        // })
        this.props.dispatch({ type: "Decrement_Parent" });
    }
    static mapStateToProps = (state) => ({
         counter: state.parentCounter,
         }
    );
    render(){
        
        return (
            <>
            <div class="col-sm-10" style={{'border':'2px solid #ccc','padding':'10px','margin':'20px','border-radius':'10px'}}>
                <h2>Redux</h2>
                <h4>when we need component interaction that is we are sending data from parent to child or child to parent with props. But when it is large project and huge number of components are there then we need not to use props. We can use redux with out props for component interaction.

redux store state variable should be declared only for props variable and should not be used for component state variables which are not using as props.</h4>
                <h4 style={{'text-decoration':'underline','color':'blue'}}>Counter Details</h4>
                    <h4>
                       <b>Count :</b>  {this.props.counter}
                    </h4>
                    <button onClick={this.incrementCount}>+</button>
                    <button onClick={this.decrementCount}>-</button>
                    <hr/>
                    <h4 style={{'text-decoration':'underline','color':'red'}}>Display Details</h4>

                    {/* <MyDisplay count_props={this.state.countVal} /> */}

                    <MyDisplay />

            </div>
            
            </>
        )
    }  
}
export default connect(MyCounter.mapStateToProps)(MyCounter);
