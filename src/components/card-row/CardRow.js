import {Row} from "react-bootstrap";


function CardRow(props) {
    return (
        <Row xs={1} md={2} lg={4} className="g-4 pb-2">
            {props.children}
        </Row>
    );
}

export default CardRow;