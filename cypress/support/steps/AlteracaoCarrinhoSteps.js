import Carrinho from "../pageobjects/AlteracaoCarrinhoPage";

const carrinho = new Carrinho


Given(/^que estou no site Le Biscuit$/, () => {
	carrinho.AcessarURL()
});

When(/^adicionar um produto$/, () => {
	carrinho.PDP()
	carrinho.AdicionarProduto()
});

When(/^fechar o carrinho$/, () => {
	carrinho.FecharCarrinho()
});

When(/^voltar para a pagina de home$/, () => {
	carrinho.PaginaHome()
});

When(/^escolher outro produto diferente$/, () => {
	carrinho.PDPAssadeirasNadir()
});

When(/^adicionar o produto$/, () => {
	carrinho.AdicionarProdutoDiferente()
});

When(/^removo os dois produtos no carrinho$/, () => {
	carrinho.RemoverProdutos()
});

Then(/^a sacola vai está limpa$/, () => {
	carrinho.ValidarTextoCarrinhoVazio()
});






















