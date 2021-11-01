Feature: Calcular o frete na PDP

Scenario: Calcular frete
Given que estou no site Le Biscuit 
When navegar na PDP
And preencher o campo CEP
And clicar no botão Calcular 
Then  o frete apresenta calculado