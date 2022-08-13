import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        //TODO: fetch json file or parse all markdown files to prepare this obj array
        setPosts([
            {
                fileName: "Top-5-VSCode-Extensions-for-web-development.md",
                title: "Top 5 VS Code extensions for Web Development",
                desc: "It is the year 2022 and Microsoft's Visual Studio Code is the best IDE for Web Developers.",
            },
            { fileName: 2, title: "React Js shortcuts", desc: "React js is simply beautiful" },
        ]);
    }, []);

    const handlePostClick = (fileName) => {
        const path = fileName.replace(".md", "");
        navigate(`/blog/${path}`);
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
