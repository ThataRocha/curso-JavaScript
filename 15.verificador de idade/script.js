function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var sexo = document.getElementsByName('radsex')  
    var res = window.document.querySelector('div#res')
      

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE! ${idade}`)
    }else{ 
        
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var idade = ano - Number(fano.value)
        var genero = ''        
    
        if(sexo[0].checked){
            genero = 'Homem'
            if(Number(fano.value) >= (ano-10)){            
                img.setAttribute('src','menino.png')    
            }else if(((Number(fano.value)) >=  (ano-21))){  
                img.setAttribute('src','hadolecente.png') 
            }else if(Number(fano.value) >=  (ano-35)){  
                img.setAttribute('src','adulto.png') 
            }else if(Number(fano.value) >= (ano-50)){
                img.setAttribute('src','homem.png') 
            }else {
                img.setAttribute('src','senhor.png') 
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(Number(fano.value) >= (ano-10)){            
                img.setAttribute('src','menina.png')    
            }else if(((Number(fano.value)) >=  (ano-21))){  
                img.setAttribute('src','madolecente.png') 
            }else if(Number(fano.value) >=  (ano-35)){  
                img.setAttribute('src','adulta.png') 
            }else if(Number(fano.value) >= (ano-50)){
                img.setAttribute('src','mulher.png') 
            }else {
                img.setAttribute('src','senhora.png') 
            }            
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
}

