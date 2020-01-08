//Defenir um alerta na pagina a visualizar
alert('Fase de teste');

//Declarar uma variavel (var)- variavel ou (const)- constante (let)- só funciona se tiver dentro da função-->USAR
const name = "El Chapo"; // declara a variavel pode comecar por : $, a-z maiscula ou minuscula ou _
let pi = 3.14;
let option = false;//boleano
let texto = "kfskgksdglks";
let arr = ["rua", "fruta", 1]; //array
let obj = {
    prop1: "El Chapo",
    prop2: "Canina",
    arr: [1, 2, "a"],
    // func: myName()
}; // declarar um objecto --> o mais completo e pode conter propriedades e metodos

//Criar uma caixa de dialogo 
confirm("Deseja mesmo apagar este dado ? \n se desejar apagar clique 'ok'")

//Criar caixa de prompt
prompt("Qual o seu carro preferido", "Indique o carro")

//Ciclo for
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// if e alternativa
let age = 18;

if (age > 18) {
    console.log("é maior de idade");
} else if (age == 18) {
    console.log("tem exactamente 18 anos");
} else {
    console.log("é menor de idade");
}
(age >= 18) ? console.log("é maior de idade") : console.log("é menor de idade");

//switch

let year = 2;

switch (year) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Mês invalido!");
        break;
}

//Declarar funções --> funções retornam sempre algo

//funçao para multiplicar valores
function multNumbers(x, y) {

    let result = x * y;
    return result;
}

console.log(multNumbers(10, 2));

//Atribuir uma variavel a função

let mult = function multNumbers(x, y) {

    let result = x * y;
    return result;
}

console.log(mult(2, 5));

//funçao dentro de um objecto

let objMult = {
    func: function multNumbers(x, y) {

        let result = x * y;
        return result;
    }

}
console.log(objMult.func(4, 2));

//Função dentro de função (funçao closer --> serve para proteger dados que estejam dentro de funções)

function myName(val) {

    let name;

    function setName() {

        if (val == 1) {
            name = "Kevin";
        } else if (val == 2) {
            name = "Vanessa";
        } else {
            name = "Nenhum nome disponivel";
        }
        return name;

    }
    return setName();

}
console.log(myName(2));

// função simplificada ARROW FUNCTION

/*function multNumbers(x, y) {

    let result = x * y;
    return result;
}

console.log(multNumbers(10, 2));*/

let multNumber = (x, y) => x + y;
console.log(multNumber(10, 3));