console.log("Hello World");
//types
var myString = "Hello Mundo"; // obliga el dato a ser de un tipo en especifico agregando : [tipo de dato]
myString = 22 + "";
var myNumber = 212; // una vez asignado un tipo de valor se mantiene validando el mismo aunque no lo obliga a ser de ese tipo
var myBool = true || false;
var myVar = "hello"; //para que acepte cualquier dato
myVar = 24252;
//Strings
document.write(myNumber.toString());
//Arreglos
var stringArray = ["item", "item2", "item3", ""];
var numberArray = [1, 2, 3, 4];
var booleanArray = [true, false, true];
var anyArray = [true, 2, "sfoj", [], {}];
//tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
//void, undefined, null
const pi = 3.1415; //  crear constantes
let myVoid = undefined;
let myNull = null;
let myUndefined = undefined;
document.write(typeof (strNumTuple)); //typeof devuelve que tipo de dato es la variable
//function
function getSum(num1, num2) {
    return num1 + num2;
}
let mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
/*
function getName(firstName: string, lastName: string): string {
    if(lastName === undefined){
        return firstName; //aqui hay algo raro, deberia usar ES6

    }
    return firstName + ' ' +lastName; //aqui hay algo raro, deberia usar ES6

//    return '$(firstName) $(lastName)'; //aqui hay algo raro, deberia usar ES6
}

document.write(getName("Guillermo", "Cheng")); */
function myVoidFunction() {
    return;
}
function showToDo(todo) {
    console.log(todo.title + ' ' + todo.text);
}
let myToDo = { title: 'Eat Dinner', text: 'lorem' };
showToDo(myToDo);
document.write();
// Clases
class User {
    constructor(name, email, age) {
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
    AgeInYears() {
        return this.age + ' years';
    }
    payInvoice() {
        console.log('EL usuario ' + this.name + ' Pago su factura');
    }
}
var john = new User('John', 'Gogasdg', 27);
console.log(john.register());
console.log(john.AgeInYears());
document.write(john.email);
class miembros extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    metodoMas() {
        super.payInvoice();
    }
}
var gordon = new miembros(1, 'gordon', 'gordon@gmail.com', 23);
gordon.payInvoice();
