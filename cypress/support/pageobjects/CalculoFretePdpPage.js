import CalculoFreteElements from "../elements/CalculoFreteElements";


const calculoFreteElements = new CalculoFreteElements

class ConsultaFretePDP {
    AcessarURL (){
        cy.visit(calculoFreteElements.acessandoSite())
    } 
    PDP () {
        cy.get(calculoFreteElements.pdp(),{timeout:20000})
        .click()
    }
    ConsultarFrete () {
        cy.get(calculoFreteElements.CEPfrete(),{timeout:20000})
        .type('05820200')
        .should('exist')
    }
    CalcularFrete () {
        cy.get(calculoFreteElements.Calcular())
        .should('exist')
        .click()
    }

    ValidacaoFreteCalculado () {
        cy.get(calculoFreteElements.validacaoCEP())
        .should('exist')
    }
}
export default ConsultaFretePDP