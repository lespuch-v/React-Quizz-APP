import React from "react"
import '../App.css';

export default function Firstpage(props){
    return(
        <div className="firstpage-container">
            <section className="start">
            <h1>Test your knowledge! 📒</h1>
            <button onClick={props.toggleFirstPage} >Start</button>
            </section>
        </div>
    )
}