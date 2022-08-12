import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const BlogViewer = ({ fileName }) => {
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

export default BlogViewer;
