import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import ProductItem from "../product-item/ProductItem";
import React from "react";


function ProductList() {
    const products = useSelector(state => state.product.products)



    return (
        <Row className="d-flex g-4 pb-2">
            {products.length !== 0 ?
                products.map(good =>
                    <ProductItem key={good.id} product={good}/>)
                :
                <div className="d-flex mt-5 align-items-center justify-content-center h-100">
                    <div className="text-center text-white">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-3"><span className="text-danger">Уупс!</span> Товары c такими характеристиками не найдены.</p>
                    </div>
                </div>
            }
        </Row>
    );
}

export default ProductList;