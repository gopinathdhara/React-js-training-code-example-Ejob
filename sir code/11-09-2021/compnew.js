import React from 'react'

class Compnew extends React.Component {
  render() {
    return(
       <div>
           <label>Prop value is :</label>
           {this.props.match.params.id_val}  
       </div>
    );
  }
}
export default Compnew