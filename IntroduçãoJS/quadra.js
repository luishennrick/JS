function somar (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
         resultado = num1 + num2;
         document.getElementById("quadra").innerHTML ='O resultado da soma é: '+resultado;
    
        } else {

         document.getElementById("quadra").innerHTML ='Os valores fornecidos não são numéricos!';

    }

}
somar(200, 300);