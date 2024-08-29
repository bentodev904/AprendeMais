try{
    var acertos = 0;
    var cont = 0
    function mostra(){
        if(cont>0){
            return false;
        }
        var radios = document.getElementsByName('resposta');
        var radios_value;
        for(var i = 0; i < radios.length; i++){
            if(radios[i].checked){
                radios_value = radios[i].value;
                if(radios_value == "true"){
                    acertos++
                }
            }
        }
        var x = document.getElementById("resultados")
        var y = document.getElementById("nombr").value
        x.innerHTML += "Parabéns "+y+"! Você acertou "+acertos+" questões"
        cont++
    }
} catch(error) {
    console.log("O nome do erro é: ${erro.name}\n");
    console.log("A mensagem do erro é: ${erro.message}\n");
    console.log("A stack do erro é: ${erro.stack}\n");
  }
