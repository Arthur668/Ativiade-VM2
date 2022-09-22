let distancia = document.querySelector("#distancia")
let tempo = document.querySelector("#tempo")
let velocidade = document.querySelector("#velocidade")
let arrayVelocidade = []
const calcular = function () {
    console.log(distancia.value);
    console.log(tempo.value);
    velocidade.value = (distancia.value / tempo.value)
    console.log(velocidade.value);
    arrayVelocidade.push(["[", distancia.value, tempo.value, velocidade.value, "]",]);
    Resultado.value = arrayVelocidade
}