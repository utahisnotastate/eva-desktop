import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ModalProvider} from "react-modal-hook";
import NavBar from "./components/NavBar/navbar";
import Home from './components/Home/home';
import ScheduleAppointment from "./components/Forms/Administrative/Scheduling/ScheduleAppointment/scheduleappointment";
import Appointments from './components/Appointments/appointments'
import ClinicalQueue from "./components/ClinicalQueue/clinicalqueue";
import './styles/w3.css';
import Patient from "./components/Patient/patient";
import PatientRequests from "./components/PatientRequests/patientrequests";
import Claims from "./components/Claims/claims";
import EvaAdmin from "./components/EvaAdmin/evaadmin";
import Faxes from "./components/Faxes/faxes";
import { CssBaseline } from '@material-ui/core';
import Patients from "./components/Patients/patients";
import Scheduling from "./components/Scheduling/scheduling";

function App() {
  return (
      <Fragment>
      <CssBaseline />
          <ModalProvider>
      <Router>
          <div>
              <NavBar/>
                <Switch>
                      <Route exact path ="/">
                          <Home />
                      </Route>
                      <Route path ="/appointments">
                        <Appointments/>
                      </Route>
                    <Route path="/claims">
                        <Claims />
                    </Route>
                    <Route path="/evaadmin">
                        <EvaAdmin />
                    </Route>
                    <Route path="/faxes">
                        <Faxes />
                    </Route>
                      <Route path="/clinicalqueue">
                         <ClinicalQueue />
                      </Route>
                    <Route exact path="/patients">
                        <Patients />
                    </Route>
                    <Route exact path="/patientrequests">
                        <PatientRequests />
                    </Route>
                    <Route path="/patient/:id" component={Patient} />
                    <Route path="/scheduling" component={Scheduling} />
                    <Route path="/schedule/:id" component={ScheduleAppointment} />
                </Switch>
          </div>
      </Router>
          </ModalProvider>
      </Fragment>

      );
}

export default App;
