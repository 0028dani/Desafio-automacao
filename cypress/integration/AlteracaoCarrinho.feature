

Feature: Carrinho

Scenario: Adicionar dois produtos diferentes no carrinho
Given que estou no site Le Biscuit 
When entrar no produto
And clicar no botão Adicionar á sacola 
And clicar no botão fechar 
And clicar no logo Le Biscuit 
And clicar em outro produto diferente
And clicar no botão Adicionar á sacola 
And clicar nos dois ícone de lixo 
Then vai apresentar a seguinte mensagem: a sacola vai está limpa


 

