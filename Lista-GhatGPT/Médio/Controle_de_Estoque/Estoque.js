/*
    --- Controle de Estoque ---

        Sistema que:
        Recebe nome do produto.
        Mostra: quantidade em estoque e quantidade vendida.
        Calcula o estoque restante e informa.
        Informa a condição do estoque: zerado, baixo, normal ou alto.
*/

console.log('-------------------------')
console.log(' Empresa JA Suplementos')
console.log('  *Estoque da Empresa*')
console.log('-------------------------')

const produtos = ['Creatina', 'Whey Protein', 'Pré-treino', 'Barra Fitness']
const estoqueTotal = Math.floor(Math.random() * 500 + 500)
const vendidos = Math.floor(Math.random() * 900 + 1)
let estoqueRestante = estoqueTotal - vendidos
let condiçãoEstoque = ``
if(estoqueRestante < 0) {
    estoqueRestante = 0
}

function sortearProduto(listaDeProdutos) {
    const indiceAleatorio = Math.floor(Math.random() * listaDeProdutos.length)
    return listaDeProdutos[indiceAleatorio]
}
console.log(`Produto requisitado: ${sortearProduto(produtos)}`)
console.log(`- Quantidade em estoque: ${estoqueTotal}`)
console.log(`- Quantidade vendida: ${vendidos}`)
console.log(`- Estoque restante: ${estoqueRestante}`)
if(estoqueRestante == 0) {
    condiçãoEstoque = `Zerado`
} else if(estoqueRestante > 0 && estoqueRestante < 300) {
    condiçãoEstoque = `Baixo`
} else if(estoqueRestante > 300 && estoqueRestante < 600) { 
    condiçãoEstoque = `Normal`
} else if(estoqueRestante > 600) {
    condiçãoEstoque = `Alto`
}
console.log(`- Condição do Estoque = ${condiçãoEstoque}`)