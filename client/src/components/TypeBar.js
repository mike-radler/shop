import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup variant="flush" style={{cursor: "pointer"}}>
            {device.types.map(type =>
                <ListGroup.Item
                    style={type.id === device.selectedType.id ? {background: 'black', color: 'white'} : {}}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;