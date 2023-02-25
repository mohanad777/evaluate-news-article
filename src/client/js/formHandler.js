import { ValidURL } from "./checkURL.js";


export function handleForm(){
    const articleUrl= document.getElementById('article-url').value;
let validURL=(ValidURL(articleUrl))?   articleUrl: '';
return validURL;
}