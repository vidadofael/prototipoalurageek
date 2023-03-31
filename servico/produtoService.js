const listaProdutos = () => {
   return fetch(`http://localhost:3000/produtos`)
   .then(resposta => {
    if(resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível listar os produtos. Contacte o suporte.')
   })
};

const criaProduto = (imagemUrl, nome, preco) => {
    return fetch(`http://localhost:3000/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imagemUrl: imagemUrl,
        nome: nome,
        preco: preco,
      }),
    })
      .then(resposta => {
        if(resposta.ok) {
            return resposta.body;
        }
        throw new Error('Não foi possível cadastrar o produto. Contacte o suporte.')
      });
};

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível excluir o produto. Contacte o suporte.')
        }
            
    })
    return resposta.body
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
   .then(resposta => {
    if(resposta.ok){
        return resposta.json()
    }
    throw new Error('Não foi possível detalhar o produto. Contacte o suporte.')
   })
}

const atualizaProduto = (id, imagemUrl, nome, preco) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',  
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            imagemUrl: imagemUrl,
            nome: nome,
            preco: preco
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o produto. Contacte o suporte.')
        
    })
}   

export const produtosService = {
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
};

/*produtosService.listaProdutos*/
/*produtosService.criaProduto*/
/*produtosService.removeProduto*/
/*produtosService.detalhaProduto*/
/*produtosService.atualizaProduto*/