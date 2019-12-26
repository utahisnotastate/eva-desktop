import React from 'react';
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "../basestyledcomponents/Card/Card";
import CardBody from "../basestyledcomponents/Card/CardBody";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardIcon from "../basestyledcomponents/Card/CardIcon";
import CardText from "../basestyledcomponents/Card/CardText";
import LineChart from "../basestyledcomponents/Chart/Components/LineChart/linechart";
import BarChart from "../basestyledcomponents/Chart/Components/BarChart/barchart";
import { straightLinesChart, simpleBarChart } from './fakeData/charts'

export default function RevenueCycle(props) {
    return (
        <div style={{marginTop: 15, padding: 20}}>
            <GridContainer direction="column">
                <GridItem xs={6} sm={2}>
                    <Card color={`primary`}>
                        <CardBody>
                            <Typography>Revenue Cycle Manager Overview</Typography>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <GridContainer>
                        <GridItem>
                            <Card color="success">
                                <CardBody>
                                    <Typography style={{color: '#ffffff'}}>Copyaments Recieved Today: $1000000</Typography>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card color="success">
                                <CardBody>
                                    <Typography style={{color: '#ffffff'}}>Claim Revenue in current Month Today: $1000000</Typography>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <GridContainer>
                        <GridItem>
                            <Card color="info">
                                <CardBody>
                                    <Typography style={{color: '#ffffff'}}>$10000 in pending claims</Typography>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <GridContainer>
                        <GridItem>
                            <Card color="danger">
                                <CardBody>
                                    <Typography style={{color: '#ffffff'}}>Total Outstanding Copayments: $1000000</Typography>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card color="danger">
                                <CardBody>
                                    <Typography style={{color: '#ffffff'}}>Total Denials for this month Value: $1000000</Typography>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem>
                            <Card color="danger">
                                <CardBody>
                                    <Typography style={{color: '#ffffff'}}>Total Claim Appeals Rejected: 10</Typography>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <GridContainer>
                        <GridItem>
                            <LineChart
                                chartbgcolor="warning"
                                chartdata={straightLinesChart.data}
                                chartoptions={straightLinesChart.options}
                                chartanimation={straightLinesChart.animation}
                                headlinetext={`Claim Revenue Per Month`}
                            />
                        </GridItem>
                        <GridItem>
                            <LineChart
                                chartbgcolor="warning"
                                chartdata={straightLinesChart.data}
                                chartoptions={straightLinesChart.options}
                                chartanimation={straightLinesChart.animation}
                                headlinetext={`Claims Submitted Per Month`}
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <GridContainer>
                        <GridItem>
                            <BarChart
                                chartbgcolor="success"
                                chartdata={simpleBarChart.data}
                                chartoptions={simpleBarChart.options}
                                chartResponsiveOptions={simpleBarChart.responsiveOptions}
                                chartanimation={simpleBarChart.animation}
                                headlinetext={`Total claims per month for provider 1`}
                            />
                        </GridItem>
                        <GridItem>
                            <BarChart
                                chartbgcolor="success"
                                chartdata={simpleBarChart.data}
                                chartoptions={simpleBarChart.options}
                                chartResponsiveOptions={simpleBarChart.responsiveOptions}
                                chartanimation={simpleBarChart.animation}
                                headlinetext={`Total claims per month for provider 2`}
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </div>
    );
}