# Checklist de entrega

Confira antes de enviar o link do seu repositório.

## Funciona

- [x] `npm install` e `npm run dev` rodam sem erro
- [x] os seis livros do arquivo aparecem na tela
- [x] o console do navegador (F12) não mostra erro nem aviso de `key`

## Etapa 2 — componentes e listas

- [x] existe `src/components/BookCard.jsx`
- [x] existe `src/components/BookList.jsx`
- [x] a lista usa `.map()` com `key={book.id}`
- [x] a etiqueta mostra Disponível ou Reservado conforme o livro
- [x] lista vazia mostra `Nenhum livro no acervo.`

## Etapa 3 — props e children

- [x] as props são desestruturadas na assinatura do componente
- [x] o botão do cartão chama uma função recebida por prop, com o `id`
- [x] `BookList` apenas encaminha a função, sem decidir nada
- [x] existe `src/components/Panel.jsx` usando `children`

## Etapa 4 — estado

- [x] o `App` guarda a lista em `useState`
- [x] reservar e devolver funciona em qualquer livro
- [x] a atualização não usa `push` nem altera o objeto direto
- [x] o texto do botão alterna entre Reservar e Devolver
- [x] o contador do topo é calculado, não guardado em outro estado

## Etapa 5 — formulário

- [x] existe `src/components/BookForm.jsx`
- [x] os dois campos são controlados
- [x] enviar vazio mostra a mensagem e **não** recarrega a página
- [x] o livro cadastrado aparece na lista imediatamente
- [x] os campos limpam após o cadastro
- [x] o livro novo pode ser reservado como os outros

## Git

- [x] há pelo menos cinco commits, um por etapa
- [x] `node_modules` **não** foi enviado
- [x] o repositório está público
- [x] o link foi entregue da forma combinada em sala
