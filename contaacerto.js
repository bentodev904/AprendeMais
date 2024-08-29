try{
    var acertos = 0;
    var erros = 0;
    function receba(){
        var radios = document.querySelector("input[name='resposta']:checked").value
        if (radios == "true"){
            acertos++
        } else if (radios == "false"){
            erros++
        }
    }
    function mostra(){
        console.log(acertos);
    }   
} catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
  }
