import { produtosService } from "../servico/produtoService.js";
const novaDivProduto = (imagemUrl, nome, preco, id) => {
    const criaNovaDiv = document.createElement('div');
    criaNovaDiv.classList.add('produtoItem');
    const conteudo = `
        <img class="imgProdutoVenda" src="${imagemUrl}" alt="boneco" data-imagemProduto>
        <img class="botao__excluir" id="excluir" src="../assets/icone-apagar.png" alt="botao de excluir produto">
        <a href="http://localhost:5001/admin/telas/editarItem.html?id=${id}">
            <img class="botao__editar" id="editar" src="../assets/icone-editar.png" alt="botão para editar o produto">
        </a>
        <h3>
            ${nome} 
        </h3>
        <div class="preco__item">   
            <del style="font-size: 10px; margin: 0; color: #CD495F;">
                R$ 599,90
            </del>
            <p class="preco__novo">
                R$ ${preco}
            </p>
        </div>
        <a src="#">
            ver mais
        </a>
        `;
    criaNovaDiv.innerHTML = conteudo;
    criaNovaDiv.dataset.id = id
    console.log(criaNovaDiv)
    return criaNovaDiv;
};

const tabela = document.querySelector('[data-tabelaDivProduto]');
tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao__excluir'
    if(ehBotaoDeletar) {
        try {
            const criaNovaDiv = evento.target.closest('[data-id]')
            let id = criaNovaDiv.dataset.id
            await produtosService.removeProduto(id)
            criaNovaDiv.remove()
        }
        catch(erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
        
    }
})



const render = async () => {
    try {
        const produtoService = await produtosService.listaProdutos();
        produtoService.forEach(elemento => {
        tabela.appendChild(novaDivProduto(elemento.imagemUrl, elemento.nome, elemento.preco, elemento.id));
    });
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
}

render();
