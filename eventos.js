(function readyJS(win, doc) {
    'use strict'

    let btn = doc.querySelector("#btn");
    let sel = doc.querySelector("#select");
    let btn2 = doc.querySelectorAll(".button");
    let body = doc.querySelector("body");
    let btn4 = doc.querySelector("#btn4");
    let main = doc.querySelector(".main");
    let myarr = ["Joao", "Andre", "Diogo"];
    let name = "";

    //Funçao para alertar
    function alertar(event) {

        //Serve para prevenir a acção
        event.preventDefault();
        //o Target serve para ver ou buscar alguma coisa do elemento
        console.log(event.target.innerHTML);

        alert("Alerta GAY!");





    }

    function changeColor(event) {

        //Visualizar as propriedades do objecto
        console.log(event);


        body.style.background = event.target.dataset.color;

    }

    for (let i = 0; i < btn2.length; i++) {

        btn2[i].addEventListener("click", changeColor, false);

    }

    function alertCriado(event) {
        
        if (event.target.id === 'newButton') {
            event.target.innerHTML = "GAY";
        }

    }

    function criarNome(myarr) {

        name = myarr.pop();
        if (name === undefined) {

            alert('Nao existem mais nomes');


        }

    }


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

    btn4.addEventListener("click", createElement, false);
    
    sel.addEventListener("change", alertar, false);
    btn.addEventListener("click", alertar, false);

})(window, document);