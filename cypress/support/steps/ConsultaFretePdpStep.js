import ConsultaFretePDP from "../pageobjects/CalculoFretePdpPage"

const consultaFretePDP = new ConsultaFretePDP


Given(/^que estou no site Le Biscuit$/, () => {
	consultaFretePDP.AcessarURL()
});

When(/^navegar na PDP$/, () => {
	consultaFretePDP.PDP()
});

And(/^preencher o campo CEP$/, () => {
	consultaFretePDP.ConsultarFrete()
});

And(/^clicar no botão Calcular$/, () => {
	consultaFretePDP.CalcularFrete()
});

Then(/^o frete apresenta calculado$/, () => {
	consultaFretePDP.ValidacaoFreteCalculado()
});


