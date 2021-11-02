import RealizarPedidoElements from "../elements/RealizarPedidoElements";

const realizarPedidoElements = new RealizarPedidoElements

class RealizarPedido {
    AcessarURL (){
        cy.visit(realizarPedidoElements.acessandoSite(),{timeout:20000})
        cy.get(realizarPedidoElements.BotaoAceitarCookies())
        .click()
    } 
    
    AceitarCookies () {
        cy.contains(realizarPedidoElements.BotaoAceitarCookies())
        .click()
        //.should('exist')
    }
 
 
    PDP () {
        cy.get(realizarPedidoElements.pdp(),{timeout:20000})
        .click()
    }

    AdicionarProduto () {
        cy.get(realizarPedidoElements.BotaoAdicionar(),{timeout:20000})
        .should('exist')
        .click() 
    }

    ClicarBotaoVerSacola () {
        cy.get(realizarPedidoElements.BotaoVerSacola(),{timeout:10000})
        .should('exist')
        .click()

    }

    ClicarBotaoContinuar () {
        cy.get(realizarPedidoElements.BotaoContinuar())
        .should('exist')
        .click()
    }

    PreencherCampoEmail () {
        cy.get(realizarPedidoElements.CampoEmail())
        .should('exist')
        .type('daniela.arcanjo@hotmail.com')
    }

    ClicarBotaoContinue (){
        cy.get(realizarPedidoElements.BotaoContinue())
        .should('exist')
        .click()
    }
    
    PreencherCampoPrimeiroNome () {
        cy.get(realizarPedidoElements.CampoPrimeiroNome())
        .should('exist')
        .type('Daniela')
    }

    PreencherCampoUltimoNome () {
        cy.get(realizarPedidoElements.CampoUltimoNome())
        .should('exist')
        .type('Arcanjo')
    }

    PreencherCampoCPF () {
        cy.get(realizarPedidoElements.CampoCPF())
        .should('exist')
        .type('905.594.870-53')
    }

    PreencherCampoTelefone () {
        cy.get(realizarPedidoElements.CampoTelefone())
        .should('exist')
        .type('11980805164')
    }

    ClicarBotaoIrParaEntrega (){
        cy.get(realizarPedidoElements.BotaoIrParaEntrega())
        .should('exist')
        .click()
    }

    PreencherCampoCEP () {
        cy.get(realizarPedidoElements.CampoCEP())
        .should('exist')
        .type('08032-200')
    }

    PreencherCampoNumero () {
        cy.get(realizarPedidoElements.CampoNumero(),{timeout:10000})
        .should('exist')
        .type('07')
    }

    PreencherCampoComplementoReferencia () {
        cy.get(realizarPedidoElements.CampoComplementoReferencia())
        .should('exist')
        .type('teste')
    }
    
    ClicarBotaoIrParaPagamento () {
        cy.get(realizarPedidoElements.BotaoIrParaPagamento())
        .should('exist')
        .click()
    }

    ClicarBotaoBoletoBancario () {
        cy.get(realizarPedidoElements.BotaoBoletoBancario(),{timeout:10000})
        .should('exist')
        .click()
    }

    ValidarMensagemFinalizarCompra () {
        cy.get(realizarPedidoElements.MensagemFinalizarCompra())
        .should('have.text', 'Finalizar compra')
    }

    //{timeout:10000}
}


export default RealizarPedido