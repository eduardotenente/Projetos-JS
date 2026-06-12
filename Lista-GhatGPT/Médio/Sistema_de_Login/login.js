/*
    Crie um algoritmo que:

    solicite usuário e senha
    permita no máximo 3 tentativas

    Ao acertar:

    exiba mensagem de acesso permitido

    Ao errar 3 vezes:

    bloqueie o acesso
*/

function Entrar() {
    let usuario = document.getElementById('txt1')
    let senha = document.getElementById('senha')
    if(usuario.value.length == 0 || senha.value.length == 0) {
        alert('Informe usuario e senha!')
    } else {
        let resultado = document.getElementById('res')
        let erro = 0
        let tentativas = 3
        let acerto = 0
        const senhaCorreta = 2301
        const usuarioCorreto = 'geraldo123@gmail.com'
        while(erro < 3 || acerto < 1) {
            if(senha.length == senhaCorreta.length && usuario.length == usuarioCorreto.length) {
                resultado.innerHTML = 'ACESSO LIBERADO!'
                acerto++
            } else {
                tentativas--
                erro++
                alert(`Senha Incorreta! Possui mais ${tentativas} tentativas.`)
            }
            appendChild(resultado)
        }
    }
}
