import React, {useEffect} from 'react';
import ProductList from "../components/product-list/ProductList";
import {Col, Container, Row} from "react-bootstrap";
import Categorybar from "../components/categorybar/Categorybar";
import Companybar from "../components/companybar/Companybar";
import {readCategory} from "../http/categoryAPI";
import {useDispatch} from "react-redux";
import {setCategories, setCompanies} from "../reducers/productsSlice";
import {readCompany} from "../http/companyAPI";

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        readCategory().then(data => {
            dispatch(setCategories(data.categories))
        })
        readCompany().then(data => {
            dispatch(setCompanies(data.companies))
        })
    }, [dispatch])

    return (
        <Container fluid>
            <Container fluid="xxl">
                <Row className="mb-2">
                    <Col md={3} className="mt-2">
                        <Categorybar/>
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