function sum(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function sub(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function div(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

function multi(num1, num2){
    return parseInt(num1) * parseInt(num2);
}


const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log("Server in esecuzione sulla porta 3000");
});

app.get('/page_calc', function (req, res) {
    res.sendFile('calc.html',{root: __dirname+"/src"})
});



app.get('/page_sum', function (req, res) {
    res.sendFile('sum.html',{root: __dirname+"/src"})
});

app.get('/sum', function (req, res) {
    let param1 = req.query.value1;
    let param2 = req.query.value2;
    console.log("parametro 1:" + param1, "parametro 2:" + param2);
    risultato = sum(param1, param2);
    console.log("Risultato: "+ risultato);
    res.status(200).send(''+risultato);
});



app.get('/page_sub', function (req, res) {
    res.sendFile('sub.html',{root: __dirname+"/src"})
});

app.get('/sub', function (req, res) {
    let param1 = req.query.value1;
    let param2 = req.query.value2;
    console.log("parametro 1:" + param1, "parametro 2:" + param2);
    risultato = sub(param1, param2);
    console.log("Risultato: "+ risultato);
    res.status(200).send(''+risultato);
});



app.get('/page_div', function (req, res) {
    res.sendFile('div.html',{root: __dirname+"/src"})
});

app.get('/div', function (req, res) {
    let param1 = req.query.value1;
    let param2 = req.query.value2;
    console.log("parametro 1:" + param1, "parametro 2:" + param2);
    risultato = div(param1, param2);
    console.log("Risultato: "+ risultato);
    res.status(200).send(''+risultato);
});



app.get('/page_multi', function (req, res) {
    res.sendFile('multi.html',{root: __dirname+"/src"})
});

app.get('/multi', function (req, res) {
    let param1 = req.query.value1;
    let param2 = req.query.value2;
    console.log("parametro 1:" + param1, "parametro 2:" + param2);
    risultato = multi(param1, param2);
    console.log("Risultato: "+ risultato);
    res.status(200).send(''+risultato);
});