function conv(real,dolar,metical,real2,kwanza,dogecoin){
    if (real == true){
        x1 = 1
        mi = "Real"
    }
    if (dolar == true){
        x1 = 5.42
        mi = "Dólar"
    }
    if (metical == true){
        x1 = 0.085
        mi = "Metical Moçambicano"
    }
    if (real2 == true){
        x2 = 1
        mf = "Real"
    }
    if (kwanza == true){
        x2 = 171.68
        mf = "Kwanza"
    }
    if (dogecoin == true){
        x2 = 1.76
        mf = "Dogecoin"
    }
    var conver = x1 * x2
    vf = conver * valor
    document.getElementById("conversao").innerHTML = "O valor "+valor+" convertido de "+mi+" para "+mf+" é de "+vf
}