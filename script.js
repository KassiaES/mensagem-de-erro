// construção do botão 
const botao = document.querySelector('button')

// leitura do clique do botão
botao.addEventListener('click',async () => {
    // caso seja clicado inicia com o processo randomico
    const numAleatorio = parseInt(Math.random() * 2)
    // funçao deuErro para testar se erro ou sucesso
    await deuErro(numAleatorio)
    // quando sucesso
    .then((valor) => {
        console.log(valor)
    })
    // quando erro
    .catch((error) => {
        console.log(error)
    })  
    // sempre cai em uma condição
    .finally((data) => {
        console.log(data)
    })
    
})

// função considerou se par é sucesso e se ímpar é erro
const deuErro = (numAleatorio) => {
    return new Promise ((resolve, reject) => {
        if(numAleatorio % 2 === 0) {
            reject()
        } else {            
            resolve()
        }
    })
}
