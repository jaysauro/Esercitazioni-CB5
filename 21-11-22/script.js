
const values = process.argv.slice(2);
const onlyNumb = values.slice(1)
console.log(onlyNumb);

function sum(...numbs) {
    let somma = 0;
    let i = 0;
    for (i=0; i < numbs.length; i++)
    somma += parseInt(numbs[i]);
    return somma;
}

function multi(...numbs) {
    let moltipl = 1;
    let i = 0;
    for (i=0; i < numbs.length; i++)
    moltipl *= numbs[i];
    return moltipl;
}

function validator (...numeri) {
    for (let valori of numeri)
    if (isNaN(valori)) {
        console.log("Almeno un valore non è un numero")
        return false;
    }
    return true;
}

switch (values[0]) {
    case "sum":
        if (validator(values[1], values[2]))
        console.log(parseInt(values[1]) + parseInt(values[2]));
        break;

    case "sub":
        if (validator(values[1], values[2]))
        console.log(parseInt(values[1]) - parseInt(values[2]));
        break;

    case "mult":
        if (validator(values[1], values[2]))
        console.log(parseInt(values[1]) * parseInt(values[2]));
        break;

    case "div":
        if (validator(values[1], values[2]))
        if (values[2] != 0)
        console.log(parseInt(values[1]) / parseInt(values[2]));
        else console.log("non si può dividere per 0");
        break;

    case 'infiniteSum':
        if (validator(...onlyNumb))
        console.log(sum(...onlyNumb));
        break;
        
    case 'infiniteMulti':
        if (validator(...onlyNumb))
        console.log(multi(...onlyNumb));
        break;
}