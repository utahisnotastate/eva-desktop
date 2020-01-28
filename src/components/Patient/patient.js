import React, {useEffect} from 'react';
import {Card, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useParams, useRouteMatch, Link, Switch, Route, NavLink } from "react-router-dom";
import {Paper, Typography} from "@material-ui/core";
import routes from "./routes";
import axios from "axios";
import {useStateValue} from "../ClinicalQueue/context/ClinicalQueueContext";

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
    }
}));

export default function Patient(props) {
    let { path, url } = useRouteMatch();
    const classes = useStyles();
    let { id } = useParams();
    console.log(id);

    return (
        <Grid container>
            <Grid item xs={2}>
                <List className={classes.list}>
                    {routes.map((route) => (
                        <ListItem className={classes.listitem} key={route.path}>
                            <NavLink activeStyle={{color: '#0232b2'}} to={`${url}${route.path}`}>
                                <ListItemText primary={<Typography className={classes.sideitem} variant="body1">{route.label}</Typography>}/>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid
                item
                xs={10}
                >
                    <Switch>
                        <Route exact path={path}>
                            <Typography variant="body1">Content</Typography>
                        </Route>
                        {routes.map ((route) => (
                            <Route key={route.path} exact path={`${path}${route.path}`} component={route.component} />
                        ))}

                    </Switch>
            </Grid>
        </Grid>
    );
}