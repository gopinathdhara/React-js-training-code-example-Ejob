import React,{useState,useEffect,useRef} from 'react'

function UseRef1(){
   
    const inputRef=useRef();
    const inputRef1=useRef();
    const inputRef2=useRef();
    var countRef=useRef(0);
    const [countRefState,setCountRef]=useState({count:0})

    // useEffect(function(){
    //     console.log("called after render");
    //     setTimeout(function(){
    //        inputRef.current.textContent="This is paragraph1 updated"
    //        inputRef1.current.textContent="This is paragraph2 updated"
    //        inputRef2.current.focus()
    //     },3000)
    // },[])

    const click1=()=>{
         console.log("called after render");
        setTimeout(function(){
           inputRef.current.textContent="This is paragraph1 updated"
           inputRef1.current.textContent="This is paragraph2 updated"
           inputRef2.current.focus()
        },3000)
    }
    const click2=()=>{
         countRef.current++;
         console.log("called click2 "+countRef.current);
         setCountRef({ count:countRef.current})
    }

    return(
        <div class="col-sm-6">
            <h3>UseRef Hook for functional compponent</h3>
            <label> useRef is used to change dom element but can not be stored as state variable</label>
             <p ref={inputRef}>This is paragraph1</p>
             <p ref={inputRef1}>This is paragraph2</p>
             <input ref={inputRef2} type="text"/>
             <p>Count {countRefState.count}</p> 
             <button onClick={click1}>Click me</button>
             <button onClick={click2}>Click Count</button>
        </div>
    )
}

export default UseRef1