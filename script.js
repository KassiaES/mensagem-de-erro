
const botao = document.querySelector('button')
botao.addEventListener('click', () => {
    const input = document.querySelector('input')

    if(input.value) {
        console.log('Enviar')
    } else {
        const mensagem = document.createElement(`p`)
        mensagem.innerText = `Ops! Preencha o campo`

        document.getElementById('root').appendChild(mensagem)

        setTimeout(() => {
            mensagem.remove()
        }, 3000)


    }



})