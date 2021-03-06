console.log("Hello World");

//types

var myString: string = "Hello Mundo"; // obliga el dato a ser de un tipo en especifico agregando : [tipo de dato]

myString = 22 + "";

var myNumber = 212; // una vez asignado un tipo de valor se mantiene validando el mismo aunque no lo obliga a ser de ese tipo
var myBool: boolean = true || false;


var myVar: any = "hello"; //para que acepte cualquier dato
myVar = 24252;


//Strings

document.write(myNumber.toString());

//Arreglos

var stringArray: string[] = ["item", "item2", "item3", ""];
var numberArray: number[] = [1, 2, 3, 4];
var booleanArray: Boolean[] = [true, false, true];
var anyArray: any[] = [true, 2, "sfoj", [], {}];


//tuple
var strNumTuple: [string, number];

strNumTuple = ["Hello", 22];


//void, undefined, null
const pi = 3.1415; //  crear constantes

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;


document.write(typeof (strNumTuple)); //typeof devuelve que tipo de dato es la variable


//function

function getSum(num1: number, num2: number) {
    return num1 + num2;
}

let mySum = function (num1: number | string,
                      num2: number | string): number {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }

    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;

}

/*
function getName(firstName: string, lastName: string): string {
    if(lastName === undefined){
        return firstName; //aqui hay algo raro, deberia usar ES6

    }
    return firstName + ' ' +lastName; //aqui hay algo raro, deberia usar ES6

//    return '$(firstName) $(lastName)'; //aqui hay algo raro, deberia usar ES6
}

document.write(getName("Guillermo", "Cheng")); */


function myVoidFunction(): void {
    return;
}

//Interfaces

interface IToDo {

    title: string;
    text: string;

}

function showToDo(todo: IToDo) {
    console.log(todo.title + ' ' + todo.text);

}

let myToDo: IToDo = {title: 'Eat Dinner', text: 'lorem'}

showToDo(myToDo)

document.write();

// Clases

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(this.name + ' is registre');
    }

    showMeAge() {
        return this.age;
    }

    public AgeInYears() {
        return this.age + ' years';
    }

    payInvoice(){
        console.log('EL usuario ' + this.name + ' Pago su factura');
    }
}

var john = new User('John', 'Gogasdg', 27);

console.log(john.register());

console.log(john.AgeInYears());


document.write(john.email);


class miembros extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;

    }

    metodoMas(){
        super.payInvoice();
    }


}


var gordon = new miembros(1, 'gordon', 'gordon@gmail.com', 23);

gordon.payInvoice();