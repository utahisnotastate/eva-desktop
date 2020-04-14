import React, {useState} from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemText from '@material-ui/core/ListItemText';
import PatientComplaints from "./Complaints/PatientComplaints";
import AppointmentROS from "./AppointmentROS/AppointmentROS";
import AppointmentPhysicalExam from "./AppointmentPhysicalExam/AppointmentPhysicalExam";
import AppointmentAssessment from "./Assessment/AppointmentAssessment";
import AppointmentPlan from "./AppointmentPlan/AppointmentPlan";
import AppointmentFollowUp from "./AppointmentFollowUp/AppointmentFollowUp";
import AppointmentSummary from "./AppointmentSummary/AppointmentSummary"
import {useParams, useRouteMatch, Switch, Route, Link, NavLink} from "react-router-dom";
import routes from "../Patient/routes";
import AppointmentComplaints from "./Complaints/AppointmentComplaints/AppointmentComplaints";
import NewComplaint from "./Complaints/NewComplaint/NewComplaint.FunComp";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Card from "../basestyledcomponents/Card/Card";
import Collapse from '@material-ui/core/Collapse';
import BaseROSComponent from "./AppointmentROS/AppointmentROSComponents/BaseROSComponent";
import BasePhysicalExamComponent from "./AppointmentPhysicalExam/BasePhysicalExamComponent";
import {ROSRoutes, PhysicalExamRoutes} from "./appointmentroutes";

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#BADDFF',
        minHeight: '100vh',
        boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    },
    listitem: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    sideitem: {
        color: '#414141',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    deepnested: {
        paddingLeft: theme.spacing(6),
    },
}));


export default function Appointment() {
    let { id } = useParams();
    let { path, url } = useRouteMatch();
    const [appointmentinfoopen, setAppointmentInfoOpen] = useState(true)
    const [rosopen, setROSOpen] = useState(false);
    const [examopen, setExamOpen] = useState(false);
    const [patientoptionsopen, setPatientOptionsOpen] = useState(false);

    const classes = useStyles();
    const activelinkstyle= {
        fontWeight: "bold",
        backgroundColor: "blue",
        color: "white",
        width: '100%'
    }
    const appointmentroutes = [
        {
            path: '',
            label: 'Complaints',
            nestedroutes: false,
            subroutes: [],
            component: PatientComplaints,
        },
        {
            path: '/appointmentros',
            label: 'Review of Systems',
            nestedroutes: true,
            menuopen: rosopen,
            openNestedMenu() {
                setROSOpen(!rosopen);
            },
            subroutes: [{ label: 'Constitutional', route: '/ROSConstitutional' },
                { label: 'Allergic Immunologic', route: '/ROSAllergicImmunologic' },
                { label: 'Integumentary', route: '/ROSIntegumentary' },
                { label: 'Eyes', route: '/ROSEyes' },
                { label: 'Cardiovascular',route: '/ROSCardiovascular' },
                { label: 'Respiratory', route: '/ROSRespiratory' },
                { label: 'Musculoskeletal', route: '/ROSMusculoskeletal' },
                { label: 'Gastrointestinal', route: '/ROSGastrointestinal' },
                { label: 'Neurological',route: '/ROSNeurological' },
                { label: 'Genitourinary', route: '/ROSGenitourinary' },
                { label: 'Endocrine',route: '/ROSEndocrine' },
                { label: 'Hematologic', route: '/ROSHematologic' },
                { label: 'Psychiatric', route: '/ROSPsychiatric' },
                { label: 'Ears Nose Throat', route: '/ROSEarsNoseThroat' }],
            component: AppointmentROS,
        },
        {
            path: '/appointmentexam',
            label: 'Physical Exam',
            nestedroutes: true,
            menuopen: examopen,
            openNestedMenu() {
                setExamOpen(!examopen);
            },
            subroutes: [
                { label: 'HEENT', route: '/HEENTExam' },
                { label: 'Integumentary', route: '/IntegumentaryExam' },
                { label: 'Cardiovascular', route: '/CardiovascularExam' },
                { label: 'Musculoskeletal', route: '/MusculoskeletalExam' },
                { label: 'Gastrointestinal', route: '/GastrointestinalExam' },
                { label: 'Neurological', route: '/NeurologicalExam' },
                { label: 'Male Genitoruinary', route: '/MaleGenitourinaryExam' },
                { label: 'Female Genitourinary',route: '/FemaleGenitourinaryExam' },
                { label: 'Hematologic Lymphatic', route: '/HematologicLymphaticExam' },
                { label: 'Psychiatric',route: '/PsychiatricExam' },
            ],
            component: AppointmentPhysicalExam,
        },
        {
            path: '/plan',
            label: 'Plan',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentPlan,
        },
        {
            path: '/followup',
            label: 'Follow Up',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentFollowUp,
        },
        {
            path: '/summary',
            label: 'Summary',
            nestedroutes: false,
            subroutes: [],
            component: AppointmentSummary,
        },
    ];
    const DeepNestedList = ({subroutes, path}) => {
        return(
            <List component="div" disablePadding>
                {subroutes.map((subroute) => (
                    <ListItem className={classes.deepnested} key={subroute.label}>
                        <NavLink exact activeStyle={{color: 'white'}} to={`${url}${path}${subroute.route}`}>
                            <ListItemText primary={`${subroute.label}`}/>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        )
    }

    const SimpleRoute =  ({path, label}) => {
        return (
            <ListItem key={label}>
                <NavLink exact activeStyle={{color: 'white'}} to={`${url}${path}`}>
                    <ListItemText primary={label}/>
                </NavLink>
            </ListItem>
        );
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <List className={classes.list}>
                    <ListItem button onClick={() => setAppointmentInfoOpen(!appointmentinfoopen)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Appointment Information" />
                        {appointmentinfoopen ? <ExpandLess /> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={appointmentinfoopen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        {appointmentroutes.map((route) => {
                            if(route.nestedroutes) {
                                return (
                                    <>
                                    <ListItem key={route.label}>
                                        <NavLink exact activeStyle={{color: 'white'}} to={`${url}${route.path}`}>
                                            <ListItemText  primary={`${route.label}`}/>
                                        </NavLink>
                                        {route.menuopen ? <ExpandLess onClick={route.openNestedMenu} /> : <ExpandMore onClick={route.openNestedMenu} />}
                                    </ListItem>
                                    <Collapse in={route.menuopen} timeout="auto" unmountOnExit>
                                        <DeepNestedList subroutes={route.subroutes} path={route.path} />
                                    </Collapse>
                                    </>
                                );
                            } else {
                                return (
                                    <SimpleRoute path={route.path} label={route.label} />
                                )
                            }

                        })}
                        </List>
                    </Collapse>

                    <ListItem key={`Patient_Information`} button onClick={() => setPatientOptionsOpen(!patientoptionsopen)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patient Information" />
                        {patientoptionsopen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={patientoptionsopen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {routes.map((route) => (
                            <ListItem className={classes.nested} key={route.label}>
                                <NavLink exact activeStyle={{color: 'white'}} to={`${url}${route.path}`}>
                                    <ListItemText primary={<Typography variant="body1">{route.label}</Typography>}/>
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={10}>
                <Card className={`w3-padding-large`}>
                    <Switch>
                        {appointmentroutes.map ((route) => (
                            <Route exact key={route.label} path={`${path}${route.path}`} component={route.component} />
                        ))}
                        {routes.map((route) => (
                            <Route exact key={route.label} path={`${path}${route.path}`} component={route.component} />

                        ))}
                        {ROSRoutes.map((route) => (
                            <Route exact key={route.label} path={`${path}${route.path}`}>
                                <BaseROSComponent fields={route.fields} label={route.label}/>
                            </Route>
                        ))}
                        {PhysicalExamRoutes.map((route) => (
                            <Route exact key={route.label} path={`${path}${route.path}`}>
                                <BasePhysicalExamComponent fields={route.fields} label={route.label}/>
                            </Route>
                        ))}
                    </Switch>
                </Card>

            </Grid>
        </Grid>
    );
}