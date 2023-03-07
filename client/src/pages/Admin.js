import React, {useState} from 'react'
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                className='mt-3'
                variant={'outline-dark'}
                onClick={()=>setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                className='mt-3'
                variant={'outline-dark'}
                onClick={()=>setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                className='mt-3'
                variant={'outline-dark'}
                onClick={()=>setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
}

export default Admin;