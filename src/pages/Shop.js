import React from 'react';
import ProductList from "../components/product-list/ProductList";
import {Col, Container, Row} from "react-bootstrap";
import Typebar from "../components/typebar/Typebar";
import Companybar from "../components/companybar/Companybar";

const Shop = () => {
    return (
        <Container fluid>
            <Container fluid="xxl">
                <Row className="mb-2">
                    <Col md={3} className="mt-2">
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