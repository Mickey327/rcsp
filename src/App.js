import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router/AppRouter";
import Footer from "./components/footer/Footer";
import CustomNavbar from "./components/navbar/Navbar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <CustomNavbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
