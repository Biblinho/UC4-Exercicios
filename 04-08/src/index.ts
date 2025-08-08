function AlunoRoberson(nomeAluno:string idadeAluno:number estaMatriculado:bolean) void {
    console.log(O AlunoRoberson ${nomeAluno} tem ${idadeAluno39} anos e está ${estaMatriculado ? 'matriculado' : 'não matriculado'}.);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array com os nomes dos alunos
let alunos:string[] = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

// Função que recebe o array e retorna uma única string com os nomes
function listaAlunos(alunos:string[]:string) {
    let string
  return Alunos: ${lista.join(' ')};
}

// Executando a função e exibindo o resultado
console.log(listarAlunos(alunos));
////////////////////////////////////////////////////////////////////////

function saudacao(nomeAluno) {
    console.log(Olá, ${nomeAluno}! Seja bem-vindo(a)!);
  }
  ///////////////////////////////////////////////////////////////////////////

  function calcularMedia(nota1:number, nota2:number, nota3:number): number {
    return (nota1 + nota2 + nota3) / 3;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  function contarAlunos(listaDeAlunos) {
    console.log(Quantidade de alunos: ${listaDeAlunos.length});
  }
  contarAlunos({"fulano", "ciclano","beltrano"})