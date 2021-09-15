import React,{useState} from "react";
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
    const [tableVisibility, setVisibility] = useState(false);

    
    return(
        <div className="box">
            <h1 className="title">TAX Calculator(<abbr title="Pay As you Earn">PAYE</abbr>)</h1>
           <Form /><br/><hr/>
           <ul className="deduct-list">
               <li>SSNIT: {ssnit}</li>
               <li>Total Tax(to be paid) : {tax}</li>
               <li>Net Salary: {income}</li>
            </ul><hr/>
           {taxTable.length ? 
                (
                <button 
                    onClick ={(e)=> setVisibility(!tableVisibility)}
                    className="button is-primary">
                    {tableVisibility ?"Hide Break Down" : "Show Tax Break Down"}
                </button>
                )
                : null }
           {tableVisibility ? (<Table list={taxTable} tax={tax} />) : null }
        </div>
    )
}

export default LandingPage;