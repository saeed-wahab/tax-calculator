import React from "react";
import { MyTaxDataProvider } from "./reducer";
import LandingPage from "./pages";
import "bulma/css/bulma.min.css";
import "./stylesheets/index.css";

function App(){
   return(
       <MyTaxDataProvider>
           <LandingPage />
       </MyTaxDataProvider>
   )
}

export default App;