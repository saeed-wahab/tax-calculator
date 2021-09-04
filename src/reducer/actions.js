import { CALCULATE_TAX, SHOW_GRADUATED_RATE } from "./actionTypes";

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