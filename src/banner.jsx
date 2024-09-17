import React from "react";
import SubForm from "./SubForm";

export default function Banner({ className,textCalss, Header, Parra}) {
    return(
        <div className={className}>
        <div className={textCalss}>
        <h1>{Header}</h1> <br/>
        <p>{Parra}</p>
        <button className='getStarted'>Get Started</button >
        </div>
        <SubForm/>
      </div>
    )
}