//Objeto e Atributo em JS
pessoa = {
   idade: 27,
   nome: "Loren",
   sexo: "Feminino",
   Natural: "Goiânia",
   casado: false
   


}


function apresentar(){

    console.log('O nome da pessoa é: ' +pessoa.nome);
      
}
apresentar();

document.getElementById("teste").innerHTML ='O nome da pessoa é: ' +pessoa.nome;