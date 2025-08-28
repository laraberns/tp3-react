# Teste de Performance - TP3 [React]

Neste projeto vamos criar um dashboard simples para uma plataforma de
conteúdos, para isso, execute as tarefas a seguir:

## Tarefa 01

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um componente que exibe um cartão de perfil de contato com os
seguintes dados:

-   Nome
-   Sobrenome
-   Foto
-   Contatos (array de telefones)
-   Emails (array de emails)
-   Endereço

Os dados devem estar armazenados dentro do próprio componente.

Use estilos inline com o atributo style do JSX para estilizar o cartão
de forma organizada e visualmente agradável.

------------------------------------------------------------------------

## Tarefa 02

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um componente que recebe uma propriedade `color` (string
hexadecimal, ex: "#ff00AA").

O componente deve:

-   Exibir o valor da cor recebida como propriedade
-   Usar essa mesma cor como cor de fundo
-   Conter uma mensagem para melhor visualização

Use estilos inline com o atributo style do JSX para aplicar a cor de
fundo e estilizar o componente.

------------------------------------------------------------------------

## Tarefa 03

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um componente que recebe uma propriedade `estilo` (objeto
contendo dados de estilização).

O componente deve:

-   Aplicar os estilos recebidos na propriedade em sua própria
    estilização
-   Exibir algum conteúdo para demonstrar a estilização aplicada

Exemplo:

``` jsx
<CompEstilizado estilo={{ 
  backgroundColor: "red", 
  color: "white", 
  width: "50%",
  height: 200 
}} />
```

Use estilos inline com o atributo style do JSX para aplicar os estilos
recebidos.

OBS: o código apresentado acima é apenas um exemplo, o objeto passado
como propriedade deve aceitar qualquer atributo de estilização de um
componente JSX.

------------------------------------------------------------------------

## Tarefa 04

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um componente que recebe uma propriedade `dados` (objeto
contendo):

-   titulo (string com o título da mensagem)
-   mensagem (string com o conteúdo da mensagem)
-   tipo (valor que pode ser: "Sucesso", "Alerta" ou "Erro")

O componente deve:

-   Exibir o título e a mensagem recebidos
-   Aplicar estilos diferentes de acordo com o tipo da mensagem
-   Usar cores distintas para cada tipo (ex: verde para sucesso, amarelo
    para alerta, vermelho para erro)

Use estilos inline com o atributo style do JSX.

------------------------------------------------------------------------

## Tarefa 05

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um sistema de componentes para exibir informações de um
produto:

### Componente Principal (ProdutoCompleto)

Recebe uma propriedade produto com a estrutura:

``` json
{ 
  "nome": "String",
  "descricao": "String",
  "preco": 0.0,
  "vendedor": { "nome": "String", "telefone": "String", "nota": 0.0 },
  "avaliacoes": [{ "usuario": "String", "avaliacao": "String", "nota": 0.0 }]
}
```

### Componente de Produto (InfoProduto)

Recebe dados do produto (nome, descricao, preco) e exibe as informações
básicas do produto.

### Componente de Vendedor (InfoVendedor)

Recebe dados do vendedor (nome, telefone, nota) e exibe as informações
do vendedor.

### Componente de Avaliações (ListaAvaliacoes)

Recebe array de avaliações e exibe cada avaliação com usuário,
comentário e nota.

**Requisitos:**

-   Use estilos inline com o atributo style do JSX
-   O componente principal deve utilizar os três componentes específicos
-   Cada componente deve ser reutilizável e independente

------------------------------------------------------------------------

## Tarefa 06

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um sistema de componentes para exibir informações de um
aluno:

### Componente Principal (BoletimAluno)

Recebe uma propriedade aluno com a estrutura:

``` json
{ 
  "nome": "String",
  "matricula": "String",
  "responsavel": "String",
  "disciplinas": [{ 
    "nome": "String", 
    "docente": "String", 
    "notas": [{ "prova": "String", "nota": 0.0 }]
  }]
}
```

### Componente de Informações do Aluno (InfoAluno)

Recebe dados do aluno (nome, matricula, responsavel) e exibe as
informações pessoais do aluno.

### Componente de Disciplinas (ListaDisciplinas)

Recebe array de disciplinas, exibe cada disciplina com nome e docente, e
utiliza o componente de notas para cada disciplina.

### Componente de Notas (ListaNotas)

Recebe array de notas e exibe cada nota com nome da prova e valor.

**Requisitos:**

-   Use estilos inline com o atributo style do JSX
-   O componente principal deve utilizar os três componentes específicos
-   Cada componente deve ser reutilizável e independente

------------------------------------------------------------------------

## Sistema de Biblioteca Pessoal

### Tarefa 07

Crie um projeto no CodeSandbox usando o Template React

Desenvolva um sistema de componentes para exibir informações de uma
biblioteca pessoal:

**Componente Principal (BibliotecaPessoal)**\
Recebe uma propriedade biblioteca com a estrutura:

``` json
{
  "proprietario": "String",
  "totalLivros": 0,
  "livros": [{
    "titulo": "String",
    "autor": "String",
    "genero": "String",
    "paginas": 0,
    "avaliacao": 0
  }]
}
```

------------------------------------------------------------------------

### Tarefa 08

Crie um componente que recebe os dados totais da biblioteca e exibe:

-   Nome do proprietário
-   Total de livros
-   Média de páginas por livro
-   Gênero mais frequente

Use os dados da Tarefa 07 como base.

------------------------------------------------------------------------

### Tarefa 09

Crie um componente que recebe o array de livros e exibe:

-   Lista organizada de todos os livros
-   Informações completas de cada livro
-   Indicador visual baseado na avaliação

Use os dados da Tarefa 07 como base.

------------------------------------------------------------------------

### Tarefa 10

Crie um componente que permite filtrar os livros por:

-   Gênero literário
-   Faixa de avaliação
-   Número mínimo de páginas

Conecte com os componentes das Tarefas 07 e 09.

------------------------------------------------------------------------

### Tarefa 11

Crie um componente que exibe detalhes expandidos de um livro:

-   Informações completas
-   Estatísticas individuais
-   Comparação com a média da biblioteca

Use dados das Tarefas 07 e 08.

------------------------------------------------------------------------

### Tarefa 12

Integre todos os componentes anteriores em um sistema completo:

-   Layout organizado com todos os componentes
-   Navegação entre visões geral e detalhada
-   Filtros funcionais aplicados em tempo real
-   Estatísticas atualizadas dinamicamente

Use estilos inline com o atributo style do JSX em todos os componentes.
