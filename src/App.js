import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./miContexto";

const App = () => {
    return (
        <BrowserRouter>
            <MiProvider>
                <Header />
                <Main />
            </MiProvider>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App