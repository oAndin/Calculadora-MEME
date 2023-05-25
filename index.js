console.log("Hello World!");

// let n1 = document.getElementsByClassName("numero1");
// let n2 = document.getElementsByClassName("numero2");
// let resultado = n1 + n2;


function soma(){ 
    let n1 = document.getElementsByClassName("numero1");
    let n2 = document.getElementsByClassName("numero2");
    let resultado = n1 + n2;
    document.getElementsByClassName("resultado")="resultado"
    }

document.getElementsByClassName("myBtn").addEventListener("click", soma());

// n1 = window.prompt("Digite o primeiro número");
// n2 = window.prompt("Digite o segundo número");
// resultado = n1 + n2;

// window.alert(resultado);