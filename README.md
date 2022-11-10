# O que preciso saber antes de começar?

Seja bem vindo ao repositório: `proposta-germinare` :rocket:

Antes de começar, vamos repassar algumas regras importantes para poder subir sua contribuição para esse repositório.

## Padrão de commit

Sinta-se em casa, mas lembre que não está! :smiling_imp::smiling_imp:

Por isso, deixe tudo organizado assim como você encontrou. Seguimos o padrão commitlint do Google, então nomes de Branchs e Pull Requests precisam ser identificadas com algum prefixo abaixo:

  ```
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test'
  ``` 
Siga também a descrição do card e voilá, você está seguindo boas prática. Exemplo de como fazemos:

`feat/germinare/001/button-component`

## Padrão de revisão 

Todo código deve ser revisado por algum colega, seguindo os pilares do `Clean Code`. Por isso, se você está validando, precisa ponderar todos os campos abaixo:

| Padrão a ser seguido | Descrição | Avaliação | Ponto de Melhoria | 
| --- | --- | --- | --- |
| **KISS** | 'Keep it Simple Stupid'. O código está o mais simples possível, sem complexidades desnecessárias? | :white_check_mark: ou :x: | |
| **DRY** | 'Don't Repeat Yourself'. O código poderia ser componentizado ou repetido menos vezes? Existe algo que se repete e que poderia não ser ambíguo?  | :white_check_mark: ou :x: | |
| **YAGNI** | 'You Aren't Gonna Need It'. A funcionalidade ou biblioteca é realmente necessária para construir o que foi pedido?  | :white_check_mark: ou :x: | |
| **Favor readability** | Ao ler o código, é possível entender facilmente o que está acontecendo? As variáveis estão bem explicadas? | :white_check_mark: ou :x: | |
| **Practice consistency** | O código seguiu o padrão do restante do projeto? | :white_check_mark: ou :x: | |

:space_invader: Bom Coding!!! :space_invader:
