import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./page/about-me";
import NotFound from "./page/NotFound";
import "./styles/styles.css";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" exact element={<AboutMe />} />
                    {/* <Route path="/about" element={<AboutMe />} />
                        <Route path="/blog" element={<Blogs />} /> */}
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="not-found" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
