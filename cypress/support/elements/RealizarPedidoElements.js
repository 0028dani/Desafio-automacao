class RealizarPedidoElements {
    acessandoSite = () => {return 'https://www.lebiscuit.com.br/'}
    pdp = () => {return '[data-hydration-id="store.home/responsive-layout.mobile#home2-mobile"] > :nth-child(3) > :nth-child(2) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal'}
    BotaoAdicionar = () => {return '.mt4 > .pr0 > .vtex-button > .vtex-button__label'}
    BotaoAceitarCookies = () => {return 'Aceitar e continuar'}
    BotaoVerSacola = () => {return '#proceed-to-checkout > .vtex-button__label'}
    BotaoContinuar = () => {return '#cart-to-orderform'}
    CampoEmail = () => {return '#client-pre-email'}
    BotaoContinue = () => {return '#btn-client-pre-email'}
    CampoPrimeiroNome = () => {return '#client-first-name'}
    CampoUltimoNome = () => {return '#client-last-name'}
    CampoCPF = () => {return '#client-document'}
    CampoTelefone = () => {return '#client-phone'}
    BotaoIrParaEntrega = () => {return '#go-to-shipping'}
    CampoCEP = () => {return '#ship-postalCode'}
    CampoNumero = () => {return '#ship-number'}
    CampoComplementoReferencia  = () => {return '#ship-complement'}
    BotaoIrParaPagamento  = () => {return '#btn-go-to-payment'}
    BotaoBoletoBancario = () => {return '#payment-group-bankInvoicePaymentGroup > .payment-group-item-text'}
    MensagemFinalizarCompra = () => {return '#pay-finish'}
}
export default RealizarPedidoElements