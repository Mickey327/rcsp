import React from 'react';
import CardRow from "../components/card-row/CardRow";
import CardProduct from "../components/card-product/CardProduct";
import destiny from "../assets/destiny.jpg";
import halo from "../assets/halo-5-guardians-game-wallpaper_1680x1050.jpg";
import dishonored from "../assets/Dishonored.jpg";
import callOfDuty from "../assets/Call_Of_Duty.jpg";
import {Container, Row} from "react-bootstrap";

const Shop = () => {
    return (
        <Container fluid className="bg-dark">
            <Container fluid="xxl">
                <Row className="mb-2">
                    <span className="fs-4 text-white">Популярное</span>
                </Row>
                <CardRow>
                    <CardProduct image={destiny} card={{name: 'Destiny', description: 'Крутая дестини', price: 259}}/>
                    <CardProduct image={halo} card={{name: 'Halo 5', description: 'Новая хало', price: 349}}/>
                    <CardProduct image={dishonored}
                                 card={{name: 'Dishonored', description: 'Классический dishonored', price: 449}}/>
                    <CardProduct image={callOfDuty}
                                 card={{name: 'Call of Duty', description: 'Неотразимый call of duty', price: 549}}/>
                </CardRow>
            </Container>
        </Container>
    );
};

export default Shop;