const listaProdutos = () => {
   return fetch(`http://localhost:3000/produtos`)
   .then(resposta => {
    return resposta.json()
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
        return resposta.body;
      });
};

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
   .then(resposta => {
    return resposta.json()
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
        return resposta.json()
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