const express = require("express");
const fs = require("fs");
const app = express();
const { uuid } = require("uuidv4");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const middlewareProva = (req, res, next) => {
  console.log("Richiesta ricevuta.");
  next();
};

app.listen(3000, () => {
  console.log("Server in esecuzione sulla porta 3000!");
});

//pagina home
app.get("/home", middlewareProva, function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src/html" });
});

/*----- ATTORI -----*/
//funzione creazione attore
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

//restituisce tutti gli attori
app.get("/attori", function (req, res) {
  const attoriText = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attoriText);

  const attoriArr = attori.map((att) => {
    const { id, nome, cognome } = att;
    return { id, nome, cognome };
  });

  res.json(attoriArr);
});

//singolo attore filtrato per id
app.get("/attore", function (req, res) {
  const idAttore = parseInt(req.query.id);
  if (isNaN(idAttore)) {
    res.status(400).send("Attenzione: Parametro mancante.");
  }

  const attoriText = fs.readFileSync(".src/attori.json", "utf8");
  const attori = JSON.parse(attoriText);

  const IdAtt = attori.find((attore) => {
    return attore.id == idAttore;
  });

  if (typeof IdAtt === "undefined") {
    res.status(400).send("Attenzione: attore non trovato.");
  } else {
    res.json(IdAtt);
  }
});

//aggiunta del singolo attore
app.post("/attore", function (req, res) {
  console.log(req.body.nome);
  if (req.body.nome == undefined) {
    res.status(400).send("Attenzione: parametro nome mancante o non valido.");
  }
  if (req.body.cognome == undefined) {
    res
      .status(400)
      .send("Attenzione: parametro cognome mancante o non valido.");
  }

  const attoreCreato = creazioneAttore(req.body);

  const attoriText = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attoriText);

  /* const i = Number(nuovoAttore.id)-1; */
  attori[attori.length] = attoreCreato;

  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).json({ msg: "Attore creato" });
});

//aggiornamento attore
app.put("/attore", function (req, res) {
  console.log(8);
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);

  const index = attori.findIndex((attore) => {
    return attore.id === nuovo_attore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);

    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore aggiornato");
  } else {
    res.status(200).send("Attore non trovato");
  }
});

//delete attori
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

/*----- REGISTI -----*/
//funzione creazione regista
const creazioneRegista = (body) => {
  const nuovoRegista = {
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
  return nuovoRegista;
};

//restituisce tutta la lista di registi
app.get("/registi", function (req, res) {
  const registiText = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiText);

  const registiArr = registi.map((att) => {
    const { id, nome, cognome } = att;
    return { id, nome, cognome };
  });

  res.json(registiArr);
});

//restituisce singolo regista filtrato per id
app.get("/regista", function (req, res) {
  const idRegista = parseInt(req.query.id);
  if (isNaN(idRegista)) {
    res.status(400).send("Attenzione: Parametro mancante.");
  }

  const registiText = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiText);

  const IdReg = registi.find((regista) => {
    return regista.id == idRegista;
  });

  if (typeof IdReg === "undefined") {
    res.status(400).send("Attenzione: regista non trovato.");
  } else {
    res.json(IdReg);
  }
});

//aggiunta del singolo regista
app.post("/regista", function (req, res) {
  console.log(req.body.nome);
  if (req.body.nome == undefined) {
    res.status(400).send("Attenzione: parametro nome mancante o non valido.");
  }
  if (req.body.cognome == undefined) {
    res
      .status(400)
      .send("Attenzione: parametro cognome mancante o non valido.");
  }

  const registaCreato = creazioneRegista(req.body);

  const registiText = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiText);

  /* const i = Number(nuovoAttore.id)-1; */
  registi[registi.length] = registaCreato;

  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json({ msg: "Regista creato" });
});

//aggiornamento regista
app.put("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_regista = {
    id: req.body.id == undefined ? uuid() : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);

  const index = registi.findIndex((regista) => {
    return regista.id === nuovo_regista.id;
  });

  if (index > 0) {
    registi.splice(index, 1, nuovo_regista);

    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).send("Regista aggiornato");
  } else {
    res.status(200).send("Regista non trovato");
  }
});

//delete regista
app.delete("/regista", function (req, res) {
  console.log(req.body.id);
  if (req.body.id == undefined) {
    res.status(400).send("Parametro id mancante");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico");
  }

  const deleteId = req.body.id;

  const registiJson = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registiJson);

  const arrayDeleted = registi.filter((regista) => {
    return regista.id != deleteId;
  });

  fs.writeFileSync("./src/registi.json", JSON.stringify(arrayDeleted));
  res.status(200).send(arrayDeleted);
});