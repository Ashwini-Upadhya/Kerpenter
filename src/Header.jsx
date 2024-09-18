import React from "react";
import './Header.css'

export default function Header () {
    return(
    <div className="header">
        <img className='logo' src='public/Group 2 1.svg'></img>
        <div class="social-icon mail">
            <img src="Icon.svg" alt="Mail Icon" className="icon" />
            <div class="social-text">
                <strong>Mail Us</strong>
                <p>Info@Example.com</p>
            </div>
        </div>
        <div class="social-icon call">
            <img src="Icon call.svg" alt="Call Icon" className="icon" />
            <div class="social-text">
                <strong>Call Us</strong>
                <p>+01 569 896 654</p>
            </div>
        </div>

    </div>
       
    )
}
