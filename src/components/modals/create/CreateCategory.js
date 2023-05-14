import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {createCategory, readCategory} from "../../../http/categoryAPI";
import {useDispatch} from "react-redux";
import {setCategories} from "../../../reducers/productsSlice";

const CreateCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()



    const addCategory = () => {
        createCategory({name: value}).then(() => {
            readCategory().then(data => dispatch(setCategories(data.categories)))
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
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        placeholder={"Введите название категории"}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
                {error !== "" &&
                    <span className={"text-danger"}>{error}</span>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCategory}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;