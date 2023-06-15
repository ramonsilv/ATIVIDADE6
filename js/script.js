// EXERCICIO 1

function tabuada(){
    numero = document.getElementById('n1').value
    resultado = ""

    for (i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>"
    }

    document.getElementById('resultado').innerHTML = resultado
}

// EXERCICIO 2

function numerosPares() {
    numero = document.getElementById('numer').value
    resultado = ""

    for (i = 2; i <= numero; i += 2) {
        resultado += i + ", "
    }

    document.getElementById('result').innerHTML = "São numeros Pares: " + resultado
}

// EXERCICIO 3

function soma() {
    numero = parseInt(document.getElementById('num3').value)
    soma = 0

    while (numero !== -1) {
        soma += numero
        numero = parseInt(prompt("Digite um número (digite -1 para parar):"))
    }

    document.getElementById('resultado3').innerHTML = "A soma dos números é: " + soma
}