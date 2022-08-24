function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
 
if(fano.value.length == 0 || fano.value > ano ) {
    window.alert('[Erro] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade =  ano - fano.value
    var genero = '' 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        
    if (idade >=0 && idade <5) {
        //bebe 
        img.setAttribute('src','homem-bebe.png.png')
    } else if (idade < 11){
        //criança
        img.setAttribute('src','homem-criança.png.png')
    } else if (idade < 18) {
        //adolescente
        img.setAttribute('src','homem-adolescente.png.png')
    } else if (idade < 29) {
        //jovem
        img.setAttribute('src','homem-jovem.png.png')
    } else if (idade < 45) {
        //adulto
    img.setAttribute('src','homem-adulto.png.png')
    } else {
        //idoso   
     img.setAttribute('src','homem-idoso.png.png')

    }
    

    } else if (fsex[1].checked) {
        genero = 'Mulher' 
    if (idade >=0 && idade <5) {
        //bebe
        img.setAttribute('src','mulher-bebe.png.png')
    } else if (idade < 11){
        //criança
        img.setAttribute('src','mulher-criança.png.png')
    } else if (idade < 18) {
        //adolescente
        img.setAttribute('src','mulher-adolescente.png.png')
    } else if(idade < 29) {
        //jovem
        img.setAttribute('src','mulher-jovem.png.png')
    } else if (idade < 45) {
        //adulto
        img.setAttribute('src','mulher-adulta.png.png')
    } else {
        //idoso
        img.setAttribute('src','mulher-idoso.png.png')
    }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    
    
}
}