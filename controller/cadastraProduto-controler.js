import { produtosService } from "../servico/produtoService.js"
const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const imagem = evento.target.querySelector('[data-imagemUrl]').value
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value

    try {
        produtosService.criaProduto(imagem, nome, preco)
        .then(() => {
            window.location.href = '../telas/info-sucesso.html'
        })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
   
})