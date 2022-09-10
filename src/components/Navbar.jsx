import "./Navbar.css"
import logo from "../images/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

export default function Navbar() {
    
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    return(
        <div className="header">
            <div className="header--logo">
                <img src={logo} alt="logo" />
                <h3 className="name">CRAPPO</h3>
            </div>
            <div className={click ? "header--links active" : "header--links"}>
                <ul className="lists">
                    <li>Product</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="sign">
                    <p className="login">Login</p>
                    <button>Register</button>
                </div>
            </div>
            <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={25} style={{color: "#fff"}} />
                    ) : (
                        <FaBars size={25} style={{color: "#fff"}} />
                    )}
            </div>
        </div>
    )
}