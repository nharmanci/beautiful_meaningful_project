import terms_jensen from './terms_jensen.json';
import terms_george from './terms_george_tf.json';
import P2023071200503 from './articles/P2023071200503.json';
import P2023071200494 from "./articles/P2023071200494.json";
import P2023071200629 from "./articles/P2023071200629.json";
import { useState } from "react";
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const importAll = (r) => {
    return r.keys().map(r);
}

const articles = importAll(require.context("./articles", false, /\.json$/));

export const termsJensen = terms_jensen;
export const termsGeorge = terms_george;
// export const articleData = [P2023071200494, P2023071200503, P2023071200629];
export {articles};



// DEPRECATED:
// import * as Articles from "./articles";
// export const articles = Articles;
// export const Articles = articles;
// export async function getData(fileName) {
//     let f = `./articles/${fileName}.json`;
//     console.log(f);
//     const data = await import(f);
//     console.log(data);
//     return data;
// }
// export const getData = (fileName) => {
//     // retrieving data based on the input file name
//     console.log(fetchData(fileName))
// }