# fullcycle-nginx-challenge

Esse repositório refere-se ao desafio do curso FullCycle 3.0 onde precisamos utilizar o nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada na aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```
<h1>Full Cycle Rocks!</h1>
(Lista de nomes cadastrada no banco de dados)
```

## Requisito
Gerar o docker-compose de uma forma que basta apenas rodarmos `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta `8080`.
