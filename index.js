
/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
  */
let heroi = "Curirim"

let patente

function saldoVitorias (vitorias,derrotas){
    let contaVitorias = vitorias - derrotas
    return contaVitorias
}

 if(saldoVitorias <=10 ){
    patente = "Ferro"
 }else if(saldoVitorias>10 && saldoVitorias <= 20) {
    patente = "Bronze"
 }else if(saldoVitorias>20 && saldoVitorias <= 50) {
    patente = "Prata"
 }else if(saldoVitorias>50 && saldoVitorias <= 80) {
    patente = "Ouro"
 }else if(saldoVitorias>80 && saldoVitorias <= 90) {
    patente = "Diamante"
 }else if(saldoVitorias>90 && saldoVitorias <= 100) {
    patente = "Lendario"
 }else{
    patente = "Imortal"
 }


    console.log ("O Herói tem de saldo de " +saldoVitorias(50,8)  + " está no nível de " + patente )

 

