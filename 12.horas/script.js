var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var msg = window.document.getElementById('saudacao') 
if( horas > 6 && horas < 12){
    msg.innerText = ` Bom dia, agora são exatamente ${horas}h min.`
}else if(horas < 18){
    msg.innerText = ` Boa Tarde, agora são exatamente ${horas}h  ${minutos}min.`
}else if(horas <0 && horas <= 5){
    msg.innerText = ` Boa Noite, agora são exatamente ${horas}h  min.`
}else{
    msg.innerText = ` Boa Madrugada, agora são exatamente ${horas}h${minutos}min.`
}

