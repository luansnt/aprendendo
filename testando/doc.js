function aparecer(){
    const criaturaFeita = JSON.parse(localStorage.getItem('criaturaFeita'))
    
    var campo = document.getElementById('receber')
    let botaoRevelar = document.getElementById('revelar')
  
      campo.innerHTML +=  `<p>Status da Criatura</p> <br> <ul class="status">`
   
      campo.innerHTML += `<li class="status">Pontos de Vida: ${criaturaFeita[1][0]}</li>`
      campo.innerHTML += `<li class="status">Pontos de Energia: ${criaturaFeita[1][1]}</li>`
      campo.innerHTML += `<li class="status">Pontos de Poder: ${criaturaFeita[1][2]}</li>`
      campo.innerHTML += `<li class="status">Ataque Basico: ${criaturaFeita[1][2]}d8</li>`
      campo.innerHTML+= "</ul>"

      campo.innerHTML +=  "<br><p>Caracteristicas </p> <br> <ul>"

      for (let index = 0; index < criaturaFeita[0].length; index++) {
        campo.innerHTML += `<li> ${criaturaFeita[0][index]}</li>`
          
      }
      campo.innerHTML += "</ul>"
    
  botaoRevelar.setAttribute('disabled','')

  for (let i=0; i < criaturaFeita[1].length; i++){
    console.log(criaturaFeita[1][i])
  }


}