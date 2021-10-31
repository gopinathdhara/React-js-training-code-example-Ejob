import React from 'react'

const initialState={
    parentCounter:0
}
const MyReducers=(state=initialState,action)=>{

    switch(action.type){
        case "Increment_Parent":
            return { ...state, parentCounter: state.parentCounter + 1 };
        case "Decrement_Parent":
            return { ...state, parentCounter: state.parentCounter - 1 };    
        default:
             return state;    
    }
}

export default MyReducers;