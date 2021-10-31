import React from 'react';
import { connect } from 'react-redux'


class Display extends React.Component
{
    render(){
        return(
            <>
               <h2>THE CURRENT COUNTER VALUE IS :</h2>
               {this.props.count}
            </>
        );
    } 
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps) (Display);