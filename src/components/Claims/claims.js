import React from 'react';
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from '../basestyledcomponents/Grid/GridItem';
import ClaimsTableContainer from "./ClaimsTableContainer/claimstablecontainer";

export default function Claims() {
    return (
        <div>
            <div>
                <h3>Claims Center</h3>
            </div>
            <div>
                <GridContainer justify={`center`}>
                    <GridItem xs={12} sm={10}>
                        <ClaimsTableContainer />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}