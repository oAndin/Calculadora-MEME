console.log("Hello World!");

myBtn.onclick = function mudarInput(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = document.getElementById("resultado");
    let soma = n1 + n2;
    resultado.value = `${soma}`;
    console.log(soma);
};
