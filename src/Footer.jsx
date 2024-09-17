import React from "react";
import Header from "./Header";
import './Footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <Header/>
            <div  className="footerDiv">
                <span className="item">
                    <p>Denouncing pleasure and praising pain was born and I will givg you a coghmplete acchount of the system, and expound the actual</p>
                    <span>
                    <img src="1.svg" alt="" /><img src="2.svg" alt="" /><img src="3.svg" alt="" /><img src="4.svg" alt="" />
                    </span>
                </span>
                <span className="item">
                    <h4>Explore</h4>
                    <a href="">About Us</a><br />
                    <a href="">Gallary</a><br />
                    <a href="">Offers</a><br />
                    <a href="">Pricing</a><br />
                    <a href="">FAQ</a>
                </span>
                <span className="item"  id="QuickLink">
                    <h4>Quick links</h4>
                    <a href="">Advantages</a><br />
                    <a href="">Functions</a><br />
                    <a href="">Prices</a><br />
                    <a href="">Demo</a><br />
                    <a href="">Contact Us</a><br />
                    <a href="">Partners</a><br />
                </span>
                
            </div>  
        </div>
    )
}