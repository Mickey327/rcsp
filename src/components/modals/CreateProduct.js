import React from 'react';
import {Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownItem from "react-bootstrap/DropdownItem";

const CreateProduct = ({show, onHide}) => {
    const product = useSelector(state => state.products)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder="Введите название устройства"/>
                    <Form.Control className="mt-3" placeholder="Введите описание устройства"/>
                    <Form.Control className="mt-3" placeholder="Введите стоимость устройства" type="number"/>
                    <Form.Control className="mt-3" placeholder="Добавьте изображение устройства" type="file"/>
                    <hr/>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>Выберите категорию</DropdownToggle>
                        <Dropdown.Menu>
                            {product.categories.map(category =>
                                <DropdownItem key={category.id}>{category.name}</DropdownItem>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>Выберите компанию</DropdownToggle>
                        <Dropdown.Menu>
                            {product.companies.map(company =>
                                <DropdownItem key={company.id}>{company.name}</DropdownItem>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;