(function readyJS(win,doc){
    'use strict';

let search=doc.querySelector("#search");


function sendForm(){

  let ajax= new XMLHttpRequest();
  ajax.open("GET","calculadora.js");
  ajax.onreadystatechange=function(){

    if(ajax.status=== 200 && ajax.readyState===4){

        console.log(ajax.responseText);

    }

  }
  ajax.send();

}

//Nesta situação, cada vez que fazemos a chamada ao servidor "sendForm", ele aguarda 3segundos para fazer a proxima chamada
search.addEventListener("keyup", debounce(sendForm,3000),false);

//função que vai evitar chamadas repetidas ao servidor, isto é, assim podemos determinar o tempo entre cada chamada
function debounce(func,wait){

    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(func,wait);

    }

}

})(window,document);