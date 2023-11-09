import React from "react";
import Dropdown from "react-dropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Articles } from "../files/data";
import { getData } from "../files/data";
import "../HomePage.css";

// Articles.array.forEach(element => {
    
// });

const options = [
    "article1", "article2", "article3"
];

function Home () {
    getData("P2023071200503");
    return (
        <div>
            <h1>this is where the HOME will be</h1>
            <Link to="/">Home</Link>
            <Link to='/ArticlePage'>Article</Link>
            <Dropdown options={options} placeholder="pls select an article" arrowClosed={<span className="arrow-closed"/>} arrowOpen={<span className="arrow-open"/>}/>
        </div>
    )
}

export default Home;