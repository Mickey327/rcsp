import './Footer.css'
import {Col, Container, Nav, Row} from "react-bootstrap";

//TODO: refactor to Bootstrap components
function CustomFooter() {
    return (
        <Container fluid className="mt-auto">
            <Container fluid="xxl">
                <footer className="mt-3 py-2 border-top">
                    <Row>
                        <Col xl="2" className="mb-md-0 mb-3">
                            <h5 className="text-muted">Полезное</h5>
                            <Nav className="flex-column">
                                <Nav.Item className="mb-2">
                                    <Nav.Link href="/shop" className="text-white p-0">Главная</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mb-2">
                                    <Nav.Link href="/faq" className="text-white p-0">FAQ</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p className="text-white">&copy; 2023 Gametrade, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </Container>
        </Container>
    );
}

export default CustomFooter;