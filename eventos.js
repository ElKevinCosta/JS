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
    let lengthArea= doc.querySelector("#lengthArea");


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
            body.style.backgroundColor="Grey";

        } else {
            //Adcionar a classe show e apresentar uma imagems
            menu.classList.add("show");
            btn5.setAttribute("src", "imag/botao2.jpg");
            body.style.backgroundColor="white";

        }




    }

    //Validar se o campo esta preenchido
    function validarTexto(event){


        if(event.target.value==""){

            alert("Preencha o campo texto!")

        }

    }

    function countArea(event){

        lengthArea.innerHTML= event.target.textLength;


    }

    txtArea.addEventListener("blur",validarTexto,false);
    txtArea.value="Digite o seu texto";
    //keyup quando escrevemos do teclado
    txtArea.addEventListener("keyup",countArea,false);
    //Blur quando deixamos o evento para outro
    inputext.addEventListener("blur", validarTexto,false);
    //na variavel inputext dar por pre-definição a palavra texto no campo em htlm
    inputext.value="Texto";
    btn5.addEventListener("click", toggle, false);

    btn4.addEventListener("click", createElement, false);

    sel.addEventListener("change", alertar, false);
    btn.addEventListener("click", alertar, false);







})(window, document);