import { produtosService } from "../servico/produtoService.js"
(async () => {
    const pegaUrl = new URL(window.location)
    console.log(pegaUrl)

    const id = pegaUrl.searchParams.get('id')
    console.log(id)

    const inputImagem = document.querySelector('#data-imagemUrl')
    const inputNome = document.querySelector('#data-nome')
    const inputPreco = document.querySelector('#data-preco')

    try {
        const dados = produtosService.detalhaProduto(id)
        .then( dados => {
        inputImagem.value = dados.imagemUrl
        inputNome.value = dados.nome
        inputPreco.value = dados.preco
    })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
    const formulario = document.querySelector('[data-form]')
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try {
            await produtosService.atualizaProduto(id, inputImagem.value, inputNome.value, inputPreco.value)
            window.location.href = '../telas/edicao-concluida.html'  
       
        }
        catch(erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    })   
})()