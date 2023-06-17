import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Search from "./Search";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
