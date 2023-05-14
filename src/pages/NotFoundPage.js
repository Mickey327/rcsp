import React from 'react';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center text-white">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"><span className="text-danger">Уупс!</span> Страница не найдена.</p>
                <p className="lead">
                    Страница, которую вы искали не существует.
                </p>
                <Button variant={"primary"} onClick={() => navigate(SHOP_ROUTE)}>Вернуться в магазин</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;