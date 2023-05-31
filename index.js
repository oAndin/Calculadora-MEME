console.log("Hello World!");

// 1º step -> We need to get the input values with querySelector and store them into the Global Scope, so when we call back to use them into the function!

// 2º step -> We use a Function which here we called "sum" because yes, it is the meme, which function will concatenate the two input values, bacause they are both Strings!

// 3º step ->  We will use document.write to guess what, write the output into the input field aftert an eventListener from our button!


const myBtn = document.querySelector("#myBtn");
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const resultado = document.getElementById("resultado");

myBtn.addEventListener ("click", () => {
    console.log("Clickou");
    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    const resultado = n1 + n2;
    resultado.innerHTML = document.write`${resultado}`
    console.log(resultado);
});