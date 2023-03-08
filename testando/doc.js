function aparecer(){
    const criaturaFeita = JSON.parse(localStorage.getItem('criaturaFeita'))
    var campo = document.getElementById('receber')
    campo.innerHTML = criaturaFeita
    
}