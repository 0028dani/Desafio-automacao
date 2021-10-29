import LeBiscuitElements from "../elements/LeBiscuitElements";

const leBiscuitElements =  new LeBiscuitElements

class Carrinho {
    AcessarURL (){
        cy.visit(leBiscuitElements.acessandoSite())
    } 
    PDP () {
        cy.get(leBiscuitElements.pdp(),{timeout:20000})
        .click()
    }
    ConsultarFrete () {
        cy.get(leBiscuitElements.CEPfrete(),{timeout:20000})
        .type('05820200')
        .should('exist')
    }
    CalcularFrete () {
        cy.get(leBiscuitElements.Calcular())
        .should('exist')
        .click()
        
    }
    AdicionarProduto () {
        cy.get(leBiscuitElements.Adicionar())
        .should('exist')
        .click()
        
    }
    FecharCarrinho () {
        cy.get(leBiscuitElements.BotaoFechar())
        .should('exist')
        .click()
        
    }

    PaginaHome () {
        cy.get(leBiscuitElements.PaginaHome())
        .should('exist')
        .click()
        
    }

    PDPAssadeirasNadir (){
        cy.get(leBiscuitElements.PDPAssadeirasNadir())
        .should('exist')
        .click()
        
    }

    AdicionarProdutoDiferente () {
        cy.get(leBiscuitElements.Adicionar())
        .should('exist')
        .click()
    }
    ValidaçãoProdutosNoCarrinho (){
        cy.get(leBiscuitElements.Validacao())
        .should('exist')
        cy.get(leBiscuitElements.Validacao2())
        .should('exist')
    }
}

 //       cy.get(primeiroCheckboxs.botao_entrar(),{timeout:20000})
export default  Carrinho
