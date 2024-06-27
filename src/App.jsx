import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PropertyDetailsPage from "./pages/PropertyDetailsPage.jsx";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/property/:id" element={<PropertyDetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;