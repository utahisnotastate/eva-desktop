import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {Typography} from "@material-ui/core";


export default function FormBuilderTool(props) {
    return (
        <Draggable draggableId={props.tool.id}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Typography>{props.tool.name}</Typography>
                </div>
            )}
        </Draggable>

    )
}

/*
 <div key={props.tool.id} style={{border: '1px solid green'}}>
            <h1>Form Builder Tool</h1>
        </div>
 */