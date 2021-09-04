import { 
    CALCULATE_TAX, 
    SHOW_GRADUATED_RATE,
    GROSS_TO_ZERO,
    ALLOWANCE_TO_ZERO,
    CHANGE_ALLOWANCE_VALUE,
    CHANGE_GROSS_VALUE
} from "./actionTypes";

export function calculateTax(grossWage, allowance=0){
    return({
        type:CALCULATE_TAX,
        payload:{
            grossWage,
            allowance
        }
    });
}

export function showGraduatedRates(){
    return({
        type:SHOW_GRADUATED_RATE,
    })
}

export function setGrossToZero(){
    return({
        type:GROSS_TO_ZERO
    })
}

export function setAllowanceToZero(){
    return({
        type:ALLOWANCE_TO_ZERO
    })
}

export function setGrossValue(value){
    return({
        type: CHANGE_GROSS_VALUE,
        payload:parseFloat(value),
    })
}

export function setAllowanceValue(value){
    return({
        type: CHANGE_ALLOWANCE_VALUE,
        payload:parseFloat(value),
    })
}