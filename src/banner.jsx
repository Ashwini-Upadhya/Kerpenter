import React from "react";

export default function Banner({ className,textCalss, Header, Parra}) {
    return(
        <div className={className}>
        <div className={textCalss}>
        <h1>{Header}</h1>
        <p>{Parra}</p>
        <button className='getStarted'>Get Started</button >
        </div>
        <form action="/acrtion" className="form" > <input className="subsButton" id="subInput" placeholder="your email address here" type="email" /> 
        <button className='subsButton' id="subutton" type='submit'>Subscribe</button></form>
      </div>
    )
}