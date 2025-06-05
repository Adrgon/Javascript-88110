const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.log(meses.length)

 for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
 }

meses[8] = "Septiembre" 

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
 meses[7] = "Agosto";

 for (let i = 0; i < meses.length; i++) {
   console.log(meses[i]);
 }

 console.table(meses)

 console.log(meses.length)

 meses[meses.length] = "Octubre";
 console.table(meses);
 meses[meses.length] = "Noviembre";
 console.table(meses);
