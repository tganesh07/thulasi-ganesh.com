import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./page/about-me";
import NotFound from "./page/NotFound";
import Blogs from "./page/blog";
import BlogViewer from "./page/blogs/viewer";
import "./styles/styles.css";

function App() {
    return (
        //TODO: remove bootstrap class
        <div className="container">
            <Router>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" exact element={<AboutMe />} />
                        <Route path="/blog" element={<Blogs />} />
                        <Route path="/blog/:id" element={<BlogViewer />} />
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="*" element={<Navigate to="not-found" />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
