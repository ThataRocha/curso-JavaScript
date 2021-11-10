let num = [5, 8, 2, 9, 3]

num[5] = 7
num.push(9)
num.length

num.indexOf(7)

num.sort() // ordernar
console.log(num);  // mostrar o vetor
console.log(num[6]); // mostrar uma posição especifica
console.log(`O vetor tem ${num.length} posições`)
/*
for(let pos=0 ; pos<num.length; pos++){
    console.log(`A posição ${pos} contem o elemento ${num[pos]}`)
}
*/
for (let pos in num){
    console.log(`A posição ${pos} contem o elemento ${num[pos]}`)
}

//array e composto por varios elementos, e cada elemento contem seu valor  que possui uma chave de indentificação.