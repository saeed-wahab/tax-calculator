import React from "react";

function CalculatorOption(){
    return(
        <div className="control">
            <label class="radio">
                <input type="radio" name="monthly" />
            </label>
            <label class="radio">
                <input type="radio" name="yearly" />
            </label>
        </div>
    )
}
export default CalculatorOption;