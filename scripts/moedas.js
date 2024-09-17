try{
    function imc(name, peso, altura) {
        var IMC = peso / (altura * altura);
        var resultado;
        if (IMC < 18.5) {
            resultado = "Abaixo do peso";
        } else if (IMC >= 18.5 && IMC < 25) {
            resultado = "Normal";
        } else if (IMC >= 25 && IMC < 29.9) {
            resultado = "Sobrepeso";
        } else if (IMC >= 30) {
            resultado = "Obesidade";
        }
        var x = document.getElementById('imcfinal');
        x.innerHTML = name + ": " + resultado;
    }
}catch(erro){
    console.log(`O nome do erro é: ${erro.name}\n`);
    console.log(`A mensagem do erro é: ${erro.message}\n`);
    console.log(`A stack do erro é: ${erro.stack}\n`);
}