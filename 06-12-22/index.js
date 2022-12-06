const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const attoriRouting = require("./src/routing_attori.js");

// ---------------- connect to mongodb ------------------
mongoose.connect("mongodb://localhost:27017/videoteca",{useUnifiedTopology:true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

// ----------- DB tabella attori ----------------
const schema_attore = new mongoose.Schema({
    "nome": String,
    "cognome": String,
    "data_nascita": String,
    "riconoscimenti": String,
    "inizio_attivita": String,
    "fine_attivita": String,
    "in_attivita": Boolean
});
const modelAttore = mongoose.model("attoris",schema_attore);
// -------------------------------------------------------

// ----------------- DB tabella registi -------------------
const schema_regista = new mongoose.Schema({
    "nome": String,
    "cognome": String,
    "data_nascita": String,
    "riconoscimenti": String,
    "inizio_attivita": String,
    "fine_attivita": String,
    "in_attivita": Boolean
});
const medelRegista = mongoose.model("registis", schema_regista);
// -----------------------------------------------------------


const insertAttore = async(obj)=>{
    const user = new modelAttore(obj);
    try {
        return await user.save();
    } catch (error) {
        return error;
    }
} 

const searchAttore = async(find_object)=> {
    try {
        const actor = await modelAttore.find(find_object);
        return actor;
    } catch (error) {
        return error;
    }
} 

const deleteAttore = async(id_attore)=> {
    try {
        const actor = await modelAttore.deleteOne({_id: id_attore});
        return actor;
    } catch (error) {
        return error;
    }
} 

const updateAttore = async(find_object, update_object) => {
    try {
        const actor = await modelAttore.findOneAndUpdate(find_object, update_object);
        return actor;
    } catch (error) {
        return error;
    }
}

// -------------------------------------------------------------

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.listen(3000,()=>{
    console.log("Salve, sono in esecuzione sulla porta 3000.");
});

app.post("/login", function(req, res) {
    if(req.body.username == undefined || req.body.username.length==0) {
        res.status(400).send("Username mancante");
    }

    if(req.body.password == undefined || req.body.password.length==0) {
        res.status(400).send("Password mancante");
    }


    // cerco l'utente nei miei files
    const utenti = fs.readFileSync('./src/users.json');
    const utenti_json = JSON.parse(utenti);

    const m_utente = utenti_json.filter((utente) => {
        return utente.username.toLowerCase() === req.body.username.toLowerCase();
    })

    if(m_utente[0].length==0) {
        res.status(400).send("Nome utente o password errati");
    }

    const utente = m_utente[0];
    if(utente.password != req.body.password) {
        res.status(400).send("Nome utente o password errati");
    }

    //Can change 7 to 2 for longer results.
    let r = (Math.random() + 1).toString(36).substring(7);
    utente.token = r;
    // ---------- salvo il token ----------------
    const index = utenti_json.findIndex((utente) => {
        return utente.username.toLowerCase() === req.body.username.toLowerCase();
    });
    if(index >= 0) {
        utenti_json.splice(index, 1, utente);
        fs.writeFileSync('./src/users.json',JSON.stringify(utenti_json));
    }
    // --------------------------

    res.json({token:r});
    
/*
    if(req.body.password === req.body.username) {
        res.json({token:"qwerty"});
    } else  {
        res.status(400).send("Credenziali errate.");
    }*/
});

app.get("/search", function (req, res) {
    console.log(2);
    res.sendFile("search.html", { root: __dirname + "/src/html" });
  });

app.get("/delete", function (req, res) {
    res.sendFile("delete.html", {root: __dirname+"/src/html"});
});
  
app.get("/create", function (req, res) {
    res.sendFile("create.html", { root: __dirname + "/src/html" });
});
  
app.get("/update", function (req, res) {
    res.sendFile("update.html", { root: __dirname + "/src/html" });
});

// ------------------------ ATTORI ------------------
/*
app.get("/attore", function(req, res) {
    const id_attore = req.query.id;
    if (id_attore == undefined) {
        res.status(400).send("Parametro id non trovato.");
    }
    const id_attore_numerico = parseInt(id_attore);
    if (isNaN(id_attore_numerico)) {
        res.status(400).send("Parametro inviato non è un numero.");
    }

    const attori = fs.readFileSync('./src/attori.json');
    const attori_json = JSON.parse(attori);

    const m_attore = attori_json.filter((attore) => {
        return attore.id === id_attore_numerico;
    })
    res.json(m_attore[0]);

});
*/

app.get("/attore/name", function(req, res) {
    const name_attore = req.query.name;
    if (name_attore == undefined) {
        res.status(400).send("Parametro id non trovato.");
    }

    const find_object = {nome: name_attore};
    const attore = searchAttore(find_object);
    attore.then((actor)=> {
        // console.log(actor);
        res.send(actor);
    })
});

app.post("/attore", function(req, res){
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome attore mancante");
    }

    if(req.body.cognome == undefined || req.body.cognome.length==0) {
        res.status(400).send("Cognome attore mancante");
    }

    const nuovo_attore = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const insert = insertAttore(nuovo_attore);
    insert.then((actor)=> {
        console.log(typeof actor);
        res.status(200).send("Attore creato");
    
    })
})

app.delete("/attore", function(req, res){
    // ricevo l'id
    if (req.body.id === undefined){
        res.status(400).send("Parametro id mancante!");
    }

    const id_da_cancellare = req.body.id;
    const attore = deleteAttore(id_da_cancellare);
    attore.then((actor)=> {
        console.log(actor);
        res.send(actor);
    })
    
});

app.put("/attore", function(req, res){
    if (req.body.id == undefined){
        res.status(400).send("Parametro id mancante!");
    }

    find_object = {_id:req.body.id};
    
    //update_object = {riconoscimenti : req.body.riconoscimenti};


    const update_object = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const attore = updateAttore(find_object, update_object);
    attore.then((actor)=> {
        console.log(actor);
        res.send(actor);
    })
    
})
