
function verificar(){

    let  i  = document.getElementById('txtini')
    let  f  = document.getElementById('txtfim')
    let  p  = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (i.value.length== 0 || f.value.length == 0){
        res.innerHTML = `[ERRO] Preencha o campo para obter a contagem!`
    }else{
        res.innerHTML = 'Contando: <br> '

        let inicio  = Number(i.value)
        let fim     = Number(f.value)
        let passo   = Number(p.value)      

        if(passo == 0){
            window.alert(`[passo] vazio, considerando pelo sistema o valor 1!`)
            passo = 1
        }       
        let j = 0

        if(inicio<fim){
            for( j = inicio ; j<=fim ; j+=passo){
                res.innerHTML += ` ${j} \u{1F449}`
            }        
        }else{            
            for(j = inicio; j>=fim ; j-=passo){
                res.innerHTML += ` ${j} \u{1F449}`
            }
        }         
        res.innerHTML +=`\u{1F3C1}`      
    }      
} 