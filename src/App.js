import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./page/AboutMe";
import Blogs from "./page/Blogs";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

function App() {
    return (
        <main className="container">
            <Router>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/blog" element={<Blogs />} />
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="*" element={<Navigate to="not-found" />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
