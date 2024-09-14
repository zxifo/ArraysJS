const notas = []
notas[0] = 4
notas[1] = 3
notas[2] = 7
notas[3] = 8
notas[4] = 6

console.log(notas)
console.log("primeira e ultima:", + notas[0],"e",+ notas[4])
console.log(notas.push(5))
console.log(notas.shift())
console.log(notas)

let result = ''
for (const index in notas) {
    result += notas[index] + ' ';
}
console.log(result);

const media = notas.reduce((soma, nota) => soma + nota,0) / notas.length;
console.log("Media: ", media)

const acima = notas.filter(nota => nota > 7);
console.log("Notas acima de 7: ", acima)

notas.sort((a, b) => a - b );
console.log("Ordem crescente", notas)

const notaX = notas.includes(9);
console.log(notaX)

const indiceN = notas.indexOf(6);
console.log("Indice da nota 6: ", indiceN)