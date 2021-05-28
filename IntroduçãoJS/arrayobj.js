// retorno de array
function array(){
    return [1,2,3,4,5,7];
}

document.getElementById("Array").innerHTML = array()[1];


function calc(){
    var multplica = array()[2] *  array()[5];
    return multplica;

}

console.log(calc());

// retorno de Objeto

function obj (){
    return{
        marca: "Jeep",
        modelo:"compass"
    };
}

console.log(obj().marca);

// parâmetros de funções

var aarray = [1,2,3,4,5,6,7];
 
function def (arg) {
    return arg;
}

console.log(def(aarray));
console.log(def(aarray)[4]);

// parâmetros de Objeto

var obj = {
    marca: "Jeep",
    modelo:"compass"
};


function paramobj (arg) {
    return arg;

}

console.log(paramobj(obj));