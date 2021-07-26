function Capturar() {
    var fat = document.querySelector("#fatorial");
    var fib = document.querySelector("#fibonacci");
    var numero1 = parseInt(fat.value);
    var numero2 = parseInt(fib.value);
    var soma = fatorial(numero1) + fibonacci(numero2);

    $('.divider-2').css({ 'height': '3px', 'background-color': 'grey' });
    $('.caixa2').css({ 'visibility': 'visible' , 'position':'relative'});
    $('.caixa2').addClass('animate__animated animate__zoomIn');
    $('.caixa1Animate').addClass('animate__animated animate__slideInRight');
    $('.container').css({'flex-direction':' row'})
    $('#exibir').html('<span>resultado do Fatorial: </span><br>' + fatorial(numero1));
    $('#exibir1').html('<span>resultado do Fibonacci: </span><br>' + fibonacci(numero2));
    $('#exibir2').html('<span>Soma dos resultados: </span><br>' + soma);
    $('#exibir3').html('<span>Soma codificada: </span><br>' + cifra(soma));
}

function fatorial(numero1) {
    var fact = 1;
    for (var i = 0; numero1 > i; numero1 = numero1 - 1) {
        fact = fact * numero1;
    }
    return fact;
}

function fibonacci(numero2) {
    if (numero2 == 0 || numero2 == 1)
        return numero2;
    return fibonacci(numero2 - 1) + fibonacci(numero2 - 2);
}

function cifra(soma) {

    //---Declaração de variavéis---//

    var vetor = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];
    var i = 0, juntarPares = "", result, digito;
    var numeroDoPar = new Array();
    var somaString = soma.toString();
    var tamanhoSoma = somaString.length;

    //---Estrutura da lógica---//

    if (tamanhoSoma <= 2) {
        if (soma <= 24)
            return vetor[soma];
        else
            return soma;
    }
    else{
        while (soma > 0) {
            digito = soma % 10; 
            numeroDoPar[i] = digito.toString();
            soma = (soma - digito) / 10;
            tamanhoSoma = tamanhoSoma - 1;

            if (soma < 10 && i == 0 && tamanhoSoma == 0) {
                result = digito.toString();
                if (parseInt(result) <= 24)
                    juntarPares = juntarPares + vetor[parseInt(result)];
                else
                    juntarPares = juntarPares + result.split('').reverse().join('');
            }
            i = i + 1
            if (i > 1) {
                result = numeroDoPar[1] + numeroDoPar[0];
                i = 0;
                if (parseInt(result) <= 24)
                    juntarPares = juntarPares + vetor[parseInt(result)];
                else
                    juntarPares = juntarPares + result.split('').reverse().join('');
            }
        }
        return juntarPares.split('').reverse().join('');
    }
}

    