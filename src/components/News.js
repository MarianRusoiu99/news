import React from "react";
// import {createContext} from "react"

export default function News(props){
     console.log("news rerendered")
    // const  aux = React.useContext(AppContext);
    
    
    return(
        <div className="article--container">
            <a href={props.link} className="article--link">
            <p className="title">{props.title}</p></a>
            <div className="meta">
            <p className="author">{props.authors}</p>
            <p className = "date">{props.date}</p>
            <p className = "topic">{props.topic}</p>
            </div>

            <a href={props.link} className="article--link">
            <img src={props.media} alt="" className="image"/>
            </a>
            <a href={props.link} className="article--link">
            <p className="summary">{props.summary}</p>
            </a>
        </div>
        
        )
}