import React from 'react';
import ProductList from "../components/product-list/ProductList";
import {Col, Container, Row} from "react-bootstrap";
import Typebar from "../components/typebar/Typebar";
import Companybar from "../components/companybar/Companybar";
import {checkHello} from "../http/userAPI";
import Button from "react-bootstrap/Button";

const Shop = () => {
    const helloCheck = async () => {
        const response = await checkHello()
        console.log(response)
        return response
    }

    return (
        <Container fluid>
            <Container fluid="xxl">
                <Row className="mb-2">
                    <Col md={3} className="mt-2">
                        <Button onClick={helloCheck}></Button>
                        <Typebar/>
                        <Companybar/>
                    </Col>
                    <Col md={9} className="mt-2">
                        <ProductList/>
                    </Col>

                </Row>
            </Container>
        </Container>
    );
};

export default Shop;