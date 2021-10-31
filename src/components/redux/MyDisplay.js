import React from 'react'
import { connect } from 'react-redux' 

class MyDisplay extends React.Component
{
     constructor(props){
         super(props);
    }  
    static mapStateToProps = (state) => ({
         counter: state.parentCounter,
         });
         
    render(){
        return (
            <div>
                    <h4>
                         <b>Display Count :</b>  
                        {this.props.counter}
                    </h4>
                   
            </div>
        )
    }
}

export default connect(MyDisplay.mapStateToProps)(MyDisplay);
