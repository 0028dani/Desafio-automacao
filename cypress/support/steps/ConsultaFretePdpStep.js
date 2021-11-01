import ConsultaFretePDP from "../pageobjects/CalculoFretePdpPage"

const consultaFretePDP = new ConsultaFretePDP


Given(/^que estou no site Le Biscuit$/, () => {
	consultaFretePDP.AcessarURL()
});

When(/^entrar na PDP$/, () => {
	consultaFretePDP.PDP()
});

And(/^digitar o CEP$/, () => {
	consultaFretePDP.ConsultarFrete()
});

And(/^calcular o frete$/, () => {
	consultaFretePDP.CalcularFrete()
});

Then(/^o frete apresenta calculado$/, () => {
	consultaFretePDP.ValidacaoFreteCalculado()
});


