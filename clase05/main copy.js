//alert()
// funciones constructoras

/* const heroe = {
    nombre: "Bruno Diaz",
    alterego: "Batman",
    poderes: ["inteligencia", "Mucha Plata"]
}

const heroe1 = {
  nombre: "Clark Kent",
  alterego: "Superman",
  poderes: ["fuerza", "Vestirse raro"],
}; */

function Heroe(n, a, p){
    this.nombre = n;
    this.alterego = a;
    this.poderes = p;
    this.ataque1 = function() {
        return this.alterego + "ataca con " + this.poderes[0];
    };
    this.ataque2 = function () {
      return this.alterego + "ataca con " + this.poderes[1];
    };
    this.revelarHeroe = function(){
        return this.alterego + " es en realidad " + this.nombre;
    }
}
const batman = new Heroe("Bruno Diaz", "Batman", ["inteligencia", "Mucha Plata"]);
console.log(batman);

const superman = new Heroe("Clark Kent", "Superman", ["fuerza", "Vestirse raro"]);
console.log(superman);

const mujerMaravilla = new Heroe("Diana Prince", "Mujer Maravilla", ["laso magico", "esta buenisima"])
console.log(mujerMaravilla);

console.log(batman.ataque2());
console.log(mujerMaravilla.ataque1());

console.log(batman.revelarHeroe())

let resultado = batman.revelarHeroe();
console.log(resultado)
