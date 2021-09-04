import React from "react";
import { useTaxData } from "../reducer";
import Form from "../components/Form";

function LandingPage(){
    const [state, dispatch ] = useTaxData();
    return(
        <div>
           <Form />
        </div>
    )
}

export default LandingPage;