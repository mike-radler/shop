import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Image, Row, Card} from "react-bootstrap";
import star from '../assets/star.jpg'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import data from "bootstrap/js/src/dom/data";

const Device = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${star}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover",
                                color: "white",
                                fontSize: "70px"
                            }}
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card border={'light'} className='justify-content-center align-items-center mt-5'>
                        <h3>{device.price}</h3>
                        <Button className='mt-5' variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column'>
                <h1> Характеристики:</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default Device;