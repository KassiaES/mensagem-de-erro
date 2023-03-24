// construção do botão 
const botao = document.querySelector('button')
// definição da div onde serão criados os elementos
const root = document.getElementById('root')
// construção do elemento parágrafo 
const linha = document.createElement('p')
// implementação do parágrafo na div
root.appendChild(linha)
// construção do elemento imagem
const imagem = document.createElement('img')
// implementação da imagem na div
root.appendChild(imagem)

// Processo 1
// leitura do clique do botão
botao.addEventListener('click', () => {  
    // caso seja clicado inicia com o processo randomico
    const numAleatorio = parseInt(Math.random() * 2)
    // funçao deuErro para testar se erro ou sucesso
    deuErro(numAleatorio)
    // quando sucesso
    .then((valor) => {
        console.log(valor)
        linha.textContent = "SUCESSO"
        imagem.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJmNjBkMzkxY2M4YmVkZTEwY2E3NDRlZjNlZmMxOGYxOGRkYWYxNyZjdD1z/h3uet8jAm1sJZhcqsL/giphy.gif"

    }) 
    // quando erro
    .catch((error) => {
        console.log(error)
        linha.textContent = "ERRO"
        imagem.src = "https://www.estudopratico.com.br/wp-content/uploads/2018/07/bug-computador.jpg"

    })      
    // sempre cai nesta condição no final
    .finally((data) => {
        console.log("é para apagar")
        setTimeout(() => {               
            linha.textContent =""
            imagem.src =""
        }, 3000);
    })    
})

// função considerou se par é sucesso e se ímpar é erro
const deuErro = (numAleatorio) => {
    return new Promise ((resolve, reject) => {
        if(numAleatorio % 2 === 0) {
            reject(false)
        } else {            
            resolve(true)
        }
    })
}



