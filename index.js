const prompt = require ('prompt-sync') ( );

// let pessoaMesa = parseInt(prompt("Insira a quantidade de pessoas na mesa! - "));
let pessoaMesa = "";
while(!Number.isInteger(pessoaMesa) ) {
    pessoaMesa = parseInt(prompt("Insira a quantidade de pessoas na mesa! - "));   
}
let totalConta = parseFloat(prompt("Insira o total da conta! :"));
let metodoPagamento = parseInt(prompt("Insira o metodo de pagamento (1 - Pix / 2 - Dinheiro / 3 - Cartão) : "));
let divideConta = parseInt(prompt("Deseja dividir o total da conta? 1 = Sim  /  2 = Não : "));
let calculaGorjeta = parseInt(prompt("Deseja colaborar com uma gorjeta para o garcom? 1 - Sim / 2 - Não  :"));
let valorGorjeta = 0;
if (calculaGorjeta == 1){
    valorGorjeta = parseFloat(prompt("Insira o valor da gorjeta: R$ "));
    
    }

let valorDesconto = 0;
switch (metodoPagamento){
    case 1: 
        valorDesconto = (totalConta*10)/100;
    break
    case 2:
        valorDesconto = (totalConta*10)/100;
    break
    case 3:
        valorDesconto = 0;
    break
    default: 
        valorDesconto = 0;
    return
}


let qtdPessoaMesa = 0;
if (divideConta == 1){
    qtdPessoaMesa=pessoaMesa;
} else {
    qtdPessoaMesa = 1;
}


let valorTotalConta = (totalConta+valorGorjeta-valorDesconto)/qtdPessoaMesa;



        console.log(`O valor total da conta é: R$ ${totalConta.toFixed(2)} `);
  
   
        console.log(`O valor de desconto: R$ ${valorDesconto.toFixed(2)} `);
    
    
        console.log(`O valor total da gorjeta: R$ ${valorGorjeta.toFixed(2)} `);
    
   
        console.log()
    


console.log(`O total da conta para cada pessoa:  R$ ${valorTotalConta.toFixed(2)}`);

