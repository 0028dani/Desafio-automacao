Feature: Calculo de frete

Scenario: Calcular o frete na PDP
Given que estou no site Le Biscuit 
When entrar na PDP
And digitar o CEP
And calcular o frete
Then  o frete apresenta calculado