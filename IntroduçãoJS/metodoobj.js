//métodos de objeto
pessoa = {
    idade: 27,
    nome: "Loren",
    snome: "King",
    sexo: "Feminino",
    Natural: "Goiânia",
    casado: false,
    aniversario: function() {
       pessoa.idade++;

   },
   nomeesobrenome: function(){
       pessoa.nome = pessoa.nome +" "+ pessoa.snome;
   }
    
 
 
 }
 pessoa.nomeesobrenome();
 console.log(pessoa.nome);
 pessoa.aniversario();
 document.getElementById("niver").innerHTML ='A pessoa completou: ' +pessoa.idade+ ' anos.';