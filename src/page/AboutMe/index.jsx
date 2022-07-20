import React from "react";
import "./index.css";

const AboutMe = () => {
    return (
        <article className="about">
            <h3>Do you know me?</h3>
            <h4 className="about--caption">if not you have come to the right place.</h4>
            <br />
            <p>Hi!</p>
            <p>I am just like you!</p>
            <p>
                Interested in a few things and Software Development is one among the few and here I share things(Best
                Practices, Tricks, Shortcuts, etc.) that I have learned, practised and enjoyed during my professional
                and personal projects.
            </p>
            <p className="about--author"> Thulasi Ganesh</p>
        </article>
    );
};

export default AboutMe;
