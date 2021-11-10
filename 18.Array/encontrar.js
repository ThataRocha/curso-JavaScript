let num = [5, 3, 8, 9, 3, 7]

num.sort()

console.log(num)

let pos = num.indexOf(9)

if(pos == -1){
console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

// se não for encontrado o indexOf retorna -1
