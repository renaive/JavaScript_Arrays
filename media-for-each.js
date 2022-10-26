const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach((nota) => {
  somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(media);

//for.each = para cada nota, vamos executar algo (definido dentro do bloco);
//for.each = callback (o parametro não é um dado), é uma função que chama outra função;
//é usado arrowfunction como função, mas também poderia usar notas.forEach(function(nota){somaDasNotas += nota})
//diferença: foreach faz o loop sem precisar passar o [i]
