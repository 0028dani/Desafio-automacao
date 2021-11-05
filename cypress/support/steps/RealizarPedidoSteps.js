import RealizarPedido from "../pageobjects/RealizarPedidoPage";

const realizarPedido = new RealizarPedido

Given(/^que estou no site Le Biscuit$/, () => {
	realizarPedido.AcessarURL()
});

When(/^clicar no botão ACEITAR E CONTINUAR do cookies$/, () => {
	realizarPedido.AceitarCookies()
}); 

And(/^entrar no produto$/, () => {
	realizarPedido.PDP()
});

And(/^clicar no botão Adicionar á sacola$/, () => {
	realizarPedido.AdicionarProduto()
});

And(/^clicar no botao Ver sacola$/, () => {
	realizarPedido.ClicarBotaoVerSacola()
});


And(/^clicar no botao Continuar$/, () => {
	realizarPedido.ClicarBotaoContinuar()
});


And(/^preencher o campo e-mail$/, () => {
	realizarPedido.PreencherCampoEmail()
});

And(/^clicar no botao continue$/, () => {
	realizarPedido.ClicarBotaoContinue()
});

And(/^preencher o campo Primeiro nome$/, () => {
	realizarPedido.PreencherCampoPrimeiroNome()
});

And(/^preenche o campo Ultimo nome$/, () => {
	realizarPedido.PreencherCampoUltimoNome()
});

And(/^preenche o campo CPF$/, () => {
	realizarPedido.PreencherCampoCPF()
});

And(/^prenche o campo telefone$/, () => {
	realizarPedido.PreencherCampoTelefone()
});

And(/^clica no botao Ir para a entrega$/, () => {
	realizarPedido.ClicarBotaoIrParaEntrega()
});

And(/^preencher o campo do CEP$/, () => {
	realizarPedido.PreencherCampoCEP()
});


And(/^preencher o campo Numero$/, () => {
	realizarPedido.PreencherCampoNumero()
});

And(/^preencher o Campo Complemento e referencia$/, () => {
	realizarPedido.PreencherCampoComplementoReferencia()
});

And(/^clicar no botao Ir para o pagamento$/, () => {
    realizarPedido.ClicarBotaoIrParaPagamento()    
});

And(/^clicar no Boleto Bancario para forma de pagamento$/, () => {
	realizarPedido.ClicarBotaoBoletoBancario()
});


Then(/^o pedido apresenta concluido com a mensagem Finalizar compra$/, () => {
	realizarPedido.ValidarMensagemFinalizarCompra()
});










