import React from "react";
import ReactDOM from "react-dom";

function MainPage() {
    return (
        <div className="container bg-dark text-white p-3">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header>
            <nav>
                <img width="40px" src="https://iotvnaw69daj.i.optimole.com/AXVzL2w.n2y9~6666f/w:142/h:133/q:90/dpr:1.3/https://www.codeinwp.com/wp-content/uploads/2019/01/react-logo.png" alt="" />
            </nav>
        </header>
    );
}

function Footer() {
    return <footer>@ 2022 An Quach development. All rights reserved.</footer>;
}

function MainContent() {
    return (
        <div>
            <h1 className="text-info">Reason I want to learn React</h1>
            <ol>
                <li>Find a new job in Software field</li>
                <li>Learn MERN stack</li>
                <li>Program my own software</li>
            </ol>
        </div>
    );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
