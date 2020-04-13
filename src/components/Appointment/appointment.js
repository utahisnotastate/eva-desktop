import React from 'react';
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
import Card from "../basestyledcomponents/Card/Card";

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
}));

export default function Appointment() {
    let { id } = useParams();
    let { path, url } = useRouteMatch();
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
            component: PatientComplaints,
        },
        {
            path: '/appointmentros',
            label: 'Review of Systems',
            component: AppointmentROS,
        },
        {
            path: '/appointmentexam',
            label: 'Physical Exam',
            component: AppointmentPhysicalExam,
        },
        {
            path: '/plan',
            label: 'Plan',
            component: AppointmentPlan,
        },
        {
            path: '/followup',
            label: 'Follow Up',
            component: AppointmentFollowUp,
        },
        {
            path: '/summary',
            label: 'Summary',
            component: AppointmentSummary,
        },
    ];
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Appointment Information" />
                    </ListItem>
                    <List component="div" disablePadding>
                    {appointmentroutes.map((route) => (
                        <ListItem className={classes.nested} key={route.path}>
                            <NavLink exact activeStyle={{color: 'white'}} to={`${url}${route.path}`}>
                                <ListItemText primary={<Typography variant="body1">{route.label}</Typography>}/>
                            </NavLink>
                        </ListItem>
                    ))}
                    </List>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patient Information" />
                    </ListItem>
                    <List component="div" disablePadding>
                        {routes.map((route) => (
                            <ListItem className={classes.nested} key={route.path}>
                                <NavLink exact activeStyle={{color: 'white'}} to={`${url}${route.path}`}>
                                    <ListItemText primary={<Typography variant="body1">{route.label}</Typography>}/>
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </List>
            </Grid>
            <Grid item xs={10}>
                <Card className={`w3-padding-large`}>
                    <Switch>
                        {appointmentroutes.map ((route) => (
                            <Route key={route.path} exact path={`${path}${route.path}`} component={route.component} />
                        ))}
                    </Switch>
                </Card>

            </Grid>
        </Grid>
    );
}
/*
<Grid item xs={10}>
                <Switch>
                    {appointmentroutes.map ((route) => (
                        <Route key={route.path} exact path={`${path}${route.path}`} component={route.component} />
                    ))}
                </Switch>
            </Grid>
 */