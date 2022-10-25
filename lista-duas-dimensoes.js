//                  0
const listaAlunos = ["Joao", "Juliana", "Caio", "Ana"];

//                  0
const mediaAlunos = [10, 7, 9, 6];

//                      [joao, juliana, caio e ana] [10, 7, 9, 6]

//                      indice 0    , indice 1
let listaNotasEAlunos = [listaAlunos, mediaAlunos];

console.log(
  `${listaNotasEAlunos[0][1]}, sua média é ${listaNotasEAlunos[1][1]}`
);
