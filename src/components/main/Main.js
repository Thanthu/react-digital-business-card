import React from "react";
import './Main.css'
import emailIcon from '../../resources/mail-icon.png'

export default function Main() {
    return (
        <main>
            <h1 className="display-name">Thanthu U Nair</h1>
            <h2 className="role-name">Software Developer</h2>
            <a href="https://www.linkedin.com/in/thanthu-nair-4871a778/" className="personal-link">linkedin/thanthu</a>
            <button className="email-btn" onClick={() => { window.location = 'mailto:thanthu.test@gmail.com' }}>
                <img src={emailIcon} /> Email
            </button>
            <div className="body-container">
                <ContentBox title="About" content="I am currently working as backend Java developer with overall 7+ years of experience.
                        I am a Compurt Science Engineering graduate.
                        I started my career as an automation tester working with Selenium using Java for first 2 years and later on worked as application developer with Java, Spring Boot, Hibernate, AWS, AngularJS, Flutter etc." />
                <ContentBox title="Interests" content="Food, Learning, Travelling, Web Series, Cricket, Music, Movies." />

            </div>
        </main>
    );
}

function ContentBox(props) {
    return (
        <section>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </section>
    );
}