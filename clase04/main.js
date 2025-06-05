// array: Mucho de algo
// objetos literales: Caracteristicas de algo

let colores = ['rojo', 'verde', 'azul', 'amarillo'];
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
}

let autos = [
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2020,
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
        año: 2021,
    },
    {
        marca: 'Ford',
        modelo: 'Focus',
        año: 2019,
    }    
]

console.log(autos[0].marca);
console.log(autos[1].marca);
console.log(autos[2].marca);

autos.push({
    marca: 'Chevrolet',
    modelo: 'Cruze',
    año: 2022,
})
console.log(autos)
autos[3].color = "rojo";


console.log(autos);
