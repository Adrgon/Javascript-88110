const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

console.log(meses)
console.table(meses)

console.log(meses[0])// Enero
console.log(meses[1])// Enero
console.log(meses[2])// Enero
console.log(meses[3])// Enero
console.log(meses[4])// Enero
console.log(meses[5])// Enero


meses[0] = "Marzo"
meses[1] = "Abril";
meses[2] = "Mayo";
meses[3] = "Junio";
meses[4] = "Julio";
meses[5] = "Agosto";

console.table(meses)
