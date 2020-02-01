import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {ModalProvider} from "react-modal-hook";
import NavBar from "./components/NavBar/navbar";
import Home from './components/Home/home';
import ScheduleAppointment from "./components/Forms/Administrative/Scheduling/ScheduleAppointment/scheduleappointment";
import Appointments from './components/Appointments/appointments';
import ClinicalQueue from "./components/ClinicalQueue/clinicalqueue";
import Appointment from "./components/Appointment/appointment";
import './styles/w3.css';
import Patient from "./components/Patient/patient";
import PatientRequests from "./components/PatientRequests/patientrequests";
import Claims from "./components/Claims/claims";
import EvaAdmin from "./components/EvaAdmin/evaadmin";
import Faxes from "./components/Faxes/faxes";
import { CssBaseline } from '@material-ui/core';
import Patients from "./components/Patients/patients";
import RevenueCycle from "./components/RevenueCycle/revenuecycle";
import Scheduling from "./components/Scheduling/scheduling";
import Claim from './components/Claims/Claim/claim';
import WaitList from "./components/Scheduling/WaitList/waitlist";
import ReferralsToScheduleList from "./components/Scheduling/ReferralsToSchedule/referralstoschedulelist";
import { StateProvider } from "./components/ClinicalQueue/context/ClinicalQueueContext";
import {allReducers} from "./store/reducers/combined";
import 'react-bootstrap-typeahead/css/Typeahead.css';

const store = createStore(allReducers);

function App() {


  return (
      <Fragment>
          <Provider store={store}><CssBaseline/>
              <ModalProvider>
                  <Router>
                      <div>
                          <NavBar/>
                          <Switch>
                              <Route exact path="/">
                                  <Home/>
                              </Route>
                              <Route path="/appointments/:id">
                                  <Appointment/>
                              </Route>
                              <Route path="/appointments">
                                  <Appointments/>
                              </Route>
                              <Route path="/claims/:claimId" component={Claim}/>
                              <Route path="/claims">
                                  <Claims/>
                              </Route>
                              <Route path="/evaadmin">
                                  <EvaAdmin/>
                              </Route>
                              <Route path="/faxes">
                                  <Faxes/>
                              </Route>
                              <Route path="/clinicalqueue">
                                  <ClinicalQueue/>
                              </Route>
                              <Route exact path="/patients">
                                  <Patients/>
                              </Route>
                              <Route exact path="/patientrequests">
                                  <PatientRequests/>
                              </Route>
                              <Route path="/waitlist" component={WaitList}/>
                              <Route path="/referralstoschedule" component={ReferralsToScheduleList}/>
                              <Route path="/revenuecycle" component={RevenueCycle}/>
                              <Route path="/patient/:id" component={Patient}/>
                              <Route path="/scheduling/:id" component={Scheduling}/>
                              <Route path="/scheduling" component={Scheduling}/>
                              <Route path="/schedule/:id" component={ScheduleAppointment}/>
                          </Switch>
                      </div>
                  </Router>
              </ModalProvider>
          </Provider>
      </Fragment>

      );
}

export default App;

/*
<StateProvider initialState={initialState} reducer={reducer}>
</StateProvider>

    const initialState = {
        clinicalqueue: [],
        patient: {
            id: null,
            appointments: [],
            clinicalrequests: [],
            insurance: [],
            demographics: {},
            allergies: {},
            medications: [],
            diagnoses: [],

        },
        appointment: {
            id: null,
        },
        medicalhistory: {},
        surgicalhistory: [],
        socialhistory: {},
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'check_in_patient':
                return {...state, clinicalqueue: action.newclinicalqueue};
            case 'move_to_exam_room':
                return {...state, clinicalqueue: action.newclinicalqueue};
            case 'move_to_waiting_room':
                return {...state, clinicalqueue: action.newclinicalqueue};
            case 'appointment_in_progress':
                return {...state, clinicalqueue: action.newclinicalqueue};
            case 'initial_load':
                return {...state, clinicalqueue: action.newclinicalqueue};
            case 'load_patient_requests':
                return console.log(state.patient.clinicalrequests);
            default:
                return state;
        }
    };
 */
