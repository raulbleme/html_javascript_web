function exibir(){
    window.alert("Hello World");
}

function verificar(){
    var numero = window.prompt("Digite um número");
    var resto = parseInt(numero)%2;
    if(resto == 0){
        window.alert("O número é par.");
    }
    else{
        window.alert("O número é impar.");
    }
}

function somar(valor1, valor2){
    var resultado = parseInt(valor1) + parseInt(valor2);
    return resultado;
}

function calcular(){
    var operacoes = document.getElementsByName("optCalcula");
    if (operacoes[0].checked == true){
        document.getElementById("txtResultado").value = parseInt(document.getElementById("valor1").value) + parseInt(document.getElementById("valor2").value);
    }
    else if (operacoes[1].checked == true){
        document.getElementById("txtResultado").value = parseInt(document.getElementById("valor1").value) - parseInt(document.getElementById("valor2").value);
    }
    else if (operacoes[2].checked == true){
        document.getElementById("txtResultado").value = parseInt(document.getElementById("valor1").value) / parseInt(document.getElementById("valor2").value);
    }
    else if (operacoes[3].checked == true){
        document.getElementById("txtResultado").value = parseInt(document.getElementById("valor1").value) * parseInt(document.getElementById("valor2").value);
    }
}