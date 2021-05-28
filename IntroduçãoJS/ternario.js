var carro = {
    portas: 4,
    marca: "Caoa Chery"
};

var modelo;

function teste() {
    if (carro.portas === 4){
        modelo = "Modelo 4 portas";
        console.log(modelo);
    } else{
        modelo = "Modelo 2 portas";
        console.log(modelo);
    }
}

teste();


//teste Ternário

var ternario = carro.portas === 2 ? (modelo = "Modelo 2 portas") : (modelo = "Modelo 4 portas");

console.log(ternario);

