alert("Ciao! Benvenuto sulla tua nuova calcolatrice.");
let userName = prompt("Come ti chiami?");
alert("Bene " + userName + ", iniziamo!");
let userValue1 = prompt("Scegli un valore a tuo piacimento");
let userValue2 = prompt("Perfetto, adesso scegline un altro");
let userOperation = prompt("Ci siamo quasi.. Adesso scegli l'operazione (+;-;*;/");
alert("Sta calcolando . . . 🖩");
let userValue1ToNumber = parseInt(userValue1);
let userValue2ToNumber = parseInt(userValue2);
switch (userOperation) {
    case "+":
    alert("Ecco il tuo risultato: " +(userValue1ToNumber + userValue2ToNumber));
    console.log(userValue1ToNumber + userValue2ToNumber);
    break;
    case "-":
    alert("Ecco il tuo risultato: " +(userValue1ToNumber - userValue2ToNumber));
    console.log(userValue1ToNumber - userValue2ToNumber);
    break;
    case "*":
    alert("Ecco il tuo risultato: " +(userValue1ToNumber * userValue2ToNumber));
    console.log(userValue1ToNumber * userValue2ToNumber);
    break;
    case "/":
    alert("Ecco il tuo risultato: " +(userValue1ToNumber / userValue2ToNumber));
    console.log(userValue1ToNumber / userValue2ToNumber);
    break;
    default:
        alert("Ops! Non hai inserito un'operazione valida, riprova.");
}
if (isNaN(userValue1ToNumber)) {
    alert("Errore: il valore 1 non è un numero!");
}
if(isNaN(userValue2ToNumber)) {
    alert("Errore: il valore 2 non è un numero!");
}

console.log();