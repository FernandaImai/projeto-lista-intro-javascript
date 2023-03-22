// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const altura = Number(prompt('Digite a altura do retângulo:'))
  const largura = Number( prompt('Digite a largura do retangulo:'))
  const area = altura * largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual:'))
  const anoNascimento = Number(prompt('Informe o ano de seu nascimento:'))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calculoImc = peso / (altura*altura).toFixed(2)
  return calculoImc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt('Digite o seu nome:')
  const idade = prompt('Digite sua idade:')
  const email = prompt('Digite seu email:')
  
  const mensagem =`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Digite sua cor favorita:')
  const corFavorita2 = prompt('Digite sua segunda cor favorita:')
  const corFavorita3 = prompt('Digite sua terceira cor favorita:')
  console.log([corFavorita1, corFavorita2, corFavorita3])


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantosIngressos = custo/valorIngresso
  return quantosIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const arrayCopia = array.slice()
  const tamanhoArray = array.length
  arrayCopia.pop()
  arrayCopia.shift()
  arrayCopia.push(array[0]) 
  arrayCopia.unshift(array[tamanhoArray-1])
  return arrayCopia

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualdade = string1.toUpperCase() === string2.toUpperCase()
  return igualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual:'))
  const anoNascimento = Number(prompt('Digite seu ano de nascimento:'))
  const anoEmissao = Number(prompt('Digite o ano de emissão da sua carteira de identidade:'))
  const idade = anoAtual - anoNascimento
  const idadeCarteira = anoAtual - anoEmissao

 const cond1 = (idade <= 20) && (idadeCarteira >= 5) 
 const cond2 = (idade >20 && idade<=50) && (idadeCarteira >= 10) 
 const cond3 = (idade > 50) && (idadeCarteira >= 15) 

 console.log(cond1|| cond2|| cond3)
 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const anoBissexto = ano%400 ===0 || (ano%4 === 0) &&(ano%100 !=0)
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt('Você tem mais de 18 anos?')
  const ensinoMedioCompleto = prompt('Você possui ensino médio completo?')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const condicaoIdade = maiorIdade  === 'sim'
  const condicaoEnsino = ensinoMedioCompleto === 'sim'
  const condicaoTempo = disponibilidade ===  'sim'

  console.log(condicaoIdade && condicaoEnsino && condicaoTempo)
}