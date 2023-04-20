import React from 'react';

const FAQ = () => {
    return (
        <div className="container-xxl px-2 mb-5">
            <div className="row mb-4">
                <div className="col-12 aboutCompany">
                    <h1 className="fs-3 text-white">Часто задаваемые вопросы</h1>
                </div>
            </div>

            <p className="fs-4 text-white faq-text">
                <span>Последнее обновление: 4 декабря 2021 г.</span>
            </p>
            <div className="accordion " id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed text-white" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                aria-controls="collapseOne">
                            Какие платформы поддерживает Gametrade?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            В настоящее время Gametrade поддерживается на всех современных браузерах.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-white" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                            Каковы планы на будущее Gametrade?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Вы можете найти информацию о запланированных функциях, обновлениях для разработчиков и
                            основных известных проблемах в плане развития Gametrade в наших социальных сетях.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Могу ли я опробовать игру перед покупкой?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            К сожалению данная функция пока не предусмотрена. Но мы думаем об её введении.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Как оформить возврат в Gametrade?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Вы можете оформить возврат за любую игру в течение 3-х дней с момента покупки по любой
                            причине.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Как связаться со службой поддержки?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Связаться с нашей службой поддержки можно написав письмо по адресу gametrade@mail.ru.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Какие языки поддерживает Gametrade?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            В настоящее время Gametrade поддерживает только русский язык. Мы работаем над локализацией
                            для зарубежных пользователей.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Поддерживает ли Gametrade региональные цены?
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Да, мы поддерживаем региональные цены во всех странах СНГ. У нас также есть регулярно
                            пересматриваемый набор рекомендуемых региональных скидок с учётом особенностей каждого
                            региона.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            Какие способы оплаты вы поддерживаете?
                        </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Gametrade поддерживает кредитные карты, PayPal, Bitcoin, Skinscash, Piastrix и множество
                            альтернативных способов оплаты.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            Где доступен Gametrade?
                        </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Gametrade доступен игрокам в большинстве стран по всему миру за исключением стран, на
                            которые распространяется запрет, предусмотренный законодательством США, например Северной
                            Кореи и Ирана. В некоторых существует дополнительные правовые условия, которые необходимо
                            соблюсти, прежде чем вы сможете распространять там свою игру.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTen">
                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            Какие валюты вы принимаете и в каких валютах отображаются цены?
                        </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                         data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            В настоящее время Gametrade принимает только российский рубль (₽). Мы работаем над тем,
                            чтобы принимать и другие.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
//TODO: Refactor it, make it divided to components
export default FAQ;