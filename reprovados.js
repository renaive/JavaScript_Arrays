const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

// Associar nome ao filter.
// filter pede uma função. primeiro índice
// _: o parametro existe, mas não está declarado
const reprovados = nomes.filter((_, indice) => notas[indice] <= 5);

console.log(`reprovados: ${reprovados}`);
