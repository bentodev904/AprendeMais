function gaso(){
    alert('executou')
    dist = document.getElementById("km").value 
    inicio = document.getElementById("start").value
    alert('funcionou')
    fim = document.getElementById("end").value
    kmlitro = document.getElementById("gas").value
    preco = document.getElementById("gasol").value
    litrod = dist / kmlitro
    precof = litrod * preco
    document.getElementById('gastotal').innerHTML = "Você precisará de "+litrod+" litros de combustível e gastará R$ "+precof+" para se deslocar de "+inicio+" para "+fim
}