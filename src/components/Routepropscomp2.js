import React from 'react'
class Routepropscomp2 extends React.Component
{
    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state={
            p_id:'',
            p_name:'',
            p_location:''
        }
      }

    //props validation through route
    componentWillMount(){
        //alert('componentWillMount is called');
        console.log('componentWillMount is called!') 
        if(!this.props.location.emp_data){
            //alert("No props found")
        }else{
            this.setState({
                p_id:this.props.location.emp_data.u_id,
                p_name:this.props.location.emp_data.u_name,
                p_location:this.props.location.emp_data.u_loc
            })
        }
    }
    componentDidMount(){
         //alert('componentDidMount is called');
        //   if(!this.props.location.emp_data){
        //     alert("No props found")
        // }else{
        //     this.setState({
        //         p_id:this.props.location.emp_data.u_id,
        //         p_name:this.props.location.emp_data.u_name,
        //         p_location:this.props.location.emp_data.u_loc
        //     })
        // }
         //console.log('Component Did MOUNT!')  
    }
    shouldComponentUpdate(){
          //console.log('shouldComponentUpdate is called!')  
          //alert('shouldComponentUpdate is called');
         return true; 
    }
    componentWillUpdate(){
        //alert('componentWillUpdate is called');
         //console.log('Component Will UPDATE!');  
    }
    componentDidUpdate(){
       // alert('componentDidUpdate is called');
        // console.log('Component Did UPDATE!')  
    }
    componentWillUnmount(){
         //console.log('Component Will UNMOUNT!') 
        // alert('Component Will UNMOUNT! is called'); 
    }
    render(){
        return(
            <>
            <div class="col-sm-4">
                <h3>
                <label>Prop value is:</label>
                </h3> 
               <h3>Id: {this.state.p_id}</h3> 
               <h3>Name: {this.state.p_name}</h3> 
               <h3>Location: {this.state.p_location}</h3> 
                
            </div>
            </>
        )
    }
}
export default Routepropscomp2;