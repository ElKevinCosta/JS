/*//Defenir um alerta na pagina a visualizar
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
/*
let multNumber = (x, y) => x + y;
console.log(multNumber(10, 3));
*/
/*
//Criar Objectos

let person = new Object();
person.name = "El Chapo";
person.age = "28";
person.gg = "kk";
console.log(person);

//Segunda forma de criar objectos

let person2 = {
    name: "El Costa",
    age: 30,
    status: false,
    array: ["profissional", "bonito"],
    work: function () {
        alert("work");
    },
    //Chamar outro objecto dentro de um objecto
    support: person,
    //usar a palavra this dentro do objecto para retornar algo do objecto
    useThis: function () {
        return this.age;

    }
}
console.log(person2);
console.log(person2.array);
console.log(person2.array[1]);
console.log(person2.useThis());

//ciclos

var number = "";

for (let i = 0; i < 10; i++) {

    number += i;
}

var i = 0;

while (i < 10) {

    number += i;
    i++;
}

var i = 0;

do {
    number += i;
    i++;

} while (i < 10);

//ciclo para percorrer objectos

let person = {
    name: "Costa",
    age: 18,
    cidade: "BRR"

}

for (key in person) {

    console.log(key);
    console.log(person.name);

}
*/
//Criar Arrays(Sao objectos maiores)
/*
let myarr= new Array("Costa","Consultor",10);

let myArr2=["Chapo","Traficante",2];

//objecto dentro de um array definir sempre em qual posição no array [2]

let myarr3= new Array("Costa","Consultor",{localidade: "Centro"});
console.log(myarr3[2].localidade);

//alterar dados dentro do array
myarr3[0]="Joao";
//adicioar uma nova posição ao array com informaçao
myarr3[3]=1212;
//consultar o tamanho do array
myarr3.length;
*/
/*
//Operacoes com arrays
let array = [1, 2, 3];
let array2 = ["a", "b", "c"];

//Juntar dois arrays CONCAT
let arrayFinal = array.concat(array2);

//EVERY verficiar neste caso se o array é apenas constituido por numeros

let x = arrayFinal.every(
    function verifyelements(elem, ind, obj) {
        return (typeof elem == "number");
    }
);

//FILTER serve para percorrer o array e selecionar apenas aqueles que queremos ver

let x = arrayFinal.filter(
    function verifyelements(elem, ind, obj) {
        return (elem > 3);
        //ou retornar as strings
        return (typeof elem == "string");
    }
);

//FOREACH percorrer os dados do array e aprensetar como queremos
let data = "";
letforEach = arrayFinal.forEach(
    function verifyelements(elem, ind, obj) {
        data += "Indice " + ind + " : " + "\n";
    }
);

//INDEXOF procurar algo especifico dentro do array da a posição da informaçao dentro do array
let indexOfx = arrayFinal.indexOf(4);

//LASTINDEXOF procurar no array e dar a ultima posição com a informação que queremos
let lastIndexOf = arrayFinal.lastIndexOf("S");

//JOIN replica todo o array transformando-a numa String
let joinX = arrayFinal.join();

//MAP mapear os valores do array
let mapFinal = [];
let mapX = arrayFinal.map(
    function verifyelements(elem, ind, obj) {
        if (typeof elem == "number") {
            //push adiciona no final do array
            mapFinal.push(elem * 2);
        } else {

            mapFinal.push(elem);
        }
    }
);
//POP para retirar o ultimo elemento do array
mapFinal.pop();

//SOME verifica se a condição é verdade ou mentira, retorna apenas TRUE ou FALSE
let someX = arrayFinal.some(
    function verifyelements(elem, ind, obj) {
        return (elem == 3);
    }
);

//REVERSE inverter o array
let reverseX = arrayFinal.reverse();
*/
/*
// THIS --> Quando usado dentro de uma funçao faz referencia a mesma, quando fora faz referencia a window
//Use Strict --> Não permite erros de js corriji o this dentro das funções , se nao houver nada da undefined
"use strict"; //declarar
//IIFE(imediately-invoed function expression)--> Permite usar uma funçaõ sem a chamar e reservar os elemntos da função para ela mesmo e apenas
(function(win,doc){
    "use strict";
    let x=20;
    console.log(x); // apenas permite fazer o console.log dentro da função

})(window,document);
*/

//Validar o tipo de dado (number,string,boolean,object)TYPEOF
//EX: typeof arr[i] === "Number"
/*
//Validar se é um array puro
console.log(Array.isArray(NOME DO ARRAY));
//JSON da para fazer varias funçoes com ela serve para AJAX
*/


//Selecionar elementos htlm pelo "ID" ou CLASS

/*(function readyJS(win,doc)){
    "use strict"*/

/*let teste=doc.getElementByID("test");
//Adicionar uma class
teste.className="New Class";
//Modificar a cor
teste.style.color="Pink";*/

/*
//Se tiver uma classe com varios botoes vai buscar todos
let myClass =doc.getElementByClassName("btn");
//Pushar o primeiro botao dentro da class
myClass[0].innerHTML*/

/*
//Por query # (um ID), . (Uma Class) , "[ex. title="Teste"]" por atributo, quando uma class vai buscar o primeiro da lista
let byQuery= doc.querySelector("#teste");*/

//Selecionar tudo e percorrer exemplo butoes
//INNERHTLM vai buscar a referencia em htlm do que estamosa selecionar
/*
    let byQueryAll= doc.querySelectorAll(".btn");
    for(let i=0; i<byQueryAll.length; i++){
        byQueryAll[i].addEventListener("Click", function(){

            //Netes caso ao clicar em cada botao diz que cliclamos no botao + o nome do botao
            alert ("Click button: " + this.innerHTML);

        })


    }

}
*/
/*
//Expressoes regulares com String

let msg="ola o antonio é um senhor maluco";

//Devolve um array com as posições do que estamos a pesquisar
// /aqui dentro colocamos o que queremos pesquisar/
//g--> Global i-->ignore case, vai procurar independentemente do que colocarmos(maiscula ou minuscula), m-->multiple lines
// /P|e/ vai procurar palavras com P ou e a mesma coisa /[Pe]/
// [A-Z], pesquisar de A a Z [A-Za-z0-9],pequisar de A a Z maiscula e miniscula e de 0 a 9
// /(Ola)/ , quando dentro de parenteses pesquisa exactamente a palavra que esta la dentro
// se (150+) vai procurar o 150 + tudo igual ao ultimo numero neste caso 0 ex: 15000,150000,1500000
// Devolver o texto todo /.+/g
// /(^antonio)/ devolver o texto que comecar por aquela letra ou palavra
// /(maluco$)/ devolver o texto que acabe com aquela letra ou palavra
//Validar se existe alguma palvra com 2 rr /r{2}/ 
// /\d devolve todos os digitos na string
// /\D tudo menos digitos
// /\w todos os caracteres alfa numericos menos espaços
// /\W tudo o que não é alfa numerico
// /\s devolve os espaços
// /\S tudo o que não é espaço
// \. para pesquisar mesmo um ponto

let regex =/e/gim ;

// Match retornar uma pesquisa
let result =msg.match(regex);

//Split corta a string pelo que queremos
// exemeplo que queremos que nos digitos ele divida a string vamos usar o /\d
let result2 = msg.split(regex);

//Replace, procurar na string e substituir pelo que queremos
let result = msg.replace(regex,"ele é gay");
//função dentro do replace
let result = msg.replace(regex,function(x){

    return "__"+x.toUpperCase()+"__";

});



//Search pesquisar na string, devolve o numero do caracter se verdadeiro ou -1 se falso
let result = msg.search(regex);

*/

//setTimeOut(função,tempo para aparecer segundos); Fica a escuta a espera que passe aquele tempo para exibir
//setInterval(função,tempo para aparecer segundos); Fica a escuta e sempre que passar aquele tempo ele executa repetidamente

//AJAX

//pedido de requisição GET--> Pedir POST-->Enviar
//ajax.open('GET', 'ajax.json');
//envio do pedido
//ajax.send();
//Quando o pedido altera o estado
//ajax.onreadystatechange = function () {}
//Quando o pedido começa ,podemos fazer alterações as nossas coisas"botoes"
//ajax.onloadstart=fuction(){}
//Quando o pedido esta em progresso
//ajax.unpload.onprogress=fuction(){}
//Quando o pedido está terminado
//ajax.onloadend=function(){}
/*
//Herença prototype, usar o prototype so para situações onde os dados não são alterados
function pessoa(name, year, funcao) {

    this.name = name;
    this.year = year;
    this.friends = ["carlos", "joao"];
    this.funcao = funcao;
}
//Neste caso todos os obj vão receber por herança a cidade Brr
pessoa.prototype.cidade = "Brr";
//adicionar dados a ultima posição do array friends numa nova pessoa
let obj = new pessoa();
obj.friends.push("ana");

pessoa.prototype.salario = function () {

    if (this.funcao === "patrao") {
        return 500;
    } else if (this.funcao === "chupapilas") {

        return 0;
    }



}

let obj2 = new pessoa("chris", "2010", "chupapilas");
console.log(obj2.salario());
*/
/*
//Usar 2 paginas de java script entre sim com Herença Global
//usar o parametro win
//1 app nome para a nova funçao do window e 2 app nome da funçao que estamos a passar
//Na nova janela de js ja é possivel usar a funça app
//é possivel usar tambem na pagina de html

function app(){

}

win.app=app;


*/
//Modulos export e import
//HTML --> <script type"module">
//export {o que queremos};
//import {o que queremos} from './directorio.js'