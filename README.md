# mensagem-de-erro
Exercício em Javascript no módulo de front-end dinâmico no curso da ADA

### Utilização de HTML, CSS e Javascript

Enunciado:
<br>
<i> Crie um botão que ao ser clicado retornará uma mensagem de erro ou sucesso aleatoriamente, a mensagem deve ser proveniente de uma Promise. A mensagem de erro deve ser apresentada em tela com manipulação do DOM via JS. É importante que o erro seja tratado!
Use a criatividade para apresentação do erro.
Não esqueça de usar CSS para personalizar sua apresentação. </i>

<br>
Elementos do <b>Javascript</b> estudados nesta tarefa:

### Promises
Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.

Uma Promise está em um destes estados:

pending: estado inicial, nem cumprido nem rejeitado.
fulfilled: significa que a operação foi concluída com sucesso.
rejected: significa que a operação falhou.
O estado eventual de uma promise pendente pode ser fulfilled com um valor ou rejected com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método then de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promise é considerada resolvida se for cumprida ou rejeitada, mas não pendente.

<img src="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png">

### Fetch
A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers (en-US). Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

Note que a especificação fetch() difere de jQuery.ajax(), principalmente, de três formas:

* A Promise retornada do fetch() não rejeitará o status do erro HTTP, mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status ok definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada.
* fetch() não receberá cookies cross-site; você não pode estabelecer uma conexão cross-site usando fetch. Cabeçalhos Set-Cookie de outros sites são ignorados silenciosamente.
* fetch() não enviará cookies, a não ser que seja definida a opção credentials do parâmetro init.

### Random
A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.

<br>

|  tópicos | Link |
| ------ | ------ |
| Promises | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| Random | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random/](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random/) |
| Fetch | [https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) |
