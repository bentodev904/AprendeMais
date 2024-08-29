try{
    var acertos = 0;
    var erros = 0;
    var values = []
    function receba(){
        const radios = document.querySelector("input[name='resposta']:checked")
        if (radios.value === "true"){
            acertos++
        }
        console.log(acertos)
    }   
    function mostra(){
        alert(acertos, "skividio")
    }
} catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
  }
