import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import ProductItem from "../product-item/ProductItem";


function ProductList() {
    const goods = useSelector(state => state.products.goods)

    return (
        <Row className="d-flex g-4 pb-2">
            {goods.map(good =>
                <ProductItem key={good.id} product={good}/>
            )}
        </Row>
    );
}

export default ProductList;