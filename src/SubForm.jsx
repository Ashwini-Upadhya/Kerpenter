import React from "react";

export default function SubForm() {
    return(
        <div>
            <form action="/acrtion" className="form" > <input className="subsButton" id="subInput" placeholder="your email address here" type="email" /> 
            <button className='subsButton' id="subutton" type='submit'>Subscribe</button></form>
        </div>
    )
}