//Modelo aprovado
var nota1 = 7
console.log("Nota 1:", nota1);
var nota2 = 5
console.log("Nota 2:", nota2);
var nota3 = 9
console.log("Nota 3:", nota3);
var média = (nota1 + nota2 + nota3) / 3;
console.log("Média:", média);

if (média >= 7) {
    console.log("Aprovado")
}
if (média < 7) {
    console.log("Reprovado")
}

//Modelo reprovado
var nota1 = 7
console.log("Nota 1:", nota1);
var nota2 = 6
console.log("Nota 2:", nota2);
var nota3 = 6
console.log("Nota 3:", nota3);
var média = (nota1 + nota2 + nota3) / 3;
console.log("Média:", média);

if (média < 7) {
    console.log("Reprovado")
}
if (média >= 7) {
    console.log("Aprovado")
}
