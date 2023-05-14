import React, {useEffect, useState} from 'react';
import {Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownItem from "react-bootstrap/DropdownItem";
import {readCategory} from "../../../http/categoryAPI";
import {setCategories, setCompanies, setSelectedCategory, setSelectedCompany} from "../../../reducers/productsSlice";
import {readCompany} from "../../../http/companyAPI";
import {createProduct} from "../../../http/productAPI";

const CreateProduct = ({show, onHide}) => {
    const product = useSelector(state => state.product)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const closeModal = () => {
        setError('')
        setName('')
        setDescription('')
        setPrice('')
        setStock('')
        setFile('')
        onHide()
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('stock', `${stock}`)
        formData.append('file', file)
        formData.append('companyID', product.selectedCompany.id)
        formData.append('categoryID', product.selectedCategory.id)
        createProduct(formData).then(() => onHide())
    }

    useEffect(() => {
        readCategory().then(data => dispatch(setCategories(data.categories)))
        readCompany().then(data => dispatch(setCompanies(data.companies)))
    }, [dispatch])

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
                    <Form.Control placeholder="Введите название товара" value={name} onChange={e => setName(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Введите описание товара" value={description} onChange={e => setDescription(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Введите стоимость товара" value={price} onChange={e => setPrice(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Введите количество товара" value={stock} onChange={e => setStock(e.target.value)}/>
                    <Form.Control className="mt-3" placeholder="Добавьте изображение товара"  type="file" onChange={selectFile}/>
                    <hr/>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>{product.selectedCategory.name || "Выберите категорию"}</DropdownToggle>
                        <Dropdown.Menu>
                            {product.categories.map(category =>
                                <DropdownItem key={category.id} onClick={() => dispatch(setSelectedCategory(category))}>{category.name}</DropdownItem>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>{product.selectedCompany.name || "Выберите компанию"}</DropdownToggle>
                        <Dropdown.Menu>
                            {product.companies.map(company =>
                                <DropdownItem key={company.id} onClick={() => dispatch(setSelectedCompany(company))}>{company.name}</DropdownItem>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
                {error !== "" &&
                    <span className={"text-danger"}>{error}</span>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}>Закрыть</Button>
                <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;