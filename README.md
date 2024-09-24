# Carrinho de Compras

Este projeto é uma simulação de um carrinho de compras, desenvolvido com HTML, CSS e JavaScript. O usuário pode selecionar produtos de uma lista, escolher a quantidade desejada, adicionar ao carrinho e visualizar o total atualizado com base no preço e na quantidade dos itens selecionados.

## Funcionalidades

- **Seleção de Produtos**: O usuário pode escolher um produto de uma lista disponível.
- **Escolha de Quantidade**: O usuário pode definir a quantidade de cada produto antes de adicioná-lo ao carrinho.
- **Atualização de Carrinho**: O carrinho é atualizado dinamicamente ao adicionar ou remover produtos, exibindo os itens selecionados, suas quantidades e o valor total da compra.
- **Cálculo do Total**: O preço total é calculado com base no preço do produto e na quantidade escolhida pelo usuário.

## Estrutura do Projeto

```bash
carrinho-de-compras/
│
├── assets/
│   ├── arrow-down.svg     # Ícone decorativo
│   ├── carrinho-cinza.svg # Ícone de carrinho vazio
│   ├── grafismo-azul.svg  # Imagem decorativa
│   ├── icone-carrinho.svg # Ícone do carrinho com produtos
│   └── oculos.png         # Imagem do produto "Óculos"
│
├── js/
│   └── app.js             # Lógica do carrinho de compras
│
├── index.html             # Arquivo principal da interface do carrinho de compras
├── style.css              # Estilos principais do layout
└── README.md              # Documentação do projeto
```

## Como usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/glelisv/carrinho-de-compras.git
    ```
2. Abra o arquivo `index.html` em seu navegador para acessar a simulação do carrinho de compras.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo e dos elementos do carrinho.
- **CSS3**: Estilização visual do layout e dos componentes.
- **JavaScript (ES6)**: Lógica de seleção de produtos, adição ao carrinho e cálculo do valor total.

## Detalhes do Projeto

### Página Principal (`index.html`)

A página principal permite que o usuário interaja com os produtos e o carrinho de compras:
- **Lista de Produtos**: Cada produto exibe seu nome, imagem e preço.
- **Quantidade**: O usuário pode inserir a quantidade desejada de cada produto antes de adicioná-lo ao carrinho.
- **Carrinho Atualizado**: À medida que os produtos são adicionados, o carrinho é exibido com a lista de itens e o preço total calculado dinamicamente.

### Estilos (`style.css`)

O arquivo `style.css` define o design e a aparência do site:
- Estiliza a lista de produtos, o carrinho e os botões de interação.
- Inclui o uso de ícones e imagens da pasta `assets` para melhorar a experiência visual.

### Lógica do Carrinho (`app.js`)

A lógica do carrinho de compras está implementada no arquivo `app.js`:
- **Adição ao Carrinho**: Quando o usuário adiciona um produto, o carrinho é atualizado com o nome do produto, quantidade e subtotal.
- **Cálculo Total**: O total da compra é recalculado sempre que um produto é adicionado ou removido.
- **Remoção de Produtos**: O usuário pode remover produtos do carrinho e o total será ajustado automaticamente.

## Personalizações

- **Produtos Adicionais**: Para adicionar novos produtos, você pode editar o arquivo `index.html` para incluir mais opções de produtos, ou atualizar o `app.js` para incluir novas funcionalidades como descontos ou frete.
- **Estilos**: Modifique o arquivo `style.css` para ajustar o layout e design de acordo com suas preferências.