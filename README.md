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

### Random
A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.

### Funções Assíncronas (await/async)
Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

### DOM e Javascript
O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.

Uma página da Web é um documento. Este documento pode ser exibido na janela do navegador ou como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.
O DOM não é uma linguagem de programação, mas sem ela, a linguagem JavaScript não teria nenhum modelo ou noção de páginas da web, documentos HTML, documentos XML e suas partes componentes (por exemplo, elementos). Cada elemento de um documento - o documento como um todo, o cabeçalho, as tabelas do documento, os cabeçalhos da tabela, o texto nas células da tabela - faz parte do modelo de objeto do documento desse documento, para que todos possam ser acessados e manipulados usando o método DOM e uma linguagem de script como JavaScript.

No início, o JavaScript e o DOM estavam fortemente interligados, mas, eventualmente, evoluíram para entidades separadas. O conteúdo da página é armazenado no DOM e pode ser acessado e manipulado via JavaScript, para que possamos escrever esta equação aproximada:

API (página HTML ou XML) = DOM + JS (linguagem de script)

O DOM foi projetado para ser independente de qualquer linguagem de programação específica, disponibilizando a representação estrutural do documento a partir de uma única API consistente.

<br>

|  tópicos | Link |
| ------ | ------ |
| Promises | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| Random | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random/](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random/) |
| Funções Assíncronas | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) |
| DOM e Javascript | [https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction) |
