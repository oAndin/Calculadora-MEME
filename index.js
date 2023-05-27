console.log("Hello World!");

// let n1 = document.getElementsByClassName("numero1");
// let n2 = document.getElementsByClassName("numero2");
// let resultado = n1 + n2;


// function soma(){ 
//     let n1 = document.getElementById("numero1");
//     let n2 = document.getElementById("numero2");
//     let resultado = n1 + n2;
//     document.getElementsByClassName("resultado")="resultado"
//     }

// const myBtn = document.querySelector("button");
const myBtn = document.querySelector("button")[0];
console.log(myBtn); 



let n1 = document.querySelector(".numero1");
console.log(n1);
// How to get the value of an input
// 1º get the input
// 2º We need to get the value with the ".value"
const getValue1 = document.querySelector(".numero1".value);
console.log(getValue1);



// let n2 = document.querySelector(".numero2");
// console.log(n2);
const getValue2 = document.querySelector(".numero2".value);
console.log(getValue2);

const soma = function (){
    value(n1) + value(n2);
}

console.log(soma)

// myBtn.addEventListener("click", clicou);
// function clicou() {
//     console.log("Clicou");
// }

