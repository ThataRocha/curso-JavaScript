function calcular(){
    var txtveloc = window.document.querySelector('input#txtvel') // pegando a velocidade em string
    var res = window.document.querySelector('div#res')

    var velocidade = Number(txtveloc.value) // convertendo ele em numero.
    res.innerHTML = `<p></p>Sua velocidade atual é de <strong>${velocidade} km/h</strong></p>`

    if(velocidade > 60){
        res.innerHTML += `Sua velocidade está acima do permitido. Você foi <strong> multado</strong> por excesso de velocidade!`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>` 
}