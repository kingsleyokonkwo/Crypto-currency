import "./Footer.css"
import logo from "../images/logo.png"
import mastercard from "../images/mastercard.png"
import bitcoin from "../images/btc-logo.png"
import visa from "../images/Visa.png"
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer--top">
                <div className="FT-logo">
                    <img className="logo-img" src={logo} alt="logo" />
                    <h3 className="logo-title">CRAPPO</h3>
                </div>
                <div className="FT-link">
                    <h3 className="FT-h3">Quick Link</h3>
                    <ul className="list">
                        <li>Home</li>
                        <li>Product</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="FT-link">
                    <h3 className="FT-h3">Resources</h3>
                    <ul className="list">
                        <li>Download Whitepaper</li>
                        <li>Smart token</li>
                        <li>Crypto API</li>
                        <li>Blockchain Explorer</li>
                        <li>Interests</li>
                    </ul>
                </div>
                <div className="FT-link">
                    <h3 className="FT-h3">We accept the following payment systems</h3>
                    <span className="FT-span">
                        <img className="span-img" src={visa} alt="visa logo" />
                        <img className="span-img"src={mastercard} alt="mastercard logo" />
                        <img className="span-img"src={bitcoin} alt="bitcoin logo" />
                    </span>
                </div>
            </div>
            <div className="footer--bottom">
                <p>©2021 CRAPPO. All rights reserved</p>
                <span className="icon--span">
                    <FaFacebook className="icon"/>
                    <FaInstagram className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaTwitter className="icon"/>
                    <FaLinkedin className="icon"/>
                </span>
            </div>
        </div>
    )
}