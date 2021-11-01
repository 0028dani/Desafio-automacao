import Carrinho from "../pageobjects/LeBiscuitPage";

const carrinho = new Carrinho

Given(/^que acesso o site Le Biscuit$/, () => {
	carrinho.AcessarURL()
});

When(/^entrar na PDP$/, () => {
	carrinho.PDP()
});


And(/^digitar o CEP$/, () => {
	carrinho.ConsultarFrete()
});


And(/^calcular o frete$/, () => {
	carrinho.CalcularFrete()
});

And(/^adicionar um produto$/, () => {
	carrinho.AdicionarProduto()
});

And(/^fechar o carrinho$/, () => {
	carrinho.FecharCarrinho()
});

And(/^voltar para a pagina de home$/, () => {
	carrinho.PaginaHome()
});


And(/^escolher outro produto diferente$/, () => {
	carrinho.PDPAssadeirasNadir()
});

And(/^adicionar o produto$/, () => {
	carrinho.AdicionarProdutoDiferente()
});

When(/^removo os dois produtos no carrinho$/, () => {
	carrinho.RemoverProdutos()
});


Then(/^a sacola vai está limpa$/, () => {
	carrinho.ValidarTextoCarrinhoVazio()
});























