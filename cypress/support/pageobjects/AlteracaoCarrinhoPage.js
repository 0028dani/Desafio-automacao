import CarrinhoElements from "../elements/AlteracaoCarrinhoElements";

const carrinhoElements =  new CarrinhoElements

class Carrinho {
    AcessarURL (){
        cy.visit(carrinhoElements.URL(),{timeout:20000})
    } 

    NavegarPDPAirfryer () {
        cy.get(carrinhoElements.PDPAirFryer(),{timeout:20000})
        .should('exist')
        .click()
    }
    
    AdicionarProduto () {
        cy.get(carrinhoElements.BotaoAdicionar(),{timeout:20000})
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
        cy.get(carrinhoElements.Botaoremover(),{timeout:10000})
        .should('exist')
        .click({multiple: true})
    }
    
    ValidarTextoCarrinhoVazio () {
        cy.get(carrinhoElements.TextoCarrinhoVazio())
        .should('have.text', 'Sua sacola está vazia')

    }
}


export default  Carrinho
