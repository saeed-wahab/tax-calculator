import { CALCULATE_TAX, } from "./actionTypes";
import taxCalculator from "../lib/tax-calculator";

function taxCalReducer(state, {type, payload}){
    
    
    switch(type) {
        case CALCULATE_TAX:
            const {grossSalary, allowance} = payload;
            return {...state, ...taxCalculator(grossSalary,allowance)};
        default:
            return state;
    }
}

export default taxCalReducer;