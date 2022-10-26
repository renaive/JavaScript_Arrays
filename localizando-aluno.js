const listaAlunos = ["Joao", "Juliana", "Caio", "Ana"];
const mediaAlunos = [10, 7, 9, 6];

// includes = booleano (verdadeiro ou falso)
// indexof = qual número do índice?

let listaNotasEAlunos = [listaAlunos, mediaAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaNotasEAlunos[0].indexOf(nomeDoAluno);
    return (
      listaNotasEAlunos[0][indice] +
      ", sua média é " +
      listaNotasEAlunos[1][indice]
    );
  } else {
    return "O aluno não está cadastrado.";
  }
};

console.log(exibeNomeNota("Ana"));
