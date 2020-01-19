import ClassJob from "./ClassJob.js";


export default class ClassPessoa extends ClassJob {


    constructor() {
      //Quando fazemos "extends" de outra classe temos de colocar o "super()" para que possamos usar a classe que estamos a estender
      //Quando usamos "this"--> refere-se a classe onde estamos a trabalhar
      //Quando usamos "super"--> refere-se a classe a qual estamos a extender   
        super();
        

    }

    setPessoa(name, age) {

        this.name = name;
        this.age = age;

    }

    getInformation(){

        return "Nome: " + this.name+  " Idade: " +  this.age + " Função: " + super.getFunc() + " Empresa: " +  super.getEmp();
    }


}