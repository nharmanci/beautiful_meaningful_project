import React, {useEffect, useState} from 'react';
import Highlighter from "react-highlight-words";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { termsJensen, termsGeorge, articles } from '../files/data';

function Article (props) {
    const { idx} = props;
    console.log(idx)

    const termsJ = termsJensen.map(t=>(t["content"]));
    const termsG = termsGeorge.map(t=>(t["content"]));
    var number = idx !== null ? idx : 1 ;
    console.log(number)
    const temp1 = number !== null ? articles[number]["question"] : "";
    var text1 = "";
    for (let i=0; i<temp1.length; i++){
    text1 += temp1[i];
    }

    const temp2 = number !== null ? articles[number]["reply"] : "";
    var text2 = "";
    for (let i=0; i<temp2.length; i++){
    text2 += temp2[i];
    }

    if (number === null) {
        return (<div><p>please select drop down list</p></div>)
    } else {
        return (<div>
            <Link to="/">Home</Link>
            {console.log(articles[number])}
            <h2>{articles[number]["title"]}</h2>
            <h3>{articles[number]["metadata"]["date"]}</h3>
            <span className='jensen'>jensen </span><span className='george'>george</span>
            <br></br>
            <h4>question</h4>
            <div id='question'>
                <div id='questionJ' className='jensen'>
                <Highlighter
                highlightStyle={{backgroundColor: "pink"}}
                searchWords={termsJ}
                autoEscape={true}
                textToHighlight={text1}
                />
                </div>
                <div id='questionG' className='george'>
                <Highlighter
                    highlightStyle={{backgroundColor: "yellow"}}
                    searchWords={termsG}
                    autoEscape={true}
                    textToHighlight={text1}
                />
                </div>
            </div>
            <br></br>
            <h4>reply</h4>
            <div id='reply'>
                <div id='replyJ' className='jensen'>
                <Highlighter
                highlightStyle={{backgroundColor: "pink"}}
                searchWords={termsJ}
                autoEscape={true}
                textToHighlight={text2}
                />
                </div>
                <div id='replyG' className='george'>
                <Highlighter
                    highlightStyle={{backgroundColor: "yellow"}}
                    searchWords={termsG}
                    autoEscape={true}
                    textToHighlight={text2}
                />
                </div>
            </div>
        </div>
    )}


}

export default Article;