import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";

function MainPage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="mb-3">
            <nav className="nav">
                <img className="nav-logo" src={logo} />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function Footer() {
    return <footer>@ 2022 An Quach development. All rights reserved.</footer>;
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Reason I want to learn React</h1>
            <ol>
                <li>Find a new job in Software field</li>
                <li>Learn MERN stack</li>
                <li>Program my own software</li>
            </ol>
        </div>
    );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
