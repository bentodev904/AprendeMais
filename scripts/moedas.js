function conv(valor) {
    x1 = 0
    x2 = 0
    mi = 0
    mf = 0
    if (document.getElementById('real').checked == true) {
        x1 = 1
        mi = "Real"
    }
    if (document.getElementById('dolar').checked == true) {
        x1 = 5.42
        mi = "Dólar"
    }
    if (document.getElementById('metical').checked == true) {
        x1 = 0.085
        mi = "Metical Moçambicano"
    }
    if (document.getElementById('real2').checked == true) {
        x2 = 1
        mf = "Real"
    }
    if (document.getElementById('kwanza').checked == true) {
        x2 = 171.68
        mf = "Kwanza"
    }
    if (document.getElementById('dogecoin').checked == true) {
        x2 = 1.76
        mf = "Dogecoin"
    }
    con = x1 * x2
    vf = con * valor
    document.getElementById('conversao').innerHTML = "O valor " + valor + " convertido de " + mi + " para " + mf + " é de " + vf
}