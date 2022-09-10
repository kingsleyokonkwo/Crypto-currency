import "./Market.css"
import charts from "../images/btc1.png"
import charts2 from "../images/btc2.png"
import charts3 from "../images/btc3.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Market() {
    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])
    return(
        <div className="market">
            <h3 data-aos="zoom-in" className="m-title">Market sentiments, portfolio and run the infrastructure of your choice</h3>

            <div className="market--top">
                <div data-aos="zoom-in-up" className="top-left">
                    <h4>Invest smart</h4>
                    <p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                    <button>learn more </button>
                </div>
                <div data-aos="zoom-in" className="top-right">
                    <img className="TR-img" src={charts} alt="btc chart" />
                </div>
            </div>

            <div className="market--middle">
                <div data-aos="zoom-in-up" className="middle-left">
                    <img className="middle--img" src={charts2} alt="btc chart" />
                </div>
                <div data-aos="zoom-in" className="middle-right">
                    <h4 className="MR-h4">Detailed statistics</h4>
                    <p className="MR-p">View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                    <button>learn more </button> 
                </div>
            </div>

            <div className="market--buttom">
                <div data-aos="zoom-in-up" className="buttom-left">
                    <h4 className="BL-h4">Grow your profit and track your investments</h4>
                    <p className="BL-p">Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                    <button>learn more </button>
                </div>
                <div data-aos="zoom-in"className="buttom-right">
                    <img className="BR-img" src={charts3} alt="btc chart" />
                </div>
            </div>

            <div data-aos="zoom-in-up"className="market--form">
                <div>
                    <h3 className="MF-h3">Start mining now</h3>
                    <p className="MF-p">Join now with CRAPPO to get the latest news and start mining now</p>
                </div>
                <div className="subscribe">
                    <form className="form">
                        <input type="email" placeholder="Enter your email" />
                    </form>
                    
                </div>
                <button className="form-btn">Subscribe</button>
            </div>
        </div>
    )
}