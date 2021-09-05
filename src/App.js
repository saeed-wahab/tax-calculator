import React from "react";
import { Provider } from "./global-state";
import LandingPage from "./pages";
import "bulma/css/bulma.min.css";
import "./stylesheets/index.css";

function App(){
   return(
       <Provider>
           <LandingPage />
       </Provider>
   )
}

export default App;