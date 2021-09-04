import React from "react";

function CalculatorOption(){
    return(
        <div className="control">
            <label className="radio">
                <input type="radio" name="cal_type"  value="monthly"/>
                Monthly
            </label>
            <label className="radio">
                <input type="radio" name="cal_type" value="yearly" />
                Yearly
            </label>
        </div>
    )
}
export default CalculatorOption;