# Angular Carbon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usando os Componentes

Basta chamar os componentes no HTML e passar por parametro o desejado.

### Modal

Selector: app-modal

Parametros:

title -> Titulo do modal
subtitle -> (opcional) Pequeno subtitulo acima do titulo
msg -> Corpo da mensagem do modal
labelBtn1 -> label que aparecerá no botão primario
redirect1 -> (passar URL) Realiza redirecionamento de URL ao clicar no botao primario
labelBtn2 -> (opcional) label que aparecerá no botao secundario, caso não declare o botao 2 não aparecera
redirect2 -> (passar URL) Realiza redirecionamento de URL ao clicar no botao secundario

Outputs

emitBtn1, emitBtn2 -> emit sinal que botao foi clicado

### Table

Selector: app-table

Tabela que recebe um array JSON, identifica seus campos e exibi todos os atributos dos objetos.

Parametros:

array -> Passar array de objetos JSON. Os objetos devem ser iguais, com os mesmos campos.
labelFieldName -> passar uma array de string de tamanho igual ao  numero de campos dos objetos JSON. Na ordem.
redirect -> (passar URL) adiciona uma coluna de lupas ao lado de cada linha, ao clica salva o objeto da lista no sessionStorage com nome da chave de "item" e redireciona a tela. O aconselhavel é no NgInit da tela redirecionada buscar o objeto no sessionStorage.
