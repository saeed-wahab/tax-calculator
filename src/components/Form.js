import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import Button from "./Button";
import TextField from "./TextField";
import CalculatorOption from "./CalculatorOption";
import { useTaxData } from "../reducer/index";
import { 
    setGrossValue,
    setAllowanceValue,
} from "../reducer/actions";

function Form(props){
    const [state, dispatch ] = useTaxData();


    const schema = yup.object().shape({
        gross_salary:yup.number().required().min(0),
        allowance:yup.number().min(0)
    });

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema),
    });

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
        const { gross_salary, allowance} = data;
        console.log(gross_salary);
        console.log(allowance);
    }
    

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">Gross Salary</label>
            <TextField 
                register={register} 
                name="gross_salary"  
                onChange={onChange}
                error={errors.gross_salary}  
            />

            <label  className="label">Allowance(optional)</label>
            <TextField 
                register={register} 
                name="allowance" 
                value={state.allowanceInput}
                error={errors.allowance} 
                onChange={onChange}
            />
            
            <label className="label">Calculate for : </label>
            <CalculatorOption />
            <p><Button type="sumbit" >Calculate</Button></p>
        </form>
    )
}

export default Form;