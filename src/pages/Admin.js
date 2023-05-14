import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateCompany from "../components/modals/create/CreateCompany";
import CreateCategory from "../components/modals/create/CreateCategory";
import CreateProduct from "../components/modals/create/CreateProduct";


const Admin = () => {
    const [addCategoryVisible, setAddCategoryVisible] = useState(false)
    const [addCompanyVisible, setAddCompanyVisible] = useState(false)
    const [addProductVisible, setAddProductVisible] = useState(false)

    return (
        <Container className="d-flex flex-column text-white">
            <Row>
                <h2 className="text-white mt-2">Панель администратора</h2>
                <Col>
                    <Button variant="outline-light" className="mt-4 p-2 w-100" onClick={() => setAddCategoryVisible(true)}>
                        Добавить категорию
                    </Button><br/>
                    <Button variant="outline-light" className="mt-4 p-2 w-100" onClick={() => setAddCompanyVisible(true)}>
                        Добавить компанию
                    </Button><br/>
                    <Button variant="outline-light" className="mt-4 p-2 w-100" onClick={() => setAddProductVisible(true)}>
                        Добавить товар
                    </Button>
                </Col>
            </Row>

            <CreateCompany show={addCompanyVisible} onHide={() => setAddCompanyVisible(false)}/>
            <CreateCategory show={addCategoryVisible} onHide={() => setAddCategoryVisible(false)}/>
            <CreateProduct show={addProductVisible} onHide={() =>{setAddProductVisible(false)}}/>
        </Container>
    );
};

export default Admin;