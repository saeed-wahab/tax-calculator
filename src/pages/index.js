import React from "react";
import { useStore } from "../global-state";
import Form from "../components/Form";
import { selectSsnit, selectTax,selectIncome, selectTaxTable } from "../global-state/selectors";
import Table from "../components/Table";

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
               {console.log(selectTaxTable(state))}
           </ul>
           <Table list={selectTaxTable(state)} tax={selectTax(state)}/>
        </div>
    )
}

export default LandingPage;