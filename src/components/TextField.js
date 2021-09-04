import React from "react";

function TextField({name, value,onChange, register}){
   
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
                    onChange={(e)=>onChange(e.target)}
                    {...register(name,{require:true, maxLength:9, min:0})}
                />
            </p>
        </div>
    )

}

export default TextField;