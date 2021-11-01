

Feature: Realizar pedido

@carrinho
Scenario: Adicionar dois produtos diferentes no carrinho
Given que acesso o site Le Biscuit 
When entrar na PDP
And digitar o CEP
And calcular o frete 
And adicionar um produto
And fechar o carrinho
And voltar para a pagina de home
And escolher outro produto diferente
And adicionar o produto
And removo os dois produtos no carrinho
Then a sacola vai está limpa


#Segue os 3 novos testes para o desafio:
#Realizar calculo de frete na PDP
#Adicionar 2 produtos diferentes no carrinho e limpar todo o carrinho
#Fluxo de compra ( Adicionar produto no carrinho, navegar para o checkout, preencher informações necessárias, ir para tela de pagamentos e selecionar a opção de boleto ) Não fechar o pedido.
#  
 

