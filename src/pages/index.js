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
    const taxTable= selectTaxTable(state);
    return(
        <div className="box">
            <h1 className="title">TAX Calculator(<abbr title="Pay As you Earn">PAYE</abbr>)</h1>
           <Form /><br/>
           <ul>
               <li>SSNIT: {ssnit}</li>
               <li>Total Tax(to be paid) : {tax}</li>
               <li>Net Salary: {income}</li>
              

           </ul>
           <Table list={taxTable} tax={tax}/>
        </div>
    )
}

export default LandingPage;