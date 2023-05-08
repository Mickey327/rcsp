import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateCompany from "../components/modals/CreateCompany";
import CreateCategory from "../components/modals/CreateCategory";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [companyVisible, setCompanyVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <h2 className="text-white mt-2">Панель администратора</h2>
            <Button variant="outline-light" className="mt-4 p-2" onClick={() => setCategoryVisible(true)}>
                Добавить категорию
            </Button>
            <Button variant="outline-light" className="mt-4 p-2" onClick={() => setCompanyVisible(true)}>
                Добавить компанию
            </Button>
            <Button variant="outline-light" className="mt-4 p-2" onClick={() => setProductVisible(true)}>
                Добавить товар
            </Button>
            <CreateCompany show={companyVisible} onHide={() => setCompanyVisible(false)}/>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;