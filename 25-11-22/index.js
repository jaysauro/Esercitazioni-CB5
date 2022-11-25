const express = require("express");
const mod_calc = require("./src/modulo_calcolatrice");

const app = express();

app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000!");
});

app.get("/sum", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.sum(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/page_sum", function(req, res){
    res.sendFile("sum.html", {root: __dirname+"/src/resources"});
});



app.get("/sub", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.sub(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/page_sub", function(req, res){
    res.sendFile("sub.html", {root: __dirname+"/src/resources"});
});



app.get("/div", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.div(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/page_div", function(req, res){
    res.sendFile("div.html", {root: __dirname+"/src/resources"});
});



app.get("/multi", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.multi(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/page_multi", function(req, res){
    res.sendFile("multi.html", {root: __dirname+"/src/resources"});
});



app.get("/page_home", function(req, res){
    res.sendFile("calc.html", {root: __dirname+"/src/resources"});
});