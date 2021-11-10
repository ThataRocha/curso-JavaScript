function confirmar(){
    var pais = window.document.querySelector('input#txtnasc').value.toLowerCase()
    var res = window.document.querySelector('div#result')

    res.innerHTML = `O pais é ${pais}`

    if(pais != 'brasil'){
        res.innerHTML += `<p>Você não é Brasileiro!</p>`
    }else
    res.innerHTML += `<p>Você é Brasileiro!</p>`       
}