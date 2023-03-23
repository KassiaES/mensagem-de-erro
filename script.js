// construção do botão 
const botao = document.querySelector('button')

// leitura do clique do botão
botao.addEventListener('click', () => {
    // caso seja clicado inicia com o processo randomico
    const numAleatorio = parseInt(Math.random() * 2)
    deuErro(numAleatorio)
    .then(() => {
        console.log(`${numAleatorio} é impar`)
    })
    .catch(() => {
        console.log(`${numAleatorio} é par`)
    })    
})

const deuErro = (numAleatorio) => {
    return new Promise ((resolve, reject) => {
        if(numAleatorio % 2 === 0) {
            reject(numAleatorio)
        } else {            
            resolve(`${numAleatorio} é impar`)
        }
    })
}
