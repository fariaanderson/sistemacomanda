// const prompt = require ('prompt-sync') ( );

let conta = {
    pessoamesa: [] , //Quantidade de pessoas total da mesa
    totalconta: [] , //Total geral da conta sem acrescimos e descontos
    metodopagamento: [] , //Métodos de efetuar o pagamento
    taxadesconto: [] , //Digite a taxa de desconto que será aplicado no totao da conta conforme o pagamento Pix ou Dinheiro
    totalcomdesconto: [], //Total com desconto aplicado
}

conta.pessoamesa = parseInt(prompt("Digite a quantidade de pessoas na mesa: "));
conta.totalconta = parseFloat(prompt("Digite o total da conta: "));
conta.metodopagamento = parseInt(prompt("Digite o método de pagamento >> 1: Pix / 2: Dinheiro / 3: Cartão de Crédito / 4: Cartão de Débito:  "));
conta.taxadesconto = parseFloat(prompt("Digite a taxa de desconto: "));
conta.totalcomdesconto = conta.totalconta - ((conta.totalconta*conta.taxadesconto)/100);
alert (conta.totalcomdesconto);