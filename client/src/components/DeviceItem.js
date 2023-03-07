import React, {useContext} from "react";
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import classes from "../css/style.css"

const DeviceItem = ({item, brand}) => {
    const history = useNavigate()
    return (
        <Col
            md={3}
            className="mt-2"
            onClick={() => history(DEVICE_ROUTE + '/' + item.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image className={classes} rounded={true} width={150} height={150} src={process.env.REACT_APP_API_URL + item.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-black-50">{brand}</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;