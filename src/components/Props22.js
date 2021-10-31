const Props22=(props)=>{
    
    var data='';
    if(props.isLoggedInParam && props.chkStatusParam){
        data= <div>
            <button class="btn-success" onClick={props.sayHiParam}>Logout</button>
        </div>
    }else{
        data= <div>
            <button class="btn-warning" onClick={props.sayHiParam}>Login</button>
        </div>
    }
    return (
        <div>
            {data} 
        </div>
    )
}

export default Props22;