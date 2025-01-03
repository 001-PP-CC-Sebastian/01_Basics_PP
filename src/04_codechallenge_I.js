
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
let zahl1 = parseFloat(prompt("Bitte geben Sie die erste Zahl ein:")); // Erste Zahl vom Benutzer einlesen
let zahl2 = parseFloat(prompt("Bitte geben Sie die zweite Zahl ein:")); // Zweite Zahl vom Benutzer einlesen
let summe = zahl1 + zahl2; // Summe berechnen
console.log("Die Summe der Zahlen ist: " + summe); // Ergebnis in der Konsole ausgeben