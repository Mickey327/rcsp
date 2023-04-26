import twitter from '../../assets/twitter_circle_logo.svg'
import instagram from '../../assets/inst_circle_logo.svg'
import youtube from '../../assets/youtube_circle_logo.svg'
import './Footer.css'

function Footer(props) {
    return (
        <div className="container-fluid footer-back">
            <div className="container-xxl">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-xl-2 col-12 mb-md-0 mb-3">
                            <h5 className="text-muted">Полезное</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#"
                                                                 className="nav-link p-0 text-white">Главная</a></li>
                                <li className="nav-item mb-2"><a href="#"
                                                                 className="nav-link p-0 text-white">Каталог</a></li>
                                <li className="nav-item mb-2"><a href="#"
                                                                 className="nav-link p-0 text-white">FAQ</a></li>
                                <li className="nav-item mb-2"><a href="#"
                                                                 className="nav-link p-0 text-white">О компании</a></li>
                                <li className="nav-item mb-2"><a href="#"
                                                                 className="nav-link p-0 text-white">Пользовательское
                                    соглашение</a></li>
                                <li className="nav-item mb-2"><a href="#"
                                                                 className="nav-link p-0 text-white">Политика
                                    конфиденциальности</a></li>
                            </ul>
                        </div>

                        <div className="col-xl-4 col-12 offset-xl-5">
                            <form>
                                <h5 className="text-white">Подпишитесь на нашу рассылку.</h5>
                                <p className="text-white">Мы будем присылать вам письма с новыми акциями.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control"
                                           placeholder="Ваш e-mail"/>
                                        <button className="btn btn-primary subscribe-button" type="button"
                                                data-bs-toggle="modal" data-bs-target="#orderModal">Подписаться
                                        </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p className="text-white">&copy; 2021 Gametrade, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="https://twitter.com"><img
                                src={twitter} alt="logo" width="36" height="36"
                                role="img" aria-label="twitter"/></a></li>
                            <li className="ms-3"><a className="link-dark" href="https://instagram.com"><img
                                src={instagram} alt="logo" width="36" height="36"
                                role="img" aria-label="instagram"/></a></li>
                            <li className="ms-3"><a className="link-dark" href="https://youtube.com"><img
                                src={youtube} alt="logo" width="36" height="36"
                                role="img" aria-label="youtube"/></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;