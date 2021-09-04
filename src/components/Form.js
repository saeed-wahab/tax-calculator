import React from "react";
import Button from "./Button";
import TextField from "./TextField";

function Form(props){
    return(
        <form onSubmit={props.onSubmit}>
            <label class="label">Gross Salary</label>
            <TextField name="gross_salary"/>
            <label class="label">Allowance(optional)</label>
            <TextField name="allowance"/>
            <p><Button type="sumbit" >Calculate</Button></p>
        </form>
    )
}

export default Form;