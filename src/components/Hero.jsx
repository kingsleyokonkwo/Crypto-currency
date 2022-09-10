import "./Hero.css"
import HeroImg from "../images/hero-img.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return(
        <div className="hero">
            <div className="hero--left">
                <div className="hero-top">
                    <h5 data-aos="zoom-in">75% SAVE</h5>
                    <p>For the Black Friday weekend</p>
                </div>
                <h2 data-aos="zoom-in-up">Fastest and secure platform to invest in crypto</h2>
                <p className="business" data-aos="zoom-in">Buy and sell cryptocurrencies, trusted by 10 million wallets with about $30billion in transaction</p>
                <button>Try for free</button>
            </div>
            <div data-aos="zoom-in" className="hero--right">
                <img src={HeroImg} alt="bitcoin illustration" />
            </div>
        </div>
    )
}