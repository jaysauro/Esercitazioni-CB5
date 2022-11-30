const express = require("express");
const fs = require("fs");
const app = express();
const { uuid } = require('uuidv4');


const creazioneAttore = (body) => {
    const nuovoAttore = {
      id: body.id == undefined ? uuid() : parseInt(body.id),
      nome: body.nome,
      cognome: body.cognome,
      data_nascita: body.data_nascita == undefined ? "" : body.data_nascita,
      riconoscimenti: body.riconoscimenti == undefined ? "" : body.riconoscimenti,
      inizio_attivita:
        body.inizio_attivita == undefined ? "" : body.inizio_attivita,
      fine_attivita: body.fine_attivita == undefined ? "" : body.fine_attivita,
      in_attivita: body.in_attivita == undefined ? "" : body.in_attivita,
    };
    return nuovoAttore;
  };


app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
    console.log("Server in esecuzione sulla porta 3000!");
});

app.get("/attori", function(req, res) {
    const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attoriText);

    const attoriArr = attori.map((att) => {
        const {id, nome, cognome} = att;
        return {id, nome, cognome}
    });

    res.json(attoriArr);
});

app.get("/attore", function(req, res){
    const idAttore = parseInt(req.query.id);
    if (isNaN(idAttore)) {
        res.status(400).send("Attenzione: Parametro mancante.");
    }

    const attoriText = fs.readFileSync('.src/attori.json', 'utf8');
    const attori = JSON.parse(attoriText);

    const IdAtt = attori.find((attore) => {
        return attore.id == idAttore;
    });

    if(typeof IdAtt === 'undefined') {
        res.status(400).send("Attenzione: attore non trovato.");
    } else {
        res.json(IdAtt);
    }
});


app.post("/attore", function(req,res) {
    console.log(req.body.nome);
    if (req.body.nome == undefined) {
        res.status(400).send("Attenzione: parametro nome mancante o non valido.");
    }
    if (req.body.cognome == undefined) {
        res.status(400).send("Attenzione: parametro cognome mancante o non valido.");
    }

    const attoreCreato = creazioneAttore(req.body);

    const attoriText = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attoriText);

    attori[attori.length] = attoreCreato;

    fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
    res.status(200).json({msg: "Attore creato"});
})

app.delete("/attore", function (req, res) {
    console.log(req.body.id);
      if (req.body.id == undefined) {
      res.status(400).send("Parametro id mancante");
    }
    if (isNaN(parseInt(req.body.id))) {
      res.status(400).send("Parametro non numerico");
    }
  
    const deleteId = req.body.id;
  
    const attoriJson = fs.readFileSync("./src/attori.json", "utf8");
    const attori = JSON.parse(attoriJson);
  
    const arrayDeleted = attori.filter((attore) => {
      return attore.id != deleteId;
    });
  
    fs.writeFileSync("./src/attori.json", JSON.stringify(arrayDeleted));
    res.status(200).send(arrayDeleted);
});

app.get("/home", function(req, res) {
    res.sendFile("attori.html", {root: __dirname+"/src/html"});
});