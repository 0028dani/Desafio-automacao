import Carrinho from "../pageobjects/AlteracaoCarrinhoPage";

const carrinho = new Carrinho

Given(/^que estou no site Le Biscuit$/, () => {
	carrinho.AcessarURL()
});

When(/^entrar no produto$/, () => {
	carrinho.NavegarPDPAirfryer()
	
});

And(/^clicar no botão Adicionar á sacola$/, () => {
	carrinho.AdicionarProduto()
});

And(/^clicar no botão fechar$/, () => {
	carrinho.FecharCarrinho()
});

And(/^clicar no logo Le Biscuit$/, () => {
	carrinho.PaginaHome()
});

And(/^clicar em outro produto diferente$/, () => {
	carrinho.PDPAssadeirasNadir()
});

And(/^clicar no botão Adicionar á sacola$/, () => {
	carrinho.AdicionarProdutoDiferente()
});

And(/^clicar nos dois ícone de lixo$/, () => {
	carrinho.RemoverProdutos()
});

Then(/^vai apresentar a seguinte mensagem: a sacola vai está limpa$/, () => {
	carrinho.ValidarTextoCarrinhoVazio()
});






















