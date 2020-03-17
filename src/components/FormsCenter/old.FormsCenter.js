import React, {useState} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import FormBuilderTool from "./FormBuilderTool";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Card from "../basestyledcomponents/Card/Card";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import {Button, Typography} from "@material-ui/core";
import './formscenter.css';


function SectionComponent(props) {
    const [sectioncomponents, setsectioncomponents] = useState([]);

    return(
        <Droppable droppableId="sectioncomponent">
            {(provided, snapshot) => (
                <div className={`section-tool-container`} ref={provided.innerRef}>
                    <div>
                        <Typography>Render items: </Typography>
                        <Button>Horizontal</Button>
                        <Button>Vertical</Button>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>

    )
}

function BasicInput(props) {
    return (
        <div key={props.index}>
            <label htmlFor={props.name}>{props.name}</label>
            <input name={props.name} type="text"/>
        </div>
    )

}

const basictool = {
    id: '1',
    name: 'Basic Tool',
    component: BasicInput,
}

const formtool = {
    id: '2',
    name: 'Section Tool',
    component: SectionComponent,
}

function CustomFormComponent(props) {
    return (
        <Draggable key={props.tool.id} draggableId={props.tool.id} index={props.index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Typography>{props.tool.name}</Typography>
                </div>
            )}
        </Draggable>
    );
}
function FormBuilderTool(props) {
    return (
        <Draggable key={props.tool.id} draggableId={props.tool.id} index={props.index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Typography>{props.tool.name}</Typography>
                </div>
            )}
        </Draggable>

    )
}

function FormBuilderToolsList(props) {
    return (
        <div>
            {props.tools.map(tool => (
                <div key={tool.id} style={{border: '1px solid green'}}>
                    <Typography>{tool.name}</Typography>
                </div>
            ))}

        </div>
    );

}

export default function FormsCenter() {
    const [formbuildertools, setFormBuilderTools] = useState([basictool, formtool]);
    const [customformcomponents, setCustomFormComponents] = useState([]);

    function onDragUpdate(update) {
        console.log(update);
    }
    function onDragEnd(result) {
        console.log(result)

        if (result.source.droppableId === result.destination.droppableId) {
            return;
        }
        if (result.source.droppableId === "formtools" && result.destination.droppableId === "formbuilder" ) {
            console.log(formbuildertools.find(formbuildertool => formbuildertool.id === result.draggableId));
            let copiedformtool = formbuildertools.find(formbuildertool => formbuildertool.id === result.draggableId);
            console.log(copiedformtool);
            // customformcomponents.push(formbuildertools.find(formbuildertool => formbuildertool.id === result.draggableId));
            let randomid = Math.floor(Math.random() * 100) + 1;

            console.log({id: Math.floor(Math.random() * 100) + 1, name: copiedformtool.name, component: copiedformtool.component });
            customformcomponents.push({id: randomid.toString(), name: copiedformtool.name, component: copiedformtool.component });

        }

    }
    return (
        <div style={{padding: 15}}>
            <GridContainer>
                <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} >
                    <GridItem xs={10}>
                        <Card>
                            <CardHeader>Form Preview</CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem  className={`formbuilder-droppable-container`}>
                                        <Droppable droppableId="formbuilder">
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef}>
                                                    {customformcomponents.map((tool, index) => (
                                                        <Draggable key={tool.id} draggableId={tool.id} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <tool.component name={tool.name} index={index}/>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={2}>
                        <Card>
                            <CardHeader>Form Inputs</CardHeader>
                            <CardBody>
                                <GridContainer flexDirection={`column`}>
                                    <Droppable droppableId="formtools">
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef}>
                                                {formbuildertools.map((tool, index) => (
                                                    <Draggable key={tool.id} draggableId={tool.id} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <Typography>{tool.name}</Typography>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </DragDropContext>
            </GridContainer>
        </div>
    )
}


/*
{formbuildertools.map(tool => (
                                        <GridItem>
                                            <FormBuilderTool tool={tool}/>
                                        </GridItem>
                                    ))}

                                    <div style={{backgroundColor: '#000000', height: '20vh'}} ref={provided.innerRef} {...provided.droppableProps}>
                                                    {customformcomponents.map((tool, index) => (
                                                        <CustomFormComponent tool={tool} />
                                                    ))}
                                                </div>
 */