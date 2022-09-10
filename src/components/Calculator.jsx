import "./Calculator.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Calculator() {
    useEffect(() => {
        Aos.init({duration: 2500})
    }, [])
    return(
        <div data-aos="zoom-in" className="calculator">
            <form className="calc-form">
                <div className="input-data">
                    <input className="input" type="text" placeholder="Enter your Hash rate" />
                </div>
                
                <select className="select">
                    <option selected value="TH/s">TH/s</option>
                    <option value="KH/s">KH/s</option>
                    <option value="H/s">H/s</option>
                    <option value="MH/s">MH/s</option>
                    <option value="GH/s">GH/s</option>
                </select>
                <button className="calc-btn">Calculate</button>
            </form>
            <p className="revenue">ESTIMATED 24 HOUR REVENUE</p>
            <h3 className="amount">0.055 130 59 ETH <span>($1275)</span></h3>
            <p className="revenue--">Revenue will change based on mining difficulty and Ethereum price</p>
        </div>
    )
}