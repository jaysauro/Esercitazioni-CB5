const jayInformation = ["Jennifer", "Di Sclafani", "23", "Diploma di qualifica"];
console.log(jayInformation);
jayInformation.splice(2, 1, "03-02-1999");
let upperText = "Jennifer Di Sclafani"
let upperResultName = upperText.toUpperCase();
jayInformation.splice(0, 1, upperResultName);
jayInformation.splice(1,1);

                  // AVANZATO
let str = "#######";
for (let i = 0; i <= 6 ; i++ ) {
   console.log(str.slice(i));
}