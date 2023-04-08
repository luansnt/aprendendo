var dadosProcessados =[];

fetch('./homuncularioteste.csv')
.then(response => response.text())
.then(data => {
    const linhas = data.split("\n");
    for (const linha of linhas){
        const valores = linha.split(",");
        dadosProcessados.push(valores);
    }
})

let diff = 0
var HabilidadesEscolhidas = []
var HabilidadesRepetidas = []
var EstatosCriatura = []
var QuantCaract = 0

function escolherDificuldade(DificuldadeEscrita, pda){
    DificuldadeEscrita = DificuldadeEscrita.toLowerCase()
    if (DificuldadeEscrita== "facil"){
        QuantCaract = 3
        diff = 7
        EstatosCriatura = [20 + (pda*6) ,2 + pda,1 ,2]
    }else if(DificuldadeEscrita == "normal"){
        QuantCaract = 4
        diff = 14
        EstatosCriatura = [40 + (pda*10),4 + pda,2 ,3]
    }else if(DificuldadeEscrita == "dificil"){
        QuantCaract = 5
        diff = 21
        EstatosCriatura = [80 + (pda*12),8 + pda,3 ,4]
    }else if(DificuldadeEscrita == "extrema"){
        QuantCaract = 6
        diff = 28
        EstatosCriatura = [120 + (pda*20),12 + pda,4 ,5]
    }
    return [diff, QuantCaract]
}


function Habis (diff){
    var aleatorio = Math.floor(Math.random()*diff) +1
    var linhaEscolhida = dadosProcessados[aleatorio]
    var Escolhido = linhaEscolhida[Math.floor(Math.random() * linhaEscolhida.length )]

    for(var i = 0; i < HabilidadesEscolhidas.length; i++){ 
        while ((HabilidadesEscolhidas[i] == Escolhido) || (HabilidadesEscolhidas[i] == "")) {
        aleatorio = Math.floor(Math.random()*diff) +1
        linhaEscolhida = dadosProcessados[aleatorio]
        Escolhido = linhaEscolhida[Math.floor(Math.random() * linhaEscolhida.length )]
    }
}

    HabilidadesEscolhidas.push(Escolhido)
}
 
function iniciar(){
    HabilidadesEscolhidas = []
    EstatosCriatura = [0, 0, 0, 0] //PV , PE, PODER, PARAMETRO
    diff = 0
    QuantCaract = 0
    
    var escritaDif = document.getElementById("dificuldade").value
    var pda = parseInt(document.getElementById("pda").value)
   
    var total = Math.floor(pda/6)
    let criatura = escolherDificuldade(escritaDif, pda)

    while (HabilidadesEscolhidas.length < criatura[1]){
        Habis(criatura[0])
    }
    EstatosCriatura[2] += total
    EstatosCriatura[3] += total

    const criaturaFeita = [HabilidadesEscolhidas, EstatosCriatura ]
    localStorage.setItem('criaturaFeita', JSON.stringify(criaturaFeita))

}