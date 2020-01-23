import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../basestyledcomponents/Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIcon from '@material-ui/icons/Assignment';
import axios from "axios";
import PresentUnpresentAllergy from "./presentunpresentallergy/presentunpresentallergy";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AllergyList from "./allergylist/allergylist";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    formcontainer: {
        marginBottom: 15,
    },
    areaicon: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
    },
    areatitletext: {
        padding: 20,
    }
});

export default function Allergies(props) {
    let { id } = useParams();
    const classes = useStyles();
    const [latexstatus, setlatexstatus] = useState();
    const [pollenstatus, setpollenstatus] = useState();
    const [drugallergies, setDrugAllergies] = useState([]);
    const [insectallergies, setInsectAllergies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/latexallergy/`);
            setlatexstatus(result.data[0].status)
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/pollenallergy/`);
            // console.log(result.data[0].status)
            setpollenstatus(result.data[0].status);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/drugallergy/`);
            console.log(result.data);
            setDrugAllergies(result.data);


        };
        fetchData();

    }, []);
    console.log(drugallergies);
    return (
        <div style={{margin: 20}}>
            <Grid container className={classes.root} alignItems="flex-start">
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Drug Allergies</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AllergyList allergy={`Drug`} allergies={drugallergies}/>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Food Allergies</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>

                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Insect Allergies</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>

                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Latex Allergy</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <PresentUnpresentAllergy allergy={`Latex`} status={latexstatus}/>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Pet Allergies</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>

                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Pollen Allergy</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <PresentUnpresentAllergy allergy={`Pollen`} status={pollenstatus}/>
                    </Paper>
                </div>
            </Grid>
        </div>
    );
}