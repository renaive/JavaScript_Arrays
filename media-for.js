// o que queremos? somar e tirar uma média.
const notas = [10, 6.5, 8, 7.5];

// declarar a variável fora do for
let somaDasNotas = 0;

// for = acessa somaDasNotas (que está fora do loop); notas[i] = array (notas) + indice (i);
// enquanto i for < 4, o loop vai ser executado.
for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(media);
