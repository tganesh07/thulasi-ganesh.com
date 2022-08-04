import React from "react";
import Avatar from "../../images/avatar.png";

const AboutMe = () => {
    return (
        <article className="about">
            <blockquote className="brand">
                <p>Hi!</p>
                <p>I am just like you.</p>
                <p className="brand__text">
                    Interested in a few things and Software Development is one among the few and here I share
                    things(Best Practices, Tricks, Shortcuts, etc.) that I have learned, practised and enjoyed during my
                    professional and personal projects.
                </p>
                <footer>
                    <div className="signature">
                        <div className="signature__image">
                            <img src={Avatar} alt="" style={{ width: 100, height: 100, borderRadius: 50 }} />
                        </div>
                        <div className="signature__body">
                            <h3 className="signature__title brand__author">Thulasi Ganesh</h3>
                        </div>
                    </div>
                </footer>
            </blockquote>
        </article>
    );
};

export default AboutMe;
