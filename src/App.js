import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
