import { React, useState, useEffect }from "react";
import Dropdown from "react-dropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { articles } from "../files/data.js";
import "../HomePage.css";
import Article from "./ArticlePage.js";


function Home () {
    const titles = articles.map(t=>t["title"]);
    const [ number, setNumber ] = useState(null);

    function changeNumber(evt) {
        console.log(evt.value.props.id);
        setNumber(evt.value.props.id);
        return evt.value.props.id
    }
    
    function genLinks() {
        var links = [];
        for (let i=0; i<articles.length; i++){
            links.push(<p id={i}>{articles[i]["title"]}</p>);
        }
        return links;
    }
    
    // console.log(number);
    return (

        <div>
            <Dropdown options={genLinks()} onChange={(evt) => <Article idx={changeNumber(evt)}/>} placeholder="pls select an article" /> 
            <Article idx={number}/>
        </div>
    )
}

export default Home;
export var number;