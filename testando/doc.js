function aparecer(){
    const criaturaFeita = JSON.parse(localStorage.getItem('criaturaFeita'))
    
    var campo = document.getElementById('receber')
    var Status = document.getElementById('Status')
    var carater = document.getElementById('caracter')
    var lista = document.getElementById('lista')
    const botaoRevelar = document.getElementById('revelar')
  
      Status.innerHTML += `<p>Status da Criatura</p> <br> `
      
      Status.innerHTML += `<li class="status">Pontos de Vida: ${criaturaFeita[1][0]}</li>`
      Status.innerHTML += `<li class="status">Pontos de Energia: ${criaturaFeita[1][1]}</li>`
      Status.innerHTML += `<li class="status">Poder: ${criaturaFeita[1][2]}</li>`
      Status.innerHTML += `<li class="status">Parâmetros: ${criaturaFeita[1][3]}</li>`
      Status.innerHTML += `<li class="status">Ataque Básico: ${criaturaFeita[1][2]}d8</li>`
      
     Status.innerHTML += `<br>`
     carater.innerHTML +=  `Caracteristicas`

      for (let index = 0; index < criaturaFeita[0].length; index++) {
        lista.innerHTML += `<li> ${criaturaFeita[0][index]}</li>`
          
      }

      
    
  botaoRevelar.setAttribute('disabled','')

  for (let i=0; i < criaturaFeita[1].length; i++){
    console.log(criaturaFeita[1][i])
  }


}