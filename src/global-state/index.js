import React, 
{ 
    useReducer, 
    createContext, 
    useContext 
} from "react"
import taxCalReducer from "./taxCalReducer";

const initialiseState={
    taxDeducted:0,
    ssnit:0,
    netIncome:0,
    yearCal:false,
    graduatedTaxRate:[]
 }

const TaxContext = createContext();

function Provider(props){
    const state = useReducer(taxCalReducer, initialiseState);
    return(
        <TaxContext.Provider value={state} {...props} />
    )
}

function useStore(){
   const state = useContext(TaxContext)[0]
   if(!state){
       return new Error("useStore should be used within Provider tag");
   }

   return state;
}

function useDispatch(){
    const dispatch = useContext(TaxContext)[1];
    if(!dispatch){
        return new Error("useDispatch should be use within Provider tag")
    }
    return dispatch;
}

export {Provider, useStore, useDispatch };