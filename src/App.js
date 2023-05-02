import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router/AppRouter";
import CustomFooter from "./components/footer/CustomFooter";
import CustomNavbar from "./components/navbar/Navbar";
import {Container} from "react-bootstrap";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="App bg-dark">
                    <CustomNavbar/>
                    <AppRouter/>
                    <CustomFooter/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
