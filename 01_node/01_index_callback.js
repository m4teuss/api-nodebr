/*
    001. Obter um usuário
    002. Obter o número de telefone de um usuário a partir de seu ID
    003. Obter o endereço do usuário pelo ID
*/

function obterUsuario(callback) {
    // setTimeout: é uma função de Delay
    setTimeout(function () {

        return callback(null, {

            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date() // cria data

        })

    }, 100)
}

function obterTelefone(idUsuario, callback) {

    setTimeout(function () {

        return callback(null, {
            ddd: '11',
            numero: '993655412'
        })

    }, 2000);
}

function obterEndereco(idUsuario, callback) {

    setTimeout(function () {

        return callback(null, {

            rua: 'Francisco Glicério',
            numero: '0',
            bairro: 'Centro',
            cidade: 'Campinas',
            Estado: 'SP'
        })

    }, 200)
}

// callback: erro e sucesso
// function resolverUsuario(erro, usuario) {
//     console.log('usuario', usuario)
// }


obterUsuario(function resolverUsuario(error, usuario) {
    // Se o valor for null, vazio ou zero será igual a false
    if (error) {
        console.error('Deu Ruim em Usuário', error)
        return; // parar a execução
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Deu Ruim em Telefone', error)
            return; // parar a execução
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('Deu Ruim no Endereço', error)
                return; // parar a execução
            }
            console.log(`
            Nome: ${usuario.nome}, ${usuario.dataNascimento}
            Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}
            Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        })
    })
})
