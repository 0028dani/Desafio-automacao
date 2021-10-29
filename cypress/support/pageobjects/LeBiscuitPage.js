import LeBiscuitElements from "../elements/LeBiscuitElements";

const leBiscuitElements =  new LeBiscuitElements

class Carrinho {
    AcessarURL (){
        cy.visit(leBiscuitElements.acessandoSite())
    } 
}
 //       cy.get(primeiroCheckboxs.botao_entrar(),{timeout:20000})
export default  Carrinho;
