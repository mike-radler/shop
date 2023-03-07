import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex" style={{height: 416}}>
            {device.devices.map(item =>
                <DeviceItem key={item.id} item={item} brand={device.brands.at(item.brandId - 1).name}/>,
            )}

        </Row>
    );
});

export default DeviceList;