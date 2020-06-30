function info(){
    var temp = window.document.getElementById("info")
    var aux = new Date()
    var ano = aux.getFullYear()
    var hora = aux.getHours()
    var minuto = aux.getMinutes()
    temp.innerHTML += `${ano} ${hora}:${minuto}`
}