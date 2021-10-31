import React, { useState, useEffect } from 'react';

const CountUseState1=()=>{

    const [count,setCount]=useState(0);

    const updateCount=()=>{
        setCount(count+1)
        
    }

    useEffect(() => {
            // Update the document title using the browser API
            //document.title = 'You clicked '+count+'times';
            document.title = 'You clicked '+count+' times';
    });

    return (
            <div class="col-sm-6">
            <h3>Use state hook  functional component</h3>  
            <p>You clicked {count} times</p>
            <button onClick={updateCount}>
                Click me
            </button>
            </div>
    );
}

export default CountUseState1;