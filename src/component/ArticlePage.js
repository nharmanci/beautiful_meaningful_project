import React, {useEffect, useState} from 'react';
import Highlighter from "react-highlight-words";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { termsJensen, termsGeorge, articleData } from '../files/data';

const termsJ = termsJensen.map(t=>(t["content"]));
const termsG = termsGeorge.map(t=>(t["content"]));

const temp1 = articleData[1]["question"];
var text1 = "";
for (let i=0; i<temp1.length; i++){
  text1 += temp1[i];
}

const temp2 = articleData[1]["reply"];
var text2 = "";
for (let i=0; i<temp2.length; i++){
  text2 += temp2[i];
}

function Article () {
    return (
        <div>
            <Link to="/">Home</Link>
            <h2>{articleData[1]["title"]}</h2>
            <h3>{articleData[1]["metadata"]["date"]}</h3>
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
    );
}

export default Article;