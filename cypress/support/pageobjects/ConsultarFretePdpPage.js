import ConsultarFreteElements from "../elements/ConsultarFreteElements";


const consultarFreteElements = new ConsultarFreteElements

class ConsultaFretePDP {
    AcessarURL (){
        cy.visit(consultarFreteElements.URL(),{timeout:20000})
        cy.contains(consultarFreteElements.BotaoAceitarCookies())
        .click()
    }

    AceitarCookies () {
        cy.contains(consultarFreteElements.BotaoAceitarCookies())
        .should('have.text','Aceitar e continuar')
        .click()
       
    }

    PDP () {
        cy.get(consultarFreteElements.pdp(),{timeout:20000})
        .should('exist')
        .click()
    }
    ConsultarFrete () {
        cy.get(consultarFreteElements.CampoFrete(),{timeout:20000})
        .type('05820200')
        .should('exist')
    }
    CalcularFrete () {
        cy.get(consultarFreteElements.BotaoCalcular())
        .should('exist')
        .click()
    }

    ValidacaoFreteCalculado () {
        cy.get(consultarFreteElements.validacaoCEP())
        .should('exist')
    }
}
export default ConsultaFretePDP