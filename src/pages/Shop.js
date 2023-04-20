import React from 'react';
import CardRow from "../components/card-row/CardRow";
import CardProduct from "../components/card-product/CardProduct";
import destiny from "../assets/destiny.jpg";
import halo from "../assets/halo-5-guardians-game-wallpaper_1680x1050.jpg";
import dishonored from "../assets/Dishonored.jpg";
import callOfDuty from "../assets/Call_Of_Duty.jpg";

const Shop = () => {
    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="container-xxl">
                    <div className="row mb-2">
                        <span className="fs-4 text-white">Популярное</span>
                    </div>
                    <CardRow>
                        <CardProduct image={destiny} card={{name: 'Destiny', description: 'Крутая дестини', price: 259}}/>
                        <CardProduct image={halo} card={{name: 'Halo 5', description: 'Новая хало', price: 349}}/>
                        <CardProduct image={dishonored}
                                     card={{name: 'Dishonored', description: 'Классический dishonored', price: 449}}/>
                        <CardProduct image={callOfDuty}
                                     card={{name: 'Call of Duty', description: 'Неотразимый call of duty', price: 549}}/>
                    </CardRow>
                </div>
            </div>
        </div>
    );
};

export default Shop;