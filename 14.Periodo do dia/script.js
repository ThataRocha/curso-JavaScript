function carregar(){
    var tWrapper = window.document.getElementById('title-wrapper')    
    var imgwrapper = window.document.querySelector('img#img-wrapper')

    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    
    if(horas < 6){
        tWrapper.innerHTML = `<p><strong>Boa Madrugada</strong>, Agora são ${horas}h ${min}minutos.</p>`  
        document.body.style.background = '#2a2936'
        imgwrapper.src = 'madruga.png'        
    }else if(horas < 12){
        tWrapper.innerHTML = `<p><strong>Bom Dia</strong>, Agora são ${horas}h ${min}minutos. </p>`
        document.body.style.background = '#118fc5'
        imgwrapper.src = 'dia.png'

    }else if(horas < 18 ){
        tWrapper.innerHTML = `<p><strong>Boa tarde</strong>, Agora são ${horas}h ${min}minutos.</p>`
        document.body.style.background = '#3a4927'
        imgwrapper.src = 'tarde.png'   
    }else if(horas >= 18 && horas <= 23){
        tWrapper.innerHTML = `<p><strong>Boa Noite</strong>, Agora são ${horas}h ${min} minutos.</p>`
        document.body.style.background = '#412c2e'
        imgwrapper.src = 'noite.png'   
    }else{
        tWrapper.innerHTML = `[ERRO] Horas invalidas, ${horas}horas`  
    }
}