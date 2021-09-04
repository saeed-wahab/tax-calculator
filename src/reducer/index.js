import React, 
{ 
    useReducer, 
    createContext, 
    useContext,
    useMemo 
} from "react"

import { CALCULATE_TAX, SHOW_GRADUATED_RATE } from "./actionTypes";

const PayeTaxContext = createContext();

const initialiseState={
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
         default:
             break;
     }
 }

 export function MyTaxDataProvider(props){
    const [state, dispatch] = useReducer(taxCalReducer,initialiseState);
    const value  = useMemo(()=>[state, dispatch], [state]);
    return(
        <PayeTaxContext.Provider value={value} {...props} />
            
    )
 }

 export function useTaxData(){
    const context = useContext(PayeTaxContext);
    if(!context){
        throw new Error("useTaxData should be used within PayeTaxContext");
    }
    return context;

 }

