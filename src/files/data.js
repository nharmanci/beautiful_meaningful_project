import terms_jensen from './terms_jensen.json';
import terms_george from './terms_george_tf.json';

import { useCallback, useState } from "react";


export const termsJensen = terms_jensen;
export const termsGeorge = terms_george;
// export const articleData = [P2023071200503, P2023071200494, P2023071200629];
// export const Articles = articles;


// export function getData(fileName) {
//     console.log(`using getData function ${fileName}`)
//     var data = new Promise(function(resolve, reject) {
        
//         
//     })

//     return data;
// }

export function getData(fileName) {
    
    var f = `./articles/${fileName}.json`;
    console.log(f);

    const data = fetch(f,
        {headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then(res => res.json()).then(data => console.log(data));
    return data;

}

// export const getData = (fileName) => {
//     // retrieving data based on the input file name
//     console.log(fetchData(fileName))

// }