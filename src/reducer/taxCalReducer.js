import {
     ALLOWANCE_TO_ZERO, 
     CALCULATE_TAX, 
     CHANGE_ALLOWANCE_VALUE, 
     CHANGE_GROSS_VALUE, 
     GROSS_TO_ZERO, 
     SHOW_GRADUATED_RATE } from "./actionTypes";

export const initialiseState={
    grossInput:0,
    allowanceInput:0,
    annualChecker:false,
    taxDeduction:0,
    ssnitDeduction:0,
    netIncome:0,
    yearCal:false,
    taxSteps:[],
 }
function taxCalReducer(action, state){
    
    const {type, payload} = action;
    switch(type) {
        case CALCULATE_TAX:
            return state
        case SHOW_GRADUATED_RATE:

           return state

        case GROSS_TO_ZERO:
            
            return {...state,grossInput: 0};
        case ALLOWANCE_TO_ZERO:
            
            return {...state, allowanceInput:0};
        case CHANGE_GROSS_VALUE:
    
            return {...state, grossInput:payload};
        case CHANGE_ALLOWANCE_VALUE:
            
            return {...state, allowanceInput: payload };
        default:
            return state;
    }
}

export default taxCalReducer;