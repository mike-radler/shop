import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Form} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Form className="d-flex" style={{cursor: "pointer"}}>
            {device.brands.map(brand =>
                <Card
                    className={brand.id === device.selectedBrand.id ? "text-white bg-dark m-1 p-1" : "m-1 p-1"}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;