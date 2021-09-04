import React,{ useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import TextField from "./TextField";
import CalculatorOption from "./CalculatorOption";
import {useTaxData} from "../reducer/index";
import { 
    setAllowanceToZero, 
    setGrossToZero,
    setGrossValue,
    setAllowanceValue,
} from "../reducer/actions";

function Form(props){
    const [state, dispatch ] = useTaxData();
    const {handleSubmit, register} = useForm();

    const onChange=({name,value})=>{
       
        switch (name) {
            case 'gross_salary':
                dispatch(setGrossValue(value))
                break;
            case 'allowance':
                dispatch(setAllowanceValue(value))
                break;
            default:
                break;
        }
    }

    const onSubmit= (data)=> {
      
        console.log(JSON.stringify(data))

    }
    useEffect(()=>{
        if(state.grossInput <0){
            dispatch(setGrossToZero());
        }

        if(state.allowanceInput < 0){
            dispatch(setAllowanceToZero());
        }

    },[state.grossInput, state.allowanceInput, dispatch]);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">Gross Salary</label>
            <TextField register={register} name="gross_salary"  onChange={onChange}  />

            <label  className="label">Allowance(optional)</label>
            <TextField register={register} name="allowance" value={state.allowanceInput} onChange={onChange}/>
 
            <label className="label">Calculate for : </label>
            <CalculatorOption />
            <p><Button type="sumbit" >Calculate</Button></p>
        </form>
    )
}

export default Form;