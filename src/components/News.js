import React from "react";
// import {createContext} from "react"

import {AppContext} from "../App"

export default function News(props){
     console.log("news rerendered")
    // const  aux = React.useContext(AppContext);
    
    
    return(
        <div>
            <a href={props.link}>
            <p>{props.title}</p>
            <p>{props.authors}</p>
            <p>{props.date}</p>
            <p>{props.topic}</p>
            <img src={props.media} alt="" />
            <p>{props.summary}</p>
            </a>
        </div>
        
        )
}