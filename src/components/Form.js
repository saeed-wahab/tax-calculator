import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import Button from "./Button";
import TextField from "./TextField";
import { 
    calculateTax,
} from "../global-state/actions";
import { useDispatch } from "../global-state";

function Form(props){
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        gross_salary:yup.number().required().min(0),
        allowance:yup.number().min(0)
    });
    
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema)
    });

    

    const onSubmit= ({ gross_salary, allowance})=> {
        const salary = parseFloat(gross_salary);
        const alloWance = parseFloat(allowance);
        dispatch(calculateTax(salary,alloWance));
    }
    

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">Gross Salary</label>
            <TextField 
                register={register} 
                name="gross_salary"  
                error={errors.gross_salary}  
            />

            <label  className="label">Allowance(optional)</label>
            <TextField 
                register={register} 
                name="allowance" 
                error={errors.allowance} 

            />
            
            <label className="label">Calculate for : </label>
            <p><Button>Calculate</Button></p>
        </form>
    )
}

export default Form;