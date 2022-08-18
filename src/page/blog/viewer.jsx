import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";

const BlogViewer = () => {
    const [post, setPost] = useState("");
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            import(`./markdown/${id}.md`).then((res) => {
                fetch(res.default)
                    .then((res) => res.text())
                    .then((res) => setPost(res))
                    .catch((err) => console.log(`logged - ${err}`));
            });
        }
    }, [id]);

    return (
        <div className="viewer">
            <Markdown>{post}</Markdown>
        </div>
    );
};

export default BlogViewer;
