function main(x) {
    switch(x) {
        case 1:
            document.getElementById("swit").innerHTML = "O numero é igual a 1";
            break;
        case 2: 
            document.getElementById("swit").innerHTML = "O numero é igual a 2";
            break;
        default:
            document.getElementById("swit").innerHTML = "O numero não é igual a 1 ou 2";
            break;

    }

}

main(2);