import "./Advantage.css"
import chart from "../images/chart.png"
import user from"../images/Person.png"
import world from "../images/world-icon.png"
import illustration from "../images/second-img.png"
import Calculator from "./Calculator"
import "./Calculator.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"



export default function Advantage() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return(
        <div className="advantage">
            <div className="advantage--top">
                <div data-aos="zoom-in-up" className="chart">
                    <img className="chart--logo" src={chart} alt="chart icon" />
                    <div className="chart--content">
                        <h3 className="price">$30B</h3>
                        <p className="paragraph">Digital Currency Exchanged</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="chart">
                    <img className="chart--logo" src={user} alt="user icon" />
                    <div className="chart--content">
                        <h3 className="price">10M+</h3>
                        <p className="paragraph">Trusted Wallet Investors</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="chart">
                    <img className="chart--logo" src={world} alt="world icon" />
                    <div className="chart--content">
                        <h3 className="price">195</h3>
                        <p className="paragraph">Countries Supported</p>
                    </div>
                </div>
            </div>

            <div className="advantage--middle">
                <div data-aos="zoom-in-up" className="left">
                   <img src={illustration} alt="spaceship" />
                </div>
                <div data-aos="zoom-in-up" className="right">
                    <h3>Why you should choose CRAPPO</h3>
                    <p className="right-para">Experience the next generation cryptocurrency platform. No finantial borders, extra fees and fake reviews</p>
                    <button>Learn More</button>
                </div>

            </div>

            <div data-aos="zoom-in-up" className="advantage--bottom">
                <h3>Check how much you can earn</h3>
                <p>Let's check youe Hash rate and see how much you can earn today, well I am still richer than you, come off it.</p>
            </div>

            <Calculator />
        </div>
    )
}