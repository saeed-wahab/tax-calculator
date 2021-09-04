import React from "react";

function TextField(props){
    return(
        <div className="field has-addons">
            <p className="control">
            <a class="button is-static"> GHC </a>
            </p>    
            <p className="control">
                <input class="input is-primary" name={props.name} type="number" />
            </p>
        </div>
    )

}

export default TextField;