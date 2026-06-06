/*
    Crie um algoritmo que:

    solicite usuário e senha
    permita no máximo 3 tentativas

    Ao acertar:

    exiba mensagem de acesso permitido

    Ao errar 3 vezes:

    bloqueie o acesso
*/
const usuario = 'Acesso@gmail.com'
let senhas = [5420, 5432, 2345, 2301, 4593, 1000]
const senhaCorreta = 2301
let erro = 0

console.log('---------  Login  ---------')
console.log(`Usuário: ${usuario}`)
do {
    for(var pos in senhas) {
        console.log(`Senha: ${senhas[pos]}`)
        if(senhas[pos] == senhaCorreta) {
            console.log('ACESSO LIBERADO!')
        } else {
            console.log('Senha Incorreta. Tente novamente!')
            erro++
        }
    }
} while(senhas[pos] != senhaCorreta)