import React from 'react';
import CustomTabs from "../../basestyledcomponents/CustomTabs/CustomTabs";
import Person from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import ClaimsToBeWorkedTable from "./ClaimsToBeWorkedTable/claimstobeworkedtable";
import ClaimsInProcessTable from "./ClaimsInProcessTable/claimsinprocesstable";
import BaseClaimsTable from "./BaseClaimsTable/baseclaimstable";
import pendingclaimscolumns from "./PendingClaimsTable/pendingclaimscolumns";

export default function ClaimsTableContainer(props) {
    return (
        <CustomTabs
            headerColor={`primary`}
            tabs={[
                {
                    tabName: 'Claims to be Worked',
                    tabIcon: Person,
                    tabContent: (<ClaimsToBeWorkedTable />)

                },
                {
                    tabName: 'In Process Claims',
                    tabIcon: Person,
                    tabContent: (<ClaimsInProcessTable />)

                },
                {
                    tabName: 'Pending Claims',
                    tabIcon: Person,
                    tabContent: (<BaseClaimsTable claims_filter={`pending`} table_title={`Pending Claims`} columns={pendingclaimscolumns}/>)

                },
                {
                    tabName: 'Approved, Pending Payment',
                    tabIcon: Person,
                    tabContent: (<BaseClaimsTable claims_filter={`pending_payment`} table_title={`Pending Claims`} columns={pendingclaimscolumns}/>)

                },
                {
                    tabName: 'Denied Claims',
                    tabIcon: Person,
                    tabContent: (<BaseClaimsTable claims_filter={`denied`} table_title={`Denied Claims`} columns={pendingclaimscolumns}/>)

                },
                {
                    tabName: 'Completed Claims',
                    tabIcon: Person,
                    tabContent: (<BaseClaimsTable claims_filter={`completed`} table_title={`Completed Claims`} columns={pendingclaimscolumns}/>)

                }
            ]}

        />

    );
}