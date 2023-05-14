import React, {useEffect, useState} from 'react';
import ProductList from "../components/product-list/ProductList";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import Categorybar from "../components/categorybar/Categorybar";
import Companybar from "../components/companybar/Companybar";
import {readCategory} from "../http/categoryAPI";
import {useDispatch} from "react-redux";
import {
    setCategories,
    setCompanies,
    setProducts,
} from "../reducers/productsSlice";
import {readCompany} from "../http/companyAPI";
import {readProduct} from "../http/productAPI";
import {useSearchParams} from "react-router-dom";

const Shop = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        readCompany().then(data => {
            dispatch(setCompanies(data.companies))
        })
        readCategory().then(data => {
            dispatch(setCategories(data.categories))
        })
        readProduct(searchParams).then(data => {
            dispatch(setProducts(data.products))
        }).catch(() => {
            dispatch(setProducts([]))
        }).finally(() => setLoading(false))
    }, [dispatch, searchParams])



    if (loading) {
        return(
        <Container fluid="xxl d-flex justify-content-center align-items-center vh-100">
            <Spinner className="jus" animation="border" role="status" variant={"light"} size="xxl">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
        )

    }

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