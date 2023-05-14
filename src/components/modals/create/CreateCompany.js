import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {createCompany, readCompany} from "../../../http/companyAPI";
import {setCompanies} from "../../../reducers/productsSlice";
import {useDispatch} from "react-redux";

const CreateCompany = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const addCompany = () => {
        createCompany({name: value}).then(() => {
            readCompany().then(data => {
                dispatch(setCompanies(data.companies))})
                setValue('')
                onHide()
            }).catch(error => {
                setError(error.response.data.message)
            })
        }


    const closeModal = () => {
        setError('')
        setValue('')
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить компанию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        placeholder={"Введите название компании"}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
                {error !== "" &&
                    <span className={"text-danger"}>{error}</span>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCompany}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCompany;