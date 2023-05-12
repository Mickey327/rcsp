import React from 'react';
import {Accordion, Container, Row, Col} from "react-bootstrap";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

//TODO: change theme to dark
const FAQ = () => {
    const tabs = [
        {
            id: 0,
            header: "Какие платформы поддерживает Gametrade?",
            description: "В настоящее время Gametrade поддерживается на всех современных браузерах."
        },
        {
            id: 1,
            header: "Каковы планы на будущее Gametrade?",
            description: "Вы можете найти информацию о запланированных функциях, обновлениях для разработчиков и основных известных проблемах в плане развития Gametrade в наших социальных сетях."
        },
        {
            id: 2,
            header: "Могу ли я опробовать игру перед покупкой?",
            description: "К сожалению данная функция пока не предусмотрена. Но мы думаем об её введении."
        },
        {
            id: 3,
            header: "Как оформить возврат в Gametrade?",
            description: "Вы можете оформить возврат за любую игру в течение 3-х дней с момента покупки по любой причине."
        },
        {
            id: 4,
            header: "Как связаться со службой поддержки?",
            description: "Связаться с нашей службой поддержки можно написав письмо по адресу gametrade@mail.ru."
        },
        {
            id: 5,
            header: "Какие языки поддерживает Gametrade?",
            description: "В настоящее время Gametrade поддерживает только русский язык. Мы работаем над локализацией для зарубежных пользователей."
        },
        {
            id: 6,
            header: "Какие способы оплаты вы поддерживаете?",
            description: "Gametrade поддерживает кредитные карты, PayPal, Bitcoin, Skinscash, Piastrix и множество альтернативных способов оплаты."
        },
        {
            id: 7,
            header: "Какие валюты вы принимаете и в каких валютах отображаются цены?",
            description: "В настоящее время Gametrade принимает только российский рубль (₽). Мы работаем над тем, чтобы принимать и другие."
        },
    ]
    return (
        <Container fluid className="bg-dark py-2">
            <Container fluid="xxl" className="px-2">
                <Row className="mb-2">
                    <Col className="aboutCompany">
                        <h1 className="fs-3 text-white">Часто задаваемые вопросы</h1>
                    </Col>
                </Row>
                <p className="fs-4 text-white faq-text">
                    <span>Последнее обновление: 2 мая 2023 г.</span>
                </p>
                <Accordion defaultActiveKey="0">
                    {tabs.map(tab => (
                        <AccordionItem key={tab.id} eventKey={tab.id}>
                            <AccordionHeader>
                                {tab.header}
                            </AccordionHeader>
                            <AccordionBody>
                                {tab.description}
                            </AccordionBody>
                        </AccordionItem>
                    ))}

                </Accordion>
            </Container>
        </Container>
    );
};
//TODO: Refactor it, make it divided to components
export default FAQ;