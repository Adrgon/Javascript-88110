const meses = ["Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.log(meses)


meses.push("Julio");

console.table(meses)

meses.unshift("Enero");
console.table(meses)

meses.pop();
console.table(meses)

meses.shift()
console.table(meses);

let mesesModificados = meses.slice(1,3)
console.table(meses)
console.table(mesesModificados)
