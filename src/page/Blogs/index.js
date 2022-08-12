import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const Blog = ({ fileName }) => {
    const [post, setPost] = useState("");

    useEffect(() => {
        import(`./markdown/${fileName}`).then((res) => {
            fetch(res.default)
                .then((res) => res.text())
                .then((res) => setPost(res))
                .catch((err) => console.log(err));
        });
    });
    return <Markdown>{post}</Markdown>;
};

const Blogs = () => {
    const [posts, setPosts] = useState([
        {
            fileName: "Top5VSCodeExtensions.md",
            title: "Top 5 VS Code extensions for Web Development",
            desc: "It is the year 2022 and Microsoft's Visual Studio Code is the best IDE for Web Developers.",
        },
        { fileName: 2, title: "React Js shortcuts", desc: "React js is simply beautiful" },
    ]);

    return (
        <div className="blog">
            {posts.map((post) => (
                <div key={post.fileName} className="blog__item" onClick={() => console.log(`clicked ${post.fileName}`)}>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
