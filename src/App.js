import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./page/AboutMe";
import Blogs from "./page/Blogs";
import Home from "./page/Home";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/blog" element={<Blogs />} />
            </Routes>
        </Router>
    );
}

export default App;
