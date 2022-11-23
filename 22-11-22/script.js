import{sum, sub, div, multi} from "./calc.js";


import http from "http";
import url from "url";
import fs from "fs";

const homeMsg = "Benvenuto sulla home!";


const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true).pathname;
    const params = url.parse(req.url, true).query;
    const {value1, value2} = params;

   switch(myUrl) {
    case "/home":
    res.write(homeMsg);
    break;
    case "/calcolatrice":
    const data1 = fs.readFileSync("./html_files/calc.html");
    res.write(data1.toString());
    break;
    case "/sum":
        const data2 = fs.readFileSync("./html_files/sum.html");
        res.write(data2.toString());
        res.write(`${sum(value1, value2)}`);
    break;
    case "/sub":
        const data3 = fs.readFileSync("./html_files/sub.html");
        res.write(data3.toString());
        res.write(`${sub(value1, value2)}`);
    break;
    case "/div":
        const data4 = fs.readFileSync("./html_files/div.html");
        res.write(data4.toString());
        res.write(`${div(value1, value2)}`);
    break;
    case "/multi":
        const data5 = fs.readFileSync("./html_files/multi.html");
        res.write(data5.toString());
        res.write(`${multi(value1, value2)}`);
    break;
    case "/style.css":
        const data6 = fs.readFileSync("./style.css");
        res.write(data6.toString());
    default:
    res.write(myUrl + "Errore. La pagina non esiste, ritorna alla <a href='/home> Homepage </a></p>")
   }
   res.end();
 });


server.listen(3000);

console.log("server in ascolto");
