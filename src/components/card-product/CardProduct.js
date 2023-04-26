import './CardItem.css'
function CardProduct({image, card}) {
    return (
        <div className="col">
            <div className="card h-100 product-info">
                <img src={image} className="card-img-left product-image" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title product-name">{card.name}</h5>
                    <p className="card-text d-xl-block d-none">{card.description}</p>
                    <div className="button-card-position d-inline">
                        <button className="btn btn-primary me-2 add-button">Купить</button>
                        <span className="text-black"> <span className="text-black price">{card.price} &#8381;</span> / 1 шт.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;