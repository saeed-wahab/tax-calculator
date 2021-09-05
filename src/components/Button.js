import React from "react";

function Button(props){
    return(
       <button type={"submit"}
        className="button is-primary"> 
            {props.children}
       </button> 
    )
}

export default Button;