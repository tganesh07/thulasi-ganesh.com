import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "./markdown/bloglist";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        setPosts(blogs);
    }, []);

    const handlePostClick = (fileName) => {
        if (fileName) {
            const path = fileName.replace(".md", "");
            navigate(`/blog/${path}`);
        }
    };

    return (
        <div className="blog">
            {posts.map((post) => (
                <div key={post.fileName} className="blog__item" onClick={() => handlePostClick(post.fileName)}>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
