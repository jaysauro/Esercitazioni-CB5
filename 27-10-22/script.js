const dinosaur = {
    name: "Franco",
    bornIn: "Giurassico",
    isAlive: false,
}
console.log(dinosaur);
console.log(object.keys(dinosaur));
alert("ciao!");
let userNum1 = prompt("Scegli un valore a tuo piacimento");
let userNum2 = prompt("Perfetto, adesso scegline un altro");
let userNum3 = prompt("Ok, ora scegli l'ultimo");
let userOperation = prompt("Ci siamo quasi.. Adesso scegli l'operazione (+;-;*;/");
let userValue1ToNumber = parseInt(userNum1);
let userValue2ToNumber = parseInt(userNum2);
let userValue3ToNumber = parseInt(userNum3);
if (isNaN(userValue1ToNumber)) {
    alert("Errore: il valore 1 non è un numero!");
}
if(isNaN(userValue2ToNumber)) {
    alert("Errore: il valore 2 non è un numero!");
}
if (isNaN(userValue3ToNumber)) {
    alert("Errore: il valore 3 non è un numero!");
}





function calculator(userValue1ToNumber, userValue2ToNumber, userValue3ToNumber, userOperation) {
    switch (userOperation) {
        case "+":
        return(userValue1ToNumber + userValue2ToNumber + userValue3ToNumber) + alert("Ecco il tuo risultato: " +(userValue1ToNumber + userValue2ToNumber + userValue3ToNumber));
        
        case "-":
        return(userValue1ToNumber - userValue2ToNumber - userValue3ToNumber) + alert("Ecco il tuo risultato: " +(userValue1ToNumber - userValue2ToNumber - userValue3ToNumber));
        
        case "*":
        return(userValue1ToNumber * userValue2ToNumber * userValue3ToNumber) + alert("Ecco il tuo risultato: " +(userValue1ToNumber * userValue2ToNumber * userValue3ToNumber));
        
        case "/":
        return(userValue1ToNumber / userValue2ToNumber / userValue3ToNumber) + alert("Ecco il tuo risultato: " +(userValue1ToNumber / userValue2ToNumber / userValue3ToNumber));
        
        default:
        alert("Ops! Non hai inserito un'operazione valida, riprova.");
    }
  }

let result = calculator(userValue1ToNumber, userValue2ToNumber, userValue3ToNumber, userOperation);

