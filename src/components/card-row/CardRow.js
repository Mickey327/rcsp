

function CardRow(props) {
    return (
        <div className="row row-cols-1  row-cols-md-2 row-cols-lg-4 g-4 pb-2">
            {props.children}
        </div>
    );
}

export default CardRow;