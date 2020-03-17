import React from 'react';
// import { A } from 'hookrouter';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
    },
    item: {
        padding: theme.spacing(2),
        color: "#414141",
    },
}));

function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar style={{backgroundColor: '#ffffff'}} position="static">
                <Toolbar>
                    <NavLink to="/"><Typography variant="subtitle2" className={classes.item}>
                        Home
                    </Typography></NavLink>
                    <NavLink to="/scheduling"><Typography variant="subtitle2" className={classes.item}>
                        Scheduling
                    </Typography></NavLink>
                    <NavLink to="/clinicalqueue"><Typography variant="subtitle2" className={classes.item}>
                        Clinical Queue
                    </Typography></NavLink>
                    <NavLink to="/patientrequests"><Typography variant="subtitle2" className={classes.item}>
                        Requests
                    </Typography></NavLink>
                    <NavLink to="/patients"><Typography variant="subtitle2" className={classes.item}>
                        Patients
                    </Typography></NavLink>
                    <NavLink to="/claims"><Typography variant="subtitle2" className={classes.item}>
                        Claims
                    </Typography></NavLink>
                    <NavLink to="/evaadmin"><Typography variant="subtitle2" className={classes.item}>
                        Administration
                    </Typography></NavLink>
                    <NavLink to="/revenuecycle"><Typography variant="subtitle2" className={classes.item}>
                        Revenue Cycle
                    </Typography></NavLink>
                    <NavLink to="/faxes">
                        <Typography variant="subtitle2" className={classes.item}>
                        Faxes
                        </Typography>
                    </NavLink>
                    <NavLink to="/formscenter">
                        <Typography variant="subtitle2" className={classes.item}>
                            Forms Center
                        </Typography>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
/*
<A href="/">Home</A>
            <A href="/appointments">Appointments</A>
 */