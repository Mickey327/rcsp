import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router/AppRouter";
import CustomFooter from "./components/footer/CustomFooter";
import CustomNavbar from "./components/navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {check} from "./http/userAPI";
import {auth, setUserEmail, setUserId, setUserRole} from "./reducers/usersSlice";
import {Spinner} from "react-bootstrap";

function App() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.users)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            dispatch(setUserId(data.id))
            dispatch(setUserEmail(data.email))
            dispatch(setUserRole(data.role))
            dispatch(auth())
        }).catch(() => {
            console.log("no jwt session, start as guest")
        }).finally(() => setLoading(false))

    }, [dispatch, user.role])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

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
