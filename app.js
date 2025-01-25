let quantidadeMilhas = parseInt(prompt('Digite a quantidade de Milhas que você possui e receba desconto no seu Iphone 16 PRO MAX:'));
let porcentagemDesconto = 0;
let iphone16ProMax = 17.358;

function porcentagem(valorDesconto) {
    let porcentagem = (valorDesconto / 100) * iphone16ProMax;
    let valorFinal = iphone16ProMax - porcentagem;
    alert(`Parabéns! Você ganhou ${valorDesconto}% de desconto na compra do seu Iphone 16 Pro Max.
    Valor do Iphone: ${iphone16ProMax}. Desconto: ${porcentagem.toFixed(3)}. Preço final: ${valorFinal.toFixed(3)}.`);
};

if (quantidadeMilhas >= 30000) {
    porcentagem(20);
} else {
    if(quantidadeMilhas < 5000) {
        alert(`Quantidade de Milhas Insufiente.`);
    } else {
        porcentagem(10);
    };
};