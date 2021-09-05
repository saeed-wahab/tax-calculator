import React from "react";

function TextField({name,register, error}){
   
    return(
        <div className="field has-addons">
            <p className="control">
            <button className="button is-static"> GHS </button>
            </p>    
            <p className="control">
                <input 
                    className="input is-primary"  
                    type="number" 
                    defaultValue={0}
                    {...register(name)}
                />
                { (error) ? (<span className="help is-danger">Incorrect input </span>): null }
            </p>
            
        </div>
    )

}

export default TextField;