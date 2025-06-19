console.log("-----For tracicional -------");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

console.log("-----For of -------");
for (let mes of meses) {
  console.log(mes);
}

console.log("---- foreach con una funcion declarada --------");

function recorrer(m) {
  console.log(m);
}

meses.forEach(recorrer);

console.log("----foreach con un funcion anonima--------");

meses.forEach(function (m) {
  console.log(m);
});

console.log("----foreach con una funcion flecha anonima --------");
meses.forEach((m) => {
  console.log(m);
});

console.log("----foreach con una funcion flecha anonima --------");
meses.forEach((m) => {
   if(m === "Enero"){
    console.log("El mes es Enero existe");
   }
});
const res = meses.includes("Enero")
console.log(res)
