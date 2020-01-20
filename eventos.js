
(function readyJS(win, doc) {
    'use strict'

    let btn = doc.querySelector("#btn");
    let sel = doc.querySelector("#select");
    let btns = doc.querySelectorAll(".button");
    let btn4 = doc.querySelector("#btn4");
    let main = doc.querySelector(".main");
    let myarr = ["Joao", "Andre", "Diogo"];
    let name = "";
    let btn5 = doc.querySelector("#btn5");
    let menu = doc.querySelector(".menu");
    //defenir uma variavel para o body do html
    let body = doc.querySelector("body");
    let form1 = doc.querySelector("#form1");
    let inputext = doc.querySelector("#inputext");
    let txtArea = doc.querySelector("#txtArea");
    let lengthArea = doc.querySelector("#lengthArea");
    let check = doc.querySelector("#check");
    let radio = doc.getElementsByName("gender");
    let galeria = doc.querySelector(".galeria");
    let files = doc.querySelector("#img");
    let btnDb = doc.querySelector("#btnDb");
    let rel = doc.querySelector("#result");
    let resultados = doc.querySelector(".resultados");


    function Relogio() {

        let date = new Date();
        let hora = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();
        rel.innerHTML = hora + ":" + minutos + ":" + segundos;

        setTimeout(Relogio, 1000);

    }

    Relogio();


    //Funçao para alertar
    function alertar(event) {

        //Serve para prevenir a acção
        event.preventDefault();
        //o Target serve para ver ou buscar alguma coisa do elemento
        console.log(event.target.innerHTML);

        alert("Alerta GAY!");





    }


    //Função para quando se carrega num botão este muda a cor do backgroud da pagina
    function changeColor(event) {

        //Visualizar as propriedades do objecto
        console.log(event);


        body.style.background = event.target.dataset.color;

    }


    //Ciclo para percorrer a classe button 
    for (let i = 0; i < btns.length; i++) {

        btns[i].addEventListener("click", changeColor, false);

    }

    //Quando se carrega num botão muda o nome do botão para gay
    function alertCriado(event) {

        if (event.target.id === 'newButton') {
            event.target.innerHTML = "GAY";
        }

    }

    //Função que vai ao array buscar o ultimo nome inscrito no mesmo
    function criarNome(myarr) {

        name = myarr.pop();
        if (name === undefined) {

            alert('Nao existem mais nomes');


        }

    }


    //Função para criar um botão novo apos se clicar num botão
    function createElement(event) {


        event.preventDefault();


        const newButton = doc.createElement("button");
        criarNome(myarr);

        if (name === undefined) {

        } else {

            newButton.addEventListener("click", alertCriado, false);
            newButton.innerHTML = name;
            newButton.id = "newButton";
            main.appendChild(newButton);
        }



    }

    function toggle(event) {

        //se conter a classe show criada em css
        if (menu.classList.contains("show")) {

            //Remover a classe show e aprensentar uma imagem
            menu.classList.remove("show");
            btn5.setAttribute("src", "imag/botao1.png");
            body.style.backgroundColor = "Grey";

        } else {
            //Adcionar a classe show e apresentar uma imagems
            menu.classList.add("show");
            btn5.setAttribute("src", "imag/botao2.jpg");
            body.style.backgroundColor = "white";

        }




    }

    //Validar se o campo esta preenchido
    function validarTexto(event) {


        if (event.target.value == "") {

            alert("Preencha o campo texto!")

        }

    }

    function countArea(event) {

        lengthArea.innerHTML = event.target.textLength;


    }


    function valOption(event) {

        if (event.target.selectedIndex == 0) {

            alert("Selecione uma opcao!");

        }

    }

    txtArea.addEventListener("blur", validarTexto, false);
    txtArea.value = "Digite o seu texto";
    //keyup quando escrevemos do teclado
    txtArea.addEventListener("keyup", countArea, false);
    //Blur quando deixamos o evento para outro
    inputext.addEventListener("blur", validarTexto, false);
    //na variavel inputext dar por pre-definição a palavra texto no campo em htlm
    inputext.value = "Texto";
    btn5.addEventListener("click", toggle, false);

    btn4.addEventListener("click", createElement, false);

    sel.addEventListener("change", valOption, false);
    btn.addEventListener("click", alertar, false);



    //CheckBox não esta a funcionar 

    if (check.checked == false) {

        alert("Aceite os termos!");


    }


    //Radio

    function radioTeste(event) {

        if (event.target.value == "Male") {

            alert("Gay");

        } else {

            alert("fufa");
        }

    }

    for (let i = 0; i < radio.length; i++) {

        radio[i].addEventListener("click", radioTeste, false);


    }

    //dar um previou da imagem 
    function prevImag(event) {

        //cada vez que carregamos uma imagem ele substitui pelas novas
        galeria.innerHTML = "";



        let file = event.target.files;
        for (let i = 0; i < file.length; i++) {

            //propriedade do  js,constructor
            let reader = new FileReader();
            reader.onload = function (event) {
                //retirar o url da imagem carregada
                let urlImg = event.target.result;
                //criar um novo elemento do tipo imagem
                let newImg = doc.createElement("img");
                //Atribuir o url a nova imagem
                newImg.setAttribute("Src", urlImg);
                //defenir a apresentação da imagem
                newImg.style = "width: 100px; margin: 5px";
                //defenir a apresentação da imagem na div criada para o efeito
                galeria.appendChild(newImg);




            }

            //ler a função anterior como um  URl
            reader.readAsDataURL(file[i]);


        }


    }

    files.addEventListener("change", prevImag, false);


    function showDb() {

        let ajax = new XMLHttpRequest();
        //pedido de requisição
        ajax.open('GET', 'ajax.json');
        ajax.onreadystatechange = function () {
            if (ajax.status === 200 && ajax.readyState === 4) {

                console.log("Pedido ao backend enviado e recebido!")
                //ajax.responseText--> vai pedir o ficheiro json JSON.parse--> retorna um objecto com a informação 
                let res = JSON.parse(ajax.responseText);
                console.log(res);
                //declarar a variavel que vai receber o objecto retorando
                let car = res.car;
                //percorrer o objecto para retirar a informação da cor
                for (let i = 0; i < car.length; i++) {

                    console.log(car[i].color);
                    console.log(car[i].year);

                }


            } else {

                console.log("Algo no pedido não está bem!")

            }


        };
        //envio do pedido
        ajax.send();

    }

    btnDb.addEventListener("click", showDb, false);


    function mostrar() {

        return this.title+ " " + this.pages;
    }

    let livros = {
        title: "Ondas",
        pages: 18
    };

    let livros1 = {
        title: "mares",
        pages: 24
    };

    //Utilização do metodo call, de forma a alterar o this na função mostrar, podendo manter o codigo
    //resultados.innerHTML = mostrar.call(livros);
    //KK

    let ajax=new XMLHttpRequest();
    ajax.open("GET","Array.js");
    ajax.onreadystatechange=function(){

        if(ajax.status === 200 && ajax.readyState === 4){

            
           console.log(ajax.responseText);
           
            


        }


    }
    ajax.send();



})(window, document);

