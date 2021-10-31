import React,{useState,useEffect} from 'react'

function UseEffectHook1(){

    const [name,setName]= useState({firstName:'Riki',surName:"Roy"})

    //useEffect called after render
    useEffect(function(){
        console.log("called after render");
        setTimeout(function(){
            console.log("called after render after 6000 sec ");
        },3000)
    },[])

    return(
        <div class="col-sm-6">
            <h3>UseEffect for functional compponent</h3>
            <h4>Name: {name.firstName}</h4>
            <h4>Surname: {name.surName}</h4>
        </div>
    );
}

export default UseEffectHook1