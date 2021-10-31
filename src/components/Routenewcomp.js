import React from 'react'
class Routenewcomp extends React.Component
{
    render(){
        return(
            <>
            <div class="col-sm-4">
                <h2>
                <label>Prop value is:</label>
                {this.props.match.params.id_val}</h2> 
            </div>
            </>
        )
    }
}
export default Routenewcomp;