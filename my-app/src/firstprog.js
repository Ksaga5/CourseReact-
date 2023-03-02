import React, { useCallback } from "react";

const Welcome = function (props){
    return(
        <>
        <h1>Hi {props.name} </h1>
        <button> {props.but} </button>
        </>
        
    )
}

export default Welcome;