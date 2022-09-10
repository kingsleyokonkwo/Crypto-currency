import  "./Cryptocurrencies.css"
import CryptoData from "./CryptoData"
import Crypto from "./Crypto"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Cryptocurrencies() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    
    return(
        <div className="cryptocurrency">
            <h3 data-aos="zoom-in-up" className="title">Trade securely and market the high growth Cryptocurrencies.</h3>
            <div data-aos="zoom-in" className="crypto--container">
                {CryptoData.map((val, ind)=> {
                    return(
                        <Crypto 
                            key={ind}
                            img={val.img}
                            crypto={val.crypto}
                            shortform={val.shortform}
                            note={val.note}
                        />
                    )
                })}
            </div>

        </div>
    )
}