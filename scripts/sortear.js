try{
    function sorteio(vi,vf,qtonum) {
        x = document.getElementById("jackpot")
        var sorteado = []
        for(var cont = 0 ; cont < qtonum ; cont++){
            sorteado[cont] += Math.floor(Math.random() * (vf - vi + 1)) + vi
        }
        x.innerHTML = "Quantidade de Números Solicitados: "+qtonum+"<br>"+"Números Sorteados: "+sorteado
    }
}catch(erro){
    console.log(`O nome do erro é: ${erro.name}\n`);
    console.log(`A mensagem do erro é: ${erro.message}\n`);
    console.log(`A stack do erro é: ${erro.stack}\n`);
}