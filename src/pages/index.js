import React from "react";
import { useStore } from "../global-state";
import Form from "../components/Form";
import { selectSsnit, selectTax,selectIncome } from "../global-state/selectors";

function LandingPage(){
    const state = useStore();
    const tax  = selectTax(state);
    const ssnit  = selectSsnit(state);
    const income = selectIncome(state)
    return(
        <div>
           <Form />
           <ul>
               <li>SSNIT: {ssnit}</li>
               <li>Net Salary: {income}</li>
           </ul>
        </div>
    )
}

export default LandingPage;