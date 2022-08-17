
let resultado = document.getElementById("resultado");
const clear = document.getElementById("clear");
console.log (resultado);

const agregar = (x) => {
    resultado.innerHTML += x;
     console.log(x)
}

const resolve = () => {
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
    }
}

clear.addEventListener('click', () => {
    resultado.innerHTML = ""
})
   