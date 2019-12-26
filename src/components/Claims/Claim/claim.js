import React from 'react';
import { useParams } from "react-router-dom";
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../basestyledcomponents/Grid/GridItem";
import CustomTabs from "../../basestyledcomponents/CustomTabs/CustomTabs";
import Person from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";

export default function Claim(props) {
    let { claimId } = useParams();
    return (
        <div>
            <GridContainer justify={`center`}>
                <GridItem xs={12} sm={10}>
                    <CustomTabs
                        headerColor={`primary`}
                        tabs={[
                            {
                                tabName: 'Appointment Info',
                                tabIcon: Person,
                                tabContent: (<Typography>Appointment Info</Typography>)
                            },
                            {
                                tabName: 'Claim Info',
                                tabIcon: Person,
                                tabContent: (<Typography>Claimt Info</Typography>)
                            },
                            {
                                tabName: 'Claim History',
                                tabIcon: Person,
                                tabContent: (<Typography>Claim History</Typography>)
                            },
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}