const prompt = require ('prompt-sync') ( );

let pessoaMesa = parseInt(prompt("Insira a quantidade de pessoas na mesa! :"));
let totalConta = parseFloat(prompt("Insira o total da conta! :"));
let metodoPagamento = parseInt(prompt("Insira o metodo de pagamento (1 - Pix / 2 - Dinheiro / 3 - Cartão) : "));


let totalComDesconto = (totalConta-(totalConta*10)/100);
//console.log(totalComDesconto.toFixed(2));

switch(metodoPagamento){
    case 1:
        console.log(`O valor total da conta é: R$ ${totalComDesconto.toFixed(2)} `);
    break
    case 2:
        console.log(`O valor total da conta é: R$ ${totalComDesconto.toFixed(2)} `);
    break
    case 3:
        console.log(`O valor total da conta é: R$ ${totalConta.toFixed(2)} `);
    // default:
    //     console.log("Digite um valor válido!!!")

}

let divideConta = parseInt(prompt("Deseja dividir o total da conta? 1 = Sim  /  2 = Não : "));

if (divideConta == 1 && metodoPagamento == 1 || metodoPagamento == 2){
    console.log(`O total para cada integrante da mesa pagar é de: " R$ ${totalComDesconto/pessoaMesa}`);

}else if (divideConta == 1 && metodoPagamento == 3){
    console.log(`O total para cada integrante da mesa pagar é de: " R$ ${totalConta/pessoaMesa}`);

}else if (divideConta == 2 && metodoPagamento == 1 || metodoPagamento == 2){
    console.log(`O total da mesa a pagar é de: " R$ ${totalComDesconto}`);

}else {(divideConta == 2 && metodoPagamento == 3)
    console.log(`O total da mesa a pagar é de: " R$ ${totalConta}`);
}

//Calcula Gorjeta

let calculaGorjeta = [10,20,30,40,50];







// console.log(calculaGorjeta);