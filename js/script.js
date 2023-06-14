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

function numeroPares(){
    numero = document.getElementById('numer').value
    
}