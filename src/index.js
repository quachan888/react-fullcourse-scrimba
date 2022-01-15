import React from "react";
import ReactDOM from "react-dom";

const navbar = (
    <nav>
        <h1>An Quach seting React local</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
