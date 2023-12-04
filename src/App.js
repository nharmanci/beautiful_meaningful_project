import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Article from "./component/ArticlePage";
import Home from "./component/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/ArticlePage' element={< Article />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;