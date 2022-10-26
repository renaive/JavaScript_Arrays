const notas = [10, 9, 8, 7, 6];

// notas atualizadas
// nota == 10: se a nota for igual a 10
// ?: se for verdadeiro retorna a nota
// : se for falso, retorna nota mais 1
// ++nota: primeiro soma, depois retorna a nota

const notasAtualizadas = notas.map((nota) => (nota == 10 ? nota : ++nota));

console.log(notasAtualizadas);

//for each e map: o que o código retorna?
//for each não retorna dados, apenas executa o que está dentro do bloco.
//map retona uma nova array, no caso temos uma array de notas e recebemos notas atualizadas.
