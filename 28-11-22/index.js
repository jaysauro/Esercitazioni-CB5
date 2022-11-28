const express = require("express");
const app = express();
const modOperations = require("./src/operation.js");

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server avviato")
});

app.get("/calculator", function(req, res) {
    let val1 = req.query.value1;
    let val2 = req.query.value2;
    let val3 = req.query.value3;
    let result;
    switch(val3) {
        case "sum":
            result = modOperations.sum(val1,val2);
            res.status(200).json({risultato: result});
        break;
        case "sub":
            result = modOperations.sub(val1,val2);
            res.status(200).json({risultato: result});
        break;
        case "div":
            result = modOperations.div(val1,val2);
            res.status(200).json({risultato: result});
        break;
        case "multi":
            result = modOperations.molti(val1,val2);
            res.status(200).json({risultato: result});
        break;
        default: console.log("operazione effettuata");
    }
})

