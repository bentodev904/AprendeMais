function troca(container) {
    if (container == 1) {
        document.getElementById("all").style = "display:none;"
        document.getElementById("imc").style = "display:block;"
        document.getElementById("volta").style = "display:block;"
    }
    if (container == 2) {
        document.getElementById("all").style = "display:none;"
        document.getElementById("conversor").style = "display:block;"
        document.getElementById("volta").style = "display:block;"
    }
    if (container == 3) {
        document.getElementById("all").style = "display:none;"
        document.getElementById("gastar").style = "display:block;"
        document.getElementById("volta").style = "display:block;"
    }
    if (container == 4) {
        document.getElementById("all").style = "display:none;"
        document.getElementById("sortear").style = "display:block;"
        document.getElementById("volta").style = "display:block;"
    }
    if (container == "back") {
        document.getElementById("all").style = "display:block;"
        document.getElementById("imc").style = "display:none;"
        document.getElementById("conversor").style = "display:none;"
        document.getElementById("gastar").style = "display:none;"
        document.getElementById("sortear").style = "display:none;"
        document.getElementById("volta").style = "display:none;"
    }
}

function limpa() {
    document.getElementById('calculadora').reset();
}