let quantidadeMilhas = parseInt(prompt('Digite a quantidade de Milhas que você possui e receba desconto no seu Iphone 16 PRO MAX:'));
let porcentagemDesconto = 0;
let iphone16ProMax = 17.358;

if (quantidadeMilhas >= 30000) {
    let porcentagem = (20 / 100) * iphone16ProMax;
    let desconto = iphone16ProMax - porcentagem;
    alert(`Parabéns, você ganhou um desconto de 20% na compra do seu Iphone 16 Pro Max.
    Desconto de ${porcentagem.toFixed(3)} em cima do Valor do Iphone> ${iphone16ProMax}. Preço com desconto: ${desconto.toFixed(3)}.`)
} else {
    if(quantidadeMilhas < 5000) {
        alert(`Quantidada de Milhas Insufiente para ganhar desconto. Valor do Iphone: ${iphone16ProMax}`);
    } else {
        let porcentagem2 = (10 / 100) * iphone16ProMax;
        let desconto2 = iphone16ProMax - porcentagem2;
        alert(`Parabéns, você ganhou um desconto de 10% na compra do seu Iphone 16 Pro Max.
    Desconto de ${porcentagem2.toFixed(3)} em cima do Valor do Iphone> ${iphone16ProMax}. Preço com desconto: ${desconto2.toFixed(3)}.`)
    };
};