import React from "react";
import Header from "./Header";
import Banner from "./banner";
import './Footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <Banner className="secondBanner" textCalss="textdiv"  Header="Subscribe Our Newsletter"
                Parra={<p><strong>stay in touch with us to get latest news.</strong> maximus mattis est facilisi. In sed pretium Proin pretium id urna sit amet tincidunt.</p>}></Banner>
            <div className="header White">
                <img className='logo' src='public/Group 2 1.svg'></img>
                <div>
                    <div class="social-icon mail">
                        <img src="mail white.svg" alt="Mail Icon" className="icon" />
                        <div class="social-text">
                            <strong>Mail Us</strong>
                            <p>Info@Example.com</p>
                        </div>
                    </div>
                    <div class="social-icon call">
                        <img src="Call white.svg" alt="Call Icon" className="icon" />
                        <div class="social-text">
                            <strong>Call Us</strong>
                            <p>+01 569 896 654</p>
                        </div>
                    </div>
                    <div class="social-icon location">
                        <img src="Location white.svg" alt="Location Icon" className="icon" />
                        <div class="social-text">
                            <strong>Location</strong>
                            <p>Amsterdam, 109-74</p>
                        </div>
                    </div>
                </div>
            </div>
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