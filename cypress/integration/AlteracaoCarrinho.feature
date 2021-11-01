

Feature: Carrinho

Scenario: Adicionar dois produtos diferentes no carrinho
Given que estou no site Le Biscuit 
When adicionar um produto
And fechar o carrinho
And voltar para a pagina de home
And escolher outro produto diferente
And adicionar o produto
And removo os dois produtos no carrinho
Then a sacola vai está limpa


 

