# nosql
Um repositório criado para praticar os conceitos do MongoDB.

## Criação de um banco gratuito:

> Fazer uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) NÃO PRECISA DE CARTÃO DE CRÉDITO!

> Criar um banco de dados gratuito:

> Cluster: Shared

> Cloud Provider & Region: São Paulo (sa-east-1)

> Adicione o IP 0.0.0.0/0 para permitir o acesso a partir de qualquer lugar.

Criar o Cluser

## Conexão ao cluster:

> Baixar a extensão do VS Code [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)

> Ainda no VS Code, abra a paleta de comandos a extensão do MongoDB.

> Escolha a opção conectar através da string.

> Copie a string de conexão do cluster que você criou, ao clicar em Connect with VS Code.

> Substitua <password> pela senha que você cadastrou no seu usuário.

> Conecte-se.

## Abrindo o ambiente
> Crie um novo playground no VSCode e execute o código proposto para verificar o funcionamento do ambiente.

Resultado esperado:
```
[
  {
    "_id": "abc",
    "totalSaleAmount": 120
  },
  {
    "_id": "jkl",
    "totalSaleAmount": 20
  },
  {
    "_id": "xyz",
    "totalSaleAmount": 150
  }
]
```

> Em seguida, baixe o [arquivo contendo dados de filmes](https://github.com/rodrigofolha/nosql/blob/main/loadMovieDetailsDataset.js).

> Copie o código e execute no seu VSCode.
