import React, {useEffect, useState} from 'react';
import {Col, Container, Form, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {readProductById, readProductComments, writeProductComment} from "../http/productAPI";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {NOT_FOUND_ROUTE} from "../utils/consts";
import {updateOrderProduct} from "../http/orderAPI";
import {setOrder} from "../reducers/usersSlice";
import CommentSection from "../components/comment-section/CommentSection";

const Product = () => {
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState({})
    const [company, setCompany] = useState({})
    const {id} = useParams()
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [comments, setComments] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        searchParams.set('fetch', 'eager')
        readProductById(id, searchParams).then(data => {
            setProduct(data.product)
            setCompany(data.product.company)
            setCategory(data.product.category)
        }).catch(() => {
            navigate(NOT_FOUND_ROUTE)
        }).then(() => {
            searchParams.delete('fetch')
            if (product.id !== undefined) {
                searchParams.set('productID', product.id)
                readProductComments(searchParams).then((data) => setComments(data.comments)).catch(() => console.log("error reading product comments"))
            }
        })
    }, [id, navigate, product.id, searchParams])

    const increaseItemQuantity = (productID, orderID) => {
        updateOrderProduct(productID, orderID, 1).then((data) => {
            dispatch(setOrder(data.order))
        }).catch(() => console.log("error increasing item quantity"))
    }

    const sendMessage = (productID) => {
        const formData = new FormData()
        formData.append('message', message)
        console.log(user)
        searchParams.delete('fetch')
        searchParams.set('productID', productID)
        writeProductComment(formData, searchParams).then(() => {
            readProductComments(searchParams).then((data) =>
                setComments(data.comments)
            ).catch(() => console.log("error reading product comments"))
        }).catch(() => console.log("error writing comment"))
    }


    const user = useSelector(state => state.users)

    return (
        <Container>
            <Row>
                <Col sm={5}>
                    <Image className="mt-5 w-100" src={process.env.REACT_APP_API_URL + product.image}></Image>
                </Col>
                <Col sm={7} className="mt-5  text-white">
                    <h1>{product.name}</h1>
                    <h4>Категория: {category.name}</h4>
                    <h4>Компания: {company.name}</h4>
                    <h4>Описание: {product.description}</h4>
                    {product.stock === 0 ?
                        <h4 className="text-danger">Нет в наличии</h4>
                    :
                        <h4>В наличии: {product.stock} шт.</h4>
                    }

                    <h4>Цена: <span>{product.price}</span> ₽</h4>
                    {user.role === "user" && product.stock !== 0 ?
                        <Button variant="outline-success" onClick={() => increaseItemQuantity(product.id, user.order.id)}>Добавить в корзину</Button>
                        :
                        user.role === "user" && product.stock === 0 ?
                            <p>Извините, но данный товар закончился</p>
                            :
                            user.role === "admin" ?
                                <p>Администратор не может добавлять товар в корзину</p>
                                :
                                <p>Авторизуйтесь, чтобы добавить товар в корзину</p>
                    }
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="text-white">
                    <h3>Комментарии</h3>
                    {user.role === "user"
                        ?

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Если имеются вопросы по товару или хотите оставить свой отзыв, то напишите
                                комментарий!</Form.Label>
                            <Form.Control style={{resize: "none"}} as="textarea" value={message}
                                          onChange={e => setMessage(e.target.value)} rows={3}
                                          placeholder="Тут можете написать ваш комментарий к товару..."/>
                        </Form.Group>
                        <Button variant={"outline-success"} onClick={() => {
                            sendMessage(product.id)
                        }}>
                            Отправить комментарий
                        </Button>
                    </Form>
                            :
                            user.role === "admin"
                            ?
                                <p>Функционал отправки комментариев не предусмотрен для администраторов. Если хотите ответить клиенту, отправьте ему ответ с рабочей почты</p>
                                :
                                <p>Авторизуйтесь, чтобы оставить комментарий.</p>
                        }

                </Col>
            </Row>
            <Row>
            {comments.map(comment =>
                <CommentSection key={comment.user_email} comment={comment}/>
            )}
            </Row>
        </Container>
    );
};

export default Product;