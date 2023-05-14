import React from 'react';
import {useNavigate} from "react-router-dom";
import {CHECKOUT_ROUTE} from "../../../utils/consts";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

const ProcessOrder = ({show, onHide}) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.users)
    const closeModal = () => {
        onHide()
        navigate({
            pathname: CHECKOUT_ROUTE,
            search: '?orderID' + user.order.id
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Успешная оформление заказа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Вы успешно оформили заказ! Дальнейшие инструкции по оплате придут на вашу почту: {user.email}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={closeModal}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProcessOrder;