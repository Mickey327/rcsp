import Navbar from "../navbar/Navbar";
import './App.css';
import Faq from "../faq/faq";


import Footer from "../footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../main-page/MainPage";
function App() {
    return (
        <div>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>}></Route>
                    <Route path="/faq" element={<Faq/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
