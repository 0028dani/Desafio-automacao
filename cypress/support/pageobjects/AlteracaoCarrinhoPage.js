import CarrinhoElements from "../elements/AlteracaoCarrinhoElements";

const carrinhoElements =  new CarrinhoElements

class Carrinho {
    AcessarURL (){
        cy.visit(carrinhoElements.acessandoSite())
    } 

    PDP () {
        cy.get(carrinhoElements.pdp(),{timeout:20000})
        .click()
    }

    AdicionarProduto () {
        cy.get(carrinhoElements.Adicionar())
        .should('exist')
        .click() 
    }

    FecharCarrinho () {
        cy.get(carrinhoElements.BotaoFechar())
        .should('exist')
        .click()  
    }

    PaginaHome () {
        cy.get(carrinhoElements.PaginaHome())
        .should('exist')
        .click()  
    }

    PDPAssadeirasNadir (){
        cy.get(carrinhoElements.PDPAssadeirasNadir())
        .should('exist')
        .click()   
    }

    AdicionarProdutoDiferente () {
        cy.get(carrinhoElements.Adicionar())
        .should('exist')
        .click()
    }

    RemoverProdutos () {
        cy.get(carrinhoElements.Botaoremover())
        .should('exist')
        .click()
        
        cy.get(carrinhoElements.Botaoremover2())
        .should('exist')
        .click()
    }
    
    ValidarTextoCarrinhoVazio () {
        cy.get(carrinhoElements.TextoCarrinhoVazio())
        .should('have.text', 'Sua sacola está vazia')

    }
}


export default  Carrinho
