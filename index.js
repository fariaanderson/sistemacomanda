const prompt = require ('prompt-sync') ( );

let conta = {
    pessoaMesa: [] , //Quantidade de pessoas total da mesa
    totalConta: [] , //Total geral da conta sem acrescimos e descontos
    metodoPagamento: [] , //Métodos de efetuar o pagamento
    taxaDesconto: [] , //Digite a taxa de desconto que será aplicado no totao da conta conforme o pagamento Pix ou Dinheiro
    totalComDesconto: [], //Total com desconto aplicado
    divideTotal: [], //Divide o total pelas pessoas
}

conta.pessoaMesa = parseInt(prompt("Digite a quantidade de pessoas na mesa: "));
conta.totalConta = parseFloat(prompt("Digite o total da conta: "));

function metodoPagamento(){
    conta.metodoPagamento = parseInt(prompt("Digite o método de pagamento >> 1: Pix / 2: Dinheiro / 3: Cartão "));

    switch(conta.metodoPagamento){
        case 1:
             conta.totalComDesconto = ((conta.totalConta/conta.pessoaMesa)*0.9);
             console.log(`O valor total da conta é:   ${conta.totalComDesconto.toFixed(2)}`);
        break
        case 2:
            conta.totalComDesconto = ((conta.totalConta/conta.pessoaMesa)*0.9);
            console.log(`O valor total da conta é:   ${conta.totalComDesconto.toFixed(2)}`);
        break
        case 3:
            console.log(`O valor da conta para pagamento em cartão é ${conta.totalConta/conta.pessoaMesa.toFixed(2)}`);
    
        default:
             console.log("O Total da conta é: " + conta.totalConta.toFixed(2));
        break
}

}

conta.divideTotal = parseInt(prompt("Deseja dividir a conta? 1 = Sim / 2 = Nao "));

if (conta.divideTotal === 1 ){ 
    for ( let i=0;i<conta.pessoaMesa;i++){
metodoPagamento()}
    } else {
        conta.metodoPagamento = parseInt(prompt("Digite o método de pagamento >> 1: Pix / 2: Dinheiro / 3: Cartão "));

        switch(conta.metodoPagamento){
            case 1:
                 conta.totalComDesconto = (conta.totalConta*0.9);
                 console.log(`O valor total da conta é:   ${conta.totalComDesconto.toFixed(2)}`);
            break
            case 2:
                conta.totalComDesconto = (conta.totalConta*0.9);
                console.log(`O valor total da conta é:   ${conta.totalComDesconto.toFixed(2)}`);
            break
            case 3:
                console.log(`O valor da conta para pagamento em cartão é ${conta.totalConta.toFixed(2)}`);
        
            default:
                 console.log("Opção Inválida");
            break

    }

    }