import React from 'react'
import Done from "./components/registrations/Done_feadback/done";
import Verfication from "./components/registrations/Verfication/verfication";
import Registration_3 from "./components/registrations/Registration_3/registration_3";
import Registration_4 from "./components/registrations/Registration_4/registration_4";
import Registration_5 from "./components/registrations/Registration_5/registration_5";
import Final from "./components/registrations/Finall/final";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stepper from "./components/stepper/stepper";
import Header from "./components/header/header";
import Registration_1 from "./components/registrations/Registration_1/regitstration_1";
import Registration_2 from "./components/registrations/Registration_2/registration_2";
import PrivateRoute from './route/auth';

function App(){
    return <div>
    <Header />
    <Router>
      <Switch>
      <Route path="/">
          <Stepper />
          <Registration_1 />
        </Route>
        <Route path="/Registrationform/2/">
          <Stepper />
          <Registration_2 />
        </Route>
        <Route path="/Registrationform/Done/:id">
          <Done />
        </Route>
        <Route path="/Registrationform/Verfication">
          <Verfication />
        </Route>
        <Route path="/Registrationform/3">
          <Stepper />
          <Registration_3 />
        </Route>
        <Route path="/Registrationform/4">
          <Stepper />
          <Registration_4 />
        </Route>
        <Route path="/Registrationform/5">
          <Stepper />
          <Registration_5 />
        </Route>
        <Route path="/Registrationform/finall">
          <Final />
        </Route>
      </Switch>
    </Router></div>
}
export default App;