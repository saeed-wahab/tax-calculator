import React, 
{ 
    useReducer, 
    createContext, 
    useContext,
    useMemo 
} from "react"
import taxCalReducer,{ initialiseState } from "./taxCalReducer";


const PayeTaxContext = createContext();

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

