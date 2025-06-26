//alert()
const miCaja = document.getElementById('miCaja')
const cajaTexto = document.getElementById('cajaTexto')
const textoInput = document.getElementById('textoInput')
const btnCambiarTexto = document.querySelector("#btnCambiarTexto")
const btnColorFondo = document.querySelector("#btnColorFondo");


const btnAlternarBorde = document.querySelector("#btnAlternarBorde");
const btnResaltar = document.querySelector("#btnResaltar");
const btnNormal = document.querySelector('#btnNormal');

const miLista = document.getElementById("miLista");
const nuevoItemInput = document.getElementById("nuevoItemInput");
const btnAgregarItem = document.getElementById("btnAgregarItem");
const btnEliminarUltimo = document.getElementById("btnEliminarUltimo");


//const algo = document.querySelector('.algo')
/* const btns = document.querySelectorAll('button')
console.log(btns)

let contador = 0;

for(let btn of btns){
    btn.addEventListener('click', (evt)=>{
        console.log(evt.target)
        evt.target.style.backgroundColor = "red";
    })
} */


//console.log(miCaja, cajaTexto, textoInput, btnCambiarTexto, btnColorFondo)


/* const titulo = document.querySelector('h1')
console.log(titulo);
console.log(titulo.innerText)
console.log(titulo.textContent)
console.log(titulo.innerHTML);

titulo.innerText = "Clase DOM" */

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    //#09f57d
    let color = '#';
    for(let i=0; i < 6; i+=1){
        color += letras[Math.floor(Math.random() * 16)]
    }
    return color;
}


btnAlternarBorde.addEventListener('click', ()=>{
    miCaja.classList.toggle('borde-grueso')
})

btnResaltar.addEventListener('click', ()=>{
    miCaja.classList.add('resaltado');
})

btnNormal.addEventListener('click', ()=>{
    miCaja.classList.remove('resaltado');
})


btnColorFondo.addEventListener("click", ()=> {
    miCaja.style.backgroundColor = generarColorAleatorio()
    cajaTexto.style.color = generarColorAleatorio();
});

btnCambiarTexto.addEventListener("click", ()=>{
    const nuevoTexto = textoInput.value
    if(nuevoTexto.trim() !== ''){
        cajaTexto.textContent = nuevoTexto;
        textoInput.value = ''
        textoInput.focus();
    }else {
        alert('Debes ingresar un texto valido')
    }
})

miCaja.addEventListener('mouseover', ()=>{
    miCaja.style.borderColor = '#007bff'
})

miCaja.addEventListener("mouseout", () => {
  miCaja.style.borderColor = "#dc3545";
});


miCaja.addEventListener('click', ()=>{
    contador+=1;
    cajaTexto.textContent = `!Clicks: ${contador}! `
})


// Manejo de la lista

btnAgregarItem.addEventListener('click', (evt)=>{
    const textoNuevoItem = nuevoItemInput.value;
    if(textoNuevoItem.trim() !== ''){
      const nuevoItem = document.createElement("li");
      nuevoItem.textContent = textoNuevoItem;
      miLista.appendChild(nuevoItem);
      nuevoItemInput.value = '';
      nuevoItemInput.focus();
    }
    else {
        alert("Debes ingresar un texto valido para el nuevo item de la lista")
    }
})

btnEliminarUltimo.addEventListener("click", () => {
  if (miLista.lastElementChild) {
    // Verificar si hay elementos en la lista
    miLista.removeChild(miLista.lastElementChild);
  } else {
    alert("La lista ya está vacía.");
  }
});
