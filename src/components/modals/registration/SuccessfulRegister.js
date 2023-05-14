import React from 'react';
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../utils/consts";

const SuccessfulRegister = ({show, onHide}) => {
    const navigate = useNavigate()
    const closeModal = () => {
        onHide()
        navigate(LOGIN_ROUTE)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Успешная регистрация
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Вы успешно зарегистрировались!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={closeModal}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SuccessfulRegister;