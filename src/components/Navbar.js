import logo from "../logo.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="React logo" className="logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 class="nav--side_text">React Course - Project 1</h4>
        </nav>
    );
}
